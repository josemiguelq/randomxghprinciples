import React from 'react';
import { View, Text, Button } from 'react-native';
import translate from "../locale";
import Utils from '../utils';
import Styles from '../styles';
import ShareButton from '../components/ShareButton';
import share from  '../services/shareText'

export default function Home() {
    const phrases = translate('phrases');

    const selectedPhrase = Utils.selectRandomPhrase(phrases);
    const phrase = Utils.selectRandomPhrase(phrases)
    return (
        <View style={Styles.container}>
            <View style={Styles.messageBox}>
                <Text style={Styles.messageBoxTitle}>{selectedPhrase.title}</Text>
                <Text style={Styles.messageBoxSubTitle}>{selectedPhrase.subTitle}</Text>
                <Text style={Styles.messageBoxBody}>{selectedPhrase.message}</Text>
                <ShareButton toShare={phrase}/>

            </View>
        </View>
    );
};