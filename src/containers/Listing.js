import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import translate from "../locale";
import MessageCard from "../components/messageCard";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        marginHorizontal: 16
    }
});


export default function Listing() {
    const phrases = translate('phrases');
    return (
        <ScrollView style={styles.container}>
            {phrases.map(phrase => (<MessageCard selectedPhrase={phrase}/>))}
        </ScrollView>
    );
}