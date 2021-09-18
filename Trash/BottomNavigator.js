import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    TouchableHighlight,
} from "react-native";

import Svg, { Circle, Path } from "react-native-svg";
import { Icon } from 'react-native-elements'

const tabs = [1, 2, 3, 4, 5];

class BottomNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathX: "357",
            pathY: "675",
            pathA: "689",
            pathB: "706",
        };
    }
    render() {
        return (
            <View style={[styles.content]}>
                <View style={styles.subContent}>
                    {tabs.map((_tabs, i) => {
                        return (
                            <TouchableHighlight
                                key={i}
                                underlayColor={"transparent"}
                                onPress={() => console.log("onPress")}
                            >
                                <View>
                                </View>
                            </TouchableHighlight>
                        );
                    })}
                </View>

                <Svg
                    version="1.1"
                    id="bottom-bar"
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100"
                    viewBox="0 0 1092 260"
                    space="preserve"
                >
                    <Path
                        fill={"#373A50"}
                        stroke={"#373A50"}
                        d={`M30,60h${this.state.pathX}.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C${this.state.pathY}.7,74.5,${this.state.pathA}.5,60,${this.state.pathB}.7,60H1062c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`}
                    />
                    <Circle
                        fill={"#7EE6D2"}
                        stroke={"#7EE6D2"}
                        cx="546"
                        cy="100"
                        r="100"
                    />

                    <Path
                        d="M13 3C7.4889971 3 3 7.4889971 3 13C3 18.511003 7.4889971 23 13 23C15.396508 23 17.597385 22.148986 19.322266 20.736328L25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969L20.736328 19.322266C22.148986 17.597385 23 15.396508 23 13C23 7.4889971 18.511003 3 13 3 z M 13 5C17.430123 5 21 8.5698774 21 13C21 17.430123 17.430123 21 13 21C8.5698774 21 5 17.430123 5 13C5 8.5698774 8.5698774 5 13 5 z"
                        fill="#5B5B5B"
                    />
                </Svg>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",
    },
    content: {
        flexDirection: "column",
        zIndex: 0,
        width: Dimensions.get("window").width - 30,
        marginBottom: "4%",
        left: "4%",
        right: "4%",
        position: "absolute",
        bottom: "1%",
    },
    subContent: {
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        zIndex: 1,
        position: "absolute",
        bottom: 5,
    }
});

export default BottomNavigator;