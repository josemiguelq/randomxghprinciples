import React from 'react';
import { StyleSheet, View } from 'react-native';
import MessageCard from "../components/messageCard";
import translate from "../locale";
import Utils from "../utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 16
    }
});

export default function Home() {
    const phrases = translate('phrases');
    const selectedPhrase = Utils.selectRandomPhrase(phrases);

    return (
        <View style={styles.container}>
            <MessageCard selectedPhrase={selectedPhrase}/>
        </View>
    );
};