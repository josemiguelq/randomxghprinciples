import React from 'react';
import { View, Text } from 'react-native';
import translate from "../locale";
import Utils from '../utils';
import Styles from '../styles';

export default function Home() {
    const phrases = translate('phrases');
    return (
        <View style={Styles.container}>
            <View style={Styles.messageBox}>
                <Text style={Styles.messageBoxTitle}>{Utils.selectRandomPhrase(phrases).title}</Text>
                <Text style={Styles.messageBoxSubTitle}>{Utils.selectRandomPhrase(phrases).subTitle}</Text>
                <Text style={Styles.messageBoxBody}>{Utils.selectRandomPhrase(phrases).message}</Text>
            </View>
        </View>
    );
};