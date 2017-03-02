import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  Image
} from 'react-native';

import Forecast from './Forecast';
import LocationButton from './LocationButton';
const STORAGE_KEY = '@SmarterWeather:zip';

import OpenWeatherMap from './open_weather_map';

// This version uses flowers.png from local assets
import PhotoBackdrop from './PhotoBackdrop/local_image';

// This version has you to pick a photo
// import PhotoBackdrop from './PhotoBackdrop';

// This version pulls a specified photo from the camera roll
// import PhotoBackdrop from './PhotoBackdrop/camera_roll_example';

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { forecast: null };
  }

  componentDidMount() {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((value) => {
        if (value !== null) {
          this._getForecastForZip(value);
        }
      })
      .catch((error) => console.error('AsyncStorage error: ' + error.message))
      .done();
  }

  _getForecastForZip = (zip) => {
    // Store zip code
    AsyncStorage.setItem(STORAGE_KEY, zip)
      .then(() => console.log('Saved selection to disk: ' + zip))
      .catch((error) => console.error('AsyncStorage error: ' + error.message))
      .done();

    OpenWeatherMap.fetchZipForecast(zip).then(forecast => {
      this.setState({ forecast: forecast });
    });
  }

  _getForecastForCoords = (lat, lon) => {
    OpenWeatherMap.fetchLatLonForecast(lat, lon).then(forecast => {
      this.setState({ forecast: forecast });
    });
  }

  _handleTextChange = (event) => {
    var zip = event.nativeEvent.text;
    this._getForecastForZip(zip);
  }

  render() {
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
               Weather forecast for 
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
}

import textStyles from './styles/typography.js';
const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#000000',
    opacity: 0.5
    },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderWidth: 5,
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

export default WeatherProject;
