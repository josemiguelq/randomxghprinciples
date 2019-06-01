import React from 'react';
import { View, Text } from 'react-native';
import translate from "../locale";
import Utils from '../utils';
import Styles from '../styles';

export default function Home() {
    const phrases = translate('phrases');
    return (
        <View style={Styles.container}>
            <Text>{Utils.selectRandomPhrase(phrases).subTitle}</Text>
            <Text>{Utils.selectRandomPhrase(phrases).message}</Text>
        </View>
    );
};