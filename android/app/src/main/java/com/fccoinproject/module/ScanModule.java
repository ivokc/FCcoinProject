package com.fccoinproject.module;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.fccoinproject.MainActivity;
import com.uuzuche.lib_zxing.activity.CaptureActivity;
import com.uuzuche.lib_zxing.activity.CodeUtils;


/**
 * coder：ivokc
 * company：bank of shanghai
 * project：FCcoinProject
 * package：com.fccoinproject.module
 * date：2019/1/27
 * description：
 */
public class ScanModule extends ReactContextBaseJavaModule {


    int CALL_QRSCAN_REQUEST_CODE = 1;
    private Promise mQRcodePromise;

    private static final String TAG = "ScanModule";
    public ScanModule(ReactApplicationContext reactContext) {
        super(reactContext);
        // Add the listener for `onActivityResult`
        reactContext.addActivityEventListener(mActivityEventListener);
    }


    @Override
    public String getName() {
        return "ScanModule";
    }

    @ReactMethod
    public void scan(Promise promise) {
        mQRcodePromise = promise;
        Activity currentActivity = getCurrentActivity();
        try{
            Intent intent = new Intent(currentActivity, CaptureActivity.class);
            currentActivity.startActivityForResult(intent, CALL_QRSCAN_REQUEST_CODE);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            if (requestCode == CALL_QRSCAN_REQUEST_CODE) {
                /**
                 * 处理二维码扫描结果
                 */
                if(mQRcodePromise != null){
                    if (resultCode == activity.RESULT_CANCELED){
                        mQRcodePromise.reject("RESULT_CANCELED","扫描取消");
                    }else if (resultCode == Activity.RESULT_OK){
                        Bundle bundle = data.getExtras();
                        if (bundle.getInt(CodeUtils.RESULT_TYPE) == CodeUtils.RESULT_SUCCESS) {
                            String result = bundle.getString(CodeUtils.RESULT_STRING);
                            mQRcodePromise.resolve(result);
                        } else if (bundle.getInt(CodeUtils.RESULT_TYPE) == CodeUtils.RESULT_FAILED) {
                            mQRcodePromise.reject("SCAN_FAILURE","解析二维码失败");
                        }
                    }
                }


            }
        }
    };



}
