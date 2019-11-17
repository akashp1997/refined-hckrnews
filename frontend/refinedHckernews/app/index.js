/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

class Icon extends React.Component {
    render() {
        return (
            <Ionicons name={this.props.name} size={this.props.size} color={this.props.color} />
        );
    }
}

const Icons = {
    "Home": "ios-home",
    "Settings": "ios-settings"
};


const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            return <Icon name={Icons[routeName]} size={25} color={tintColor} />;
          },
      }),
    }
);

export default createAppContainer(TabNavigator);
