import React from 'react';
import { StyleSheet, View } from 'react-native';
import MessageCard from "../components/messageCard";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 16
    }
})

export default function Home() {
    return (
        <View style={styles.container}>
            <MessageCard/>
        </View>
    );
};