import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import Routes from './routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Routes />
      </View >
    );
  }
}
