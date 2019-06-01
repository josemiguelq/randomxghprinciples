import React from 'react';
import { View, Text } from 'react-native';
import translate from "../locale";
import Utils from '../utils';
import Styles from '../styles';

export default function Home() {
    const phrases = translate('phrases');
    const selectedPhrase = Utils.selectRandomPhrase(phrases);
    return (
        <View style={Styles.container}>
            <View style={Styles.messageBox}>
                <Text style={Styles.messageBoxTitle}>{selectedPhrase.title}</Text>
                <Text style={Styles.messageBoxSubTitle}>{selectedPhrase.subTitle}</Text>
                <Text style={Styles.messageBoxBody}>{selectedPhrase.message}</Text>
            </View>
        </View>
    );
};