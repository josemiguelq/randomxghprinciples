import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MessageCard from "../components/MessageCard";
import { Button } from 'react-native-material-ui';
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
            <Button primary text={translate('randomize')} onPress={shuffle}/>
        </View>
    );
};