import { Input, Button } from 'react-native-elements';
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';


export class RegisterScreen extends React.Component {
    constructor() {
        super();
        state = {
            name: '',
            firstname: '',
            tel: '',
            age: Number
        }
    }
    submit() {
        alert(
            'nom : ' + this.state.name + '\n' +
            'prenom : ' + this.state.firstname + '\n' +
            'tel : ' + this.state.tel + '\n' +
            'age : ' + this.state.age + ' ans'
        );
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
        if (type == 'age') {
            this.setState({ age: text });
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
                        Inscription :
                    </Text>
                </View >
                <View>
                    <Input
                        inputStyle={{ textAlign: "center" }}
                        placeholder='NAME'
                        onChangeText={(text) => this.validate(text, 'name')}
                    />
                </View>
                <View>
                    <Input
                        inputStyle={{ textAlign: "center" }}
                        placeholder='FIRSTNAME'
                        onChangeText={(text) => this.validate(text, 'firstname')}
                    />
                </View>
                <View>
                    <Input
                        inputStyle={{ textAlign: "center" }}
                        placeholder='N° TÉLÉPHONE'
                        keyboardType="numeric"
                        onChangeText={(text) => this.validate(text, 'tel')}
                    />
                </View>
                <View style={{ marginBottom: '20%' }}>
                    <Input
                        inputStyle={{ textAlign: "center" }}
                        placeholder='AGE'
                        keyboardType="numeric"
                        onChangeText={(text) => this.validate(text, 'age')}
                    />
                </View>
                <View>
                    <Button
                        title="Submit"
                        onPress={() => this.submit()} />
                </View>

            </ScrollView >
        );
    }
}

const style = StyleSheet.create({
});