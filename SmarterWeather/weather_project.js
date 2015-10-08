'use strict';

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

// This version gets you to pick a photo
// var PhotoBackdrop = require('./PhotoBackdrop');

// This version pulls a specified photo from the camera roll
var PhotoBackdrop = require('./PhotoBackdrop/camera_roll_example');


var STORAGE_KEY = '@SmarterWeather:zip';

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

    this._getForecast('http://api.openweathermap.org/data/2.5/weather?q='
      + zip + '&units=imperial');
  },

  _getForecastForCoords: function(lat, lon) {
    this._getForecast('http://api.openweathermap.org/data/2.5/weather?lat='
      + lat + '&lon=' + lon + '&units=imperial');
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
      content = <Forecast 
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp}/>;
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
                 style={[styles.zipCode, textStyles.mainText]}
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
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30,
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 50,
    height: textStyles.baseFontSize,
  },
  placeHolder: {
    flex: 1
  }
});

module.exports = WeatherProject;
