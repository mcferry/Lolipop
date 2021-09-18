import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from './navigation/tabs';


//import BottomNavigator from "./BottomNavigator";
//import SimpleBottomNavigator from "./SimpleBottomNavigator"


export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    );
  }
}





