import React, { Component } from "react";
import {
  StyleSheet,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Logo from './Header/Logo';
import DeckScreen from './DeckScreen';
import NewCardScreen from './NewCardScreen';
import ReviewScreen from './ReviewScreen';

let headerOptions = {
  headerStyle:  {
    backgroundColor: '#FFFFFF'
  },
  headerLeft: <Logo/>
}

let navigator = StackNavigator({
  Home: { 
    screen: DeckScreen,
    navigationOptions: headerOptions
  },
  Review: {
    screen: ReviewScreen,
    navigationOptions: headerOptions
  },
  CardCreation: {
    screen: NewCardScreen,
    navigationOptions: headerOptions
  }
});

export default navigator;