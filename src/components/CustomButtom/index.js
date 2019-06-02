import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../config/colors'


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingVertical: 14,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.primary,
        marginVertical: 7,
    },
    containerOutline: {
        backgroundColor: 'transparent',
    },
    text: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '500',
        borderColor: colors.primary,
        color: colors.primary,
    },
    textOutline: {
        borderColor: colors.primary,
    },
});

export const CustomButton = ({
                           onPress = () => {},
                           title = '',
                           outline = false,
                       }) => {
    const containerStyles = [styles.container];
    const textStyles = [styles.text];

    if (outline) {
        containerStyles.push(styles.containerOutline);
        textStyles.push(styles.textOutline);
    }

    return (
        <TouchableOpacity onPress={onPress} style={containerStyles}>
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton