import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import translate from "../locale";
import Utils from "../utils";
import share from "../services/shareText";

const styles = StyleSheet.create({
    messageCard: {
        backgroundColor: '#ef553a',
        paddingTop: 10,
        borderRadius: 10
    },
    messageBox: {
        paddingHorizontal: 20
    },
    messageBoxTitle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center'
    },
    messageBoxSubTitle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center'
    },
    messageBoxBody: {
        color: '#fff',
        fontSize: 14
    },
    shareButtonBox: {
        marginTop: 20
    }
});

export default function MessageCard() {
    const phrases = translate('phrases');
    const selectedPhrase = Utils.selectRandomPhrase(phrases);

    return (
        <View style={styles.messageCard}>
            <View style={styles.messageBox}>
                <Text style={styles.messageBoxTitle}>{selectedPhrase.title}</Text>
                <Text style={styles.messageBoxSubTitle}>{selectedPhrase.subTitle}</Text>
                <Text style={styles.messageBoxBody}>{selectedPhrase.message}</Text>
            </View>
            <View style={styles.shareButtonBox}>
                <Button color="#000" onPress={() => share(selectedPhrase)} title={translate('shareButton')} />
            </View>
        </View>
    );
}