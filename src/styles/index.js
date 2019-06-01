import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 16
    },
    messageBox: {
        backgroundColor: '#ef553a',
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 10
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
    }
})