import { stylesHome } from '../css/home/home.css';
import React from 'react';
import { ScrollView, View, Text } from 'react-native';

export class HomeScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={stylesHome.title}>
                        Happy Alarm Oclock-Accueil :
                    </Text>
                </View>
                <View>
                    <Text style={stylesHome.titleParagraph}>
                        Présentation of Happy Alarm Oclock :
                    </Text>
                </View>
            </ScrollView>
        );
    }
}