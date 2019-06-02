import React from 'react';
import { View } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

export default function Advertisement() {
    return (
        <View>
            <AdMobBanner
                adSize="fullBanner"
                adUnitID="ca-app-pub-6250357428619182/1699777754"
                testDevices={[AdMobBanner.simulatorId]}
                onAdFailedToLoad={error => {
                    console.log(error)
                }}
            />
        </View>
    );
}