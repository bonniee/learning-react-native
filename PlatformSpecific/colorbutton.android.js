var React = require("react-native");
var {
  Button,
  Component
} = React;

class ColorButton extends Component {
  render() {
    return(
      <Button onPress={() => this.props.onPress("#FF5E5B")}
        title="Press me"
        color="#383838"
        accessibilityLabel="Press button to change color"/>
      );
  }
}

export default ColorButton;