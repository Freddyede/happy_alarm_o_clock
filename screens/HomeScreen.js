
import React from 'react';
import { View, Text } from 'react-native';

export class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
                }}>
                    HomeScreen
                </Text>
            </View >
        );
    }
}