/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const principles = ['Principio 1', 'Principio 2']
// let texto = 'Algo 1'

type Props = {};

export default function App(props) {
    const [texto, setTexto] = useState('Gabriel ')

    function generate() {
        setTexto('ASS')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Principio do dia</Text>
            <Text style={styles.instructions}>{texto}</Text>
            <Button onPress={generate} title={'Random'}/>

        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});