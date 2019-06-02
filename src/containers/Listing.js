import React from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import translate from "../locale";
import MessageCard from "../components/MessageCard";
import Advertisement from "../components/AdvertisementBanner";
import {COLOR} from "react-native-material-ui";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        marginHorizontal: 16,
        marginTop: 16
    },
    separator: {
        padding: 5
    }
});

export default function Listing() {
    const phrases = translate('phrases');
    return (
        <ScrollView style={{backgroundColor: COLOR.green500}}>
            <View style={styles.container}>
                <FlatList
                  data={phrases}
                  renderItem={({item}) => <MessageCard selectedPhrase={item}/>}
                  keyExtractor={item => item.title}
                  ItemSeparatorComponent={() => <View style={styles.separator}><Advertisement/></View>}
                />
            </View>
        </ScrollView>
    );
}