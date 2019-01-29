package com.fccoinproject.utility;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;

import com.fccoinproject.constant.Constants;

import java.util.ArrayList;
import java.util.List;

/**
 * coder：ivokc
 * company：bank of shanghai
 * project：DigitalCurrency
 * package：com.bos.digitalcurrency.utilities
 * date：2018/7/31
 * description：
 */
public class PermissionUtility {
    public PermissionUtility() {
    }


    /**
     * 初始化权限事件
     */
    public static void initPermission(Activity context) {
        //检查权限
        String[] permissions = checkPermission(context);
        if (permissions.length == 0) {
            //权限都申请了
            //是否登录
        } else {
            //申请权限
            ActivityCompat.requestPermissions(context, permissions, Constants.MY_PERMISSIONS_REQUEST_CODE);
        }
    }
    //需要申请的权限
    private static String[] permissions = new String[]{
            Manifest.permission.CAMERA
    };

    //检测权限
    public static String[] checkPermission(Context context){
        List<String> data = new ArrayList<>();
        for (String permission : permissions) {
            int checkSelfPermission = ContextCompat.checkSelfPermission(context, permission);
            if(checkSelfPermission != PackageManager.PERMISSION_GRANTED){//未申请
                data.add(permission);
            }
        }
        return data.toArray(new String[data.size()]);
    }


}
