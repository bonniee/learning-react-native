var React = require("react-native");
var { AppRegistry } = React;
var CrossPlatform = require("./crossplatform");

AppRegistry.registerComponent("PlatformSpecific", () => CrossPlatform);
