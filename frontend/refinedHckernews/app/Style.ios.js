import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class Icon extends React.Component {
    render() {
        return (
            <Ionicons name={this.props.name} size={this.props.size} color={this.props.color} />
        );
    }
}
export const Icons = {
    "Home": "ios-home",
    "Settings": "ios-settings"
};
