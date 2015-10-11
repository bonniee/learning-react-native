var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  Image
} = React;

var Forecast = require('./Forecast');
var LocationButton = require('./LocationButton');
var STORAGE_KEY = '@SmarterWeather:zip';
var WEATHER_API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';
var API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

// This version uses flowers.png from local assets
// var PhotoBackdrop = require('./PhotoBackdrop/local_image');

// This version has you to pick a photo
var PhotoBackdrop = require('./PhotoBackdrop');

// This version pulls a specified photo from the camera roll
// var PhotoBackdrop = require('./PhotoBackdrop/camera_roll_example');

var WeatherProject = React.createClass({
  getInitialState() {
    return {
      forecast: null
    };
  },

  componentDidMount: function() {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((value) => {
        if (value !== null) {
          this._getForecastForZip(value);
        }
      })
      .catch((error) => console.log('AsyncStorage error: ' + error.message))
      .done();
  },

  _getForecastForZip: function(zip) {
    // Store zip code
    AsyncStorage.setItem(STORAGE_KEY, zip)
      .then(() => console.log('Saved selection to disk: ' + zip))
      .catch((error) => console.log('AsyncStorage error: ' + error.message))
      .done();

    this._getForecast(
      `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`);
  },

  _getForecastForCoords: function(lat, lon) {
    this._getForecast(
      `${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`);
  },

  _getForecast: function(url, cb) {
    fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
          }
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  },

  _handleTextChange: function(event) {
    var zip = event.nativeEvent.text;
    this._getForecastForZip(zip);
  },

  render: function() {
    var content = null;
    if (this.state.forecast !== null) {
      content = (
        <View style={styles.row}>
          <Forecast 
            main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp}/>
        </View>);
    }

    return (
        <PhotoBackdrop>
          <View style={styles.overlay}>
           <View style={styles.row}>
             <Text style={textStyles.mainText}>
               Current weather for 
             </Text>
             <View style={styles.zipContainer}>
               <TextInput
                 style={[textStyles.mainText, styles.zipCode]}
                 returnKeyType='go'
                 onSubmitEditing={this._handleTextChange}/>
             </View>
           </View>
           <View style={styles.row}>
             <LocationButton onGetCoords={this._getForecastForCoords}/>
           </View>
           {content}
         </View>
        </PhotoBackdrop>
    );
  }
});

var textStyles = require('./styles/typography.js');
var styles = StyleSheet.create({
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  row: {
    width: 400,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
    width: 10
  },
  zipCode: {
    width: 50,
    height: textStyles.baseFontSize,
  }
});

module.exports = WeatherProject;
