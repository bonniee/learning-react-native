package com.depends;

import com.facebook.react.ReactActivity;
import com.depends.helloworld.HelloWorldPackage;

import java.util.List;
import java.util.Arrays;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.ReactPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
      return "Depends";
    }
}
