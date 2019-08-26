import React from 'react';
import axios from 'axios';
import { Input, Button } from 'react-native-elements';
//import { home } from '../API/apiresource';
import { View, ScrollView, Text } from 'react-native';
import { stylesRegister } from '../css/register/register.css';
export class RegisterScreen extends React.Component {
    constructor() {
        super();
        state = {
            name: '',
            firstname: '',
            tel: ''
        }
    }
    async submit() {
        const obj = {
            name: this.state.name,
            firstname: this.state.firstname,
            tel: this.state.tel
        };
        const objFormatJSON = JSON.stringify(obj);
        alert(objFormatJSON);
        // Create axios method for sending data to back
        return axios.get('http://127.0.0.1:8000/home').then(response => alert(response));
    }
    validate(text, type) {
        if (type == 'name') {
            this.setState({ name: text });
        }
        if (type == 'firstname') {
            this.setState({ firstname: text });
        }
        if (type == 'tel') {
            this.setState({ tel: text });
        }
    }
    render() {
        return (
            <ScrollView alwaysBounceVertical={true}>
                <View>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold"
                    }}>
                        Happy Alarm Oclock-Inscription :
                    </Text>
                </View >
                <View style={stylesRegister.viewStyle}>
                    <Input
                        inputStyle={{ textAlign: "center" }}
                        placeholder='NAME'
                        onChangeText={(text) => this.validate(text, 'name')}
                    />
                </View>
                <View style={stylesRegister.viewStyle}>
                    < Input
                        inputStyle={{ textAlign: "center" }}
                        placeholder='FIRSTNAME'
                        onChangeText={(text) => this.validate(text, 'firstname')}
                    />
                </View>
                <View style={stylesRegister.viewStyle}>
                    <Input
                        inputStyle={{ textAlign: "center" }}
                        placeholder='N° TÉLÉPHONE'
                        keyboardType="numeric"
                        onChangeText={(text) => this.validate(text, 'tel')}
                    />
                </View>
                <View style={stylesRegister.buttonView}>
                    <Button
                        buttonStyle={stylesRegister.styleButton}
                        title="Submit"
                        onPress={() => this.submit()} />
                </View>
            </ScrollView >
        );
    }
}
