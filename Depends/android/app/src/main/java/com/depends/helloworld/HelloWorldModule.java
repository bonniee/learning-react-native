package com.depends.helloworld;

import android.util.Log;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

public class HelloWorldModule extends ReactContextBaseJavaModule {
  public HelloWorldModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "HelloWorld";
  }

  @ReactMethod
  public void greeting(String message) {
    Log.e("HelloWorld", "Saluton, " + message);
    return;
  }
}