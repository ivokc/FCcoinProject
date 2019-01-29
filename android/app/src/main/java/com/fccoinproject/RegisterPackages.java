package com.fccoinproject;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.fccoinproject.module.ScanModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * coder：ivokc
 * company：bank of shanghai
 * project：FCcoinProject
 * package：com.fccoinproject
 * date：2019/1/27
 * description：
 */
public class RegisterPackages implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ScanModule(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
