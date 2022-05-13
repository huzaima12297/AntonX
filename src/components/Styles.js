import { StyleSheet } from 'react-native'
import Color from '../themes/Color'

export default StyleSheet.create({
    label: {
        marginTop: 20,
        fontWeight: '500',
        fontSize: 13
    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: Color.greyBlue,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 7,
        alignItems: 'center'
    },
    button: {
        backgroundColor: Color.primary,
        paddingVertical: 15,
        marginVertical: 30,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        color: Color.white,
        fontWeight: '700',
        fontSize: 18
    },
    input: {
        flex: 1,
    },
    cat: {
        backgroundColor: Color.lightBlueGrey,
        paddingVertical: 10,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginRight: 15
    },
    catText: {
        color: Color.black,
        fontWeight: '400',
        fontSize: 12
    },
    servicesSee: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-between",
        alignItems: "center",
    },
    account: {
        color: Color.black,
        fontWeight: '500',
        fontSize: 17
    },
    showAll: {
        color: Color.themeGreen,
        fontWeight: '500',
        fontSize: 17
    },
    err: {
        color: 'red',
        fontSize: 12
    }
})