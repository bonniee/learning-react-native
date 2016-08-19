import React, {
  Component,
} from 'react';

import Button from './../Button';
import styles from './style.js';

class LocationButton extends Component {
  static propTypes = {
    onGetCoords: React.PropTypes.func.isRequired
  }

  _onPress() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        this.props.onGetCoords(initialPosition.coords.latitude,
          initialPosition.coords.longitude);
      },
      (error) => {alert(error.message)},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    return (
      <Button label="Use CurrentLocation"
        style={styles.locationButton}
        onPress={this._onPress.bind(this)}/>
      );
  }
}

export default LocationButton;
