import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    TouchableHighlight,
    Button,
    TouchableOpacity
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Circle, Path } from "react-native-svg";
import { Icon } from 'react-native-elements'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabs = [1, 2, 3, 4, 5];

class SimpleBottomNavigator extends Component {
    constructor(props) {
        super(props);

    }

    TestScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Test!</Text>
            </View>
        );
    }

    HomeScreen(props) {
        const gotoTestStackScreen = () => {
            props.navigation.navigate('Test');
        };
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button title="Go to test stack screen" onPress={gotoTestStackScreen} />
            </View>
        );
    }

    SettingsScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }

    MyTabBar({ state, descriptors, navigation }) {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: "#F4AF5F", height: 50, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, alignItems: "center" }}
                        >
                            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
    MyTabs() {
        return (
            <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        );
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Tabs">
                    <Stack.Screen name="Test" component={TestScreen} />
                    <Stack.Screen name="Tabs" component={MyTabs} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }




}

export default SimpleBottomNavigator;