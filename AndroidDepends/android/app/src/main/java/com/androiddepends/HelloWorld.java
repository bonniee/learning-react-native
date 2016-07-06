package com.androiddepends;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.util.Log;

public class HelloWorld extends ReactContextBaseJavaModule {
    
    public HelloWorld(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    
    @Override
    public String getName() {
        return "HelloWorld";
    }
    
    @ReactMethod
    public void greeting(String name) {
        Log.i("HelloWorld", "Hello, " + name);
    }
}
