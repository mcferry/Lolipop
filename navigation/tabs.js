import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import colors from '../config/colors';
import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 30,
          left: 100,
          right: 100,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 45,
          height: 60,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 0,
                }}>
                <Image
                  source={require('../assets/Logo.png')}
                  resizeMode="contain"
                  style={{
                    width: 114,
                    height: 40,
                  }}
                />
              </View>
            );
          },

          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
              <Image
                source={require('../assets/Icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.primary : colors.secondary,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          headerTitle: () => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 0,
                }}>
                <Image
                  source={require('../assets/Logo.png')}
                  resizeMode="contain"
                  style={{
                    width: 114,
                    height: 40,
                  }}
                />
              </View>
            );
          },
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/Icons/search.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.primary : colors.secondary,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: () => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 0,
                }}>
                <Image
                  source={require('../assets/Logo.png')}
                  resizeMode="contain"
                  style={{
                    width: 114,
                    height: 40,
                  }}
                />
              </View>
            );
          },
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/Icons/contacts.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.primary : colors.secondary,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
