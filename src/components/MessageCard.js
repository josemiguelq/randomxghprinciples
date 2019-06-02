import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import translate from "../locale";
import share from "../services/ShareText";
import { Button, Card } from 'react-native-material-ui';
import Divider from "react-native-material-ui/src/Divider";

const styles = StyleSheet.create({
    messageCard: {
        paddingTop: 16,
        paddingHorizontal: 16
    },
    messageTitle: {
        fontSize: 14,
        color: '#232F34'
    },
    messageSubTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#232F34'
    },
    messageBody: {
        fontSize: 14,
        color: '#232F34',
        paddingVertical: 8
    }
});

export const MessageCard = (props) => {
    const { selectedPhrase } = props;
    return (
        <Card>
            <View>
                <View style={styles.messageCard}>
                    <Text style={styles.messageTitle}>{selectedPhrase.title}</Text>
                    <Text style={styles.messageSubTitle}>{selectedPhrase.subTitle}</Text>
                    <Text style={styles.messageBody}>{selectedPhrase.message}</Text>
                    <Divider/>
                </View>
                <Button primary onPress={() => share(selectedPhrase)} text={translate('shareButton')} />
            </View>
        </Card>
    );
};

export default MessageCard;