import {Button, View} from "react-native";
import React from "react";
import share from '../../services/shareText'
import Style from './style'
import translate from "../../locale";

export default function ShareButton(toShare) {
    return <View>
        <Button style={Style.shButton} onPress={() => share(toShare)} title={translate('shareButton')}/>
    </View>
}