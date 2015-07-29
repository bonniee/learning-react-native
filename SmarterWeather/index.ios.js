'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} = React;

var Forecast = require('./Forecast');
var LocationButton = require('./LocationButton');

var WeatherProject = React.createClass({
  getInitialState: function() {
    return {
      zip: '',
      forecast: null
    };
  },

  _getForecastForZip: function(zip, cb) {
    this._getForecast('http://api.openweathermap.org/data/2.5/weather?q='
      + zip + '&units=imperial', cb)
  },

  _getForecastForCoords: function(lat, lon, cb) {
    this._getForecast('http://api.openweathermap.org/data/2.5/weather?lat='
      + lat + '&lon=' + lon, cb);
  },

  _getForecast: function(url, cb) {
    fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        cb(responseJSON);
      })
      .catch((error) => {
        console.warn(error);
      });
  },

  _handleTextChange: function(event) {
    var zip = event.nativeEvent.text;
    this.setState({zip: zip});

    this._getForecastForZip(zip, (responseJSON) => {
      this.setState({
        forecast: {
          main: responseJSON.weather[0].main,
          description: responseJSON.weather[0].description,
          temp: responseJSON.main.temp
        }
      })
    });
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
      <View style={styles.container}>
        <Image source={require('image!flowers')}
               resizeMode='cover'
               style={styles.backdrop}>
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
             <LocationButton/>
           </View>
           {content}
         </View>
        </Image>
      </View>
    );
  }
});

var textStyles = require('./styles/typography.js');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
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

AppRegistry.registerComponent('WeatherProject', () => WeatherProject);
