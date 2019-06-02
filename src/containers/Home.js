import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButtom from '../components/CustomButtom'
import MessageCard from "../components/MessageCard";
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
    const [text, setText] = useState(Utils.selectRandomPhrase(phrases));

    function shuffle() {
        setText(Utils.selectRandomPhrase(phrases));
    }

    return (
        <View style={styles.container}>
            <MessageCard selectedPhrase={text}/>
            <CustomButtom title={'Gerar'} onPress={shuffle}/>
        </View>
    );
};