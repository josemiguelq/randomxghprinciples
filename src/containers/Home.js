import React from 'react';
import { StyleSheet, View } from 'react-native';
import MessageCard from "../components/MessageCard";
import { COLOR } from 'react-native-material-ui';
import translate from "../locale";
import { selectRandomPhrase } from "../utils";
import Advertisement from "../components/AdvertisementBanner";

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
    const selectedPhrase = selectRandomPhrase(phrases);

    return (
        <View style={{flex: 1, backgroundColor: COLOR.green500}}>
                <View style={styles.container}>
                    <MessageCard selectedPhrase={selectedPhrase}/>
                </View>
                <Advertisement/>
        </View>
    );
};