import { StyleSheet, Dimensions } from 'react-native'
import Color from './themes/Color'

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    fullContainer: {
        flex: 1,
        backgroundColor: Color.background
    },
    container: {
        flex: 1,
        backgroundColor: Color.background,
        paddingHorizontal: 30,
    },
    heading: {
        color: Color.primary,
        fontWeight: "900",
        marginTop: 20,
        alignSelf: 'center',
        fontSize: 26
    },
    headingSub: {
        color: Color.themeGreen
    },
    box: {
        backgroundColor: Color.white,
        margin: 20,
        padding: 20,
        borderRadius: 7,
    },
    boxHeading: {
        alignSelf: 'center',
        color: Color.black,
        fontWeight: '500',
        fontSize: 17
    },
    forgotPassword: {
        color: Color.darkGrey,
        fontWeight: '500',
        fontSize: 13,
        textAlign: 'right',
        marginTop: 15
    },
    rowCenter: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    account: {
        color: Color.black,
        fontWeight: '500',
        fontSize: 17
    },
    bold: {
        color: Color.primary,
        fontWeight: '500',
        fontSize: 17
    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    iconButton: {
        backgroundColor: Color.white,
        padding: 7,
        borderRadius: 7
    },
    headingIcon: {
        marginHorizontal: 10,
        flex: 1,
        marginTop: 0
    },
    userImage: { width: 50, height: 50 },
    userName: {
        color: Color.headinggrey,
        fontSize: 18,
        fontWeight: '600',
        marginTop: 15
    },
    details: {
        color: Color.black,
        fontSize: 20,
        fontWeight: "500"
    },
    listView: {
        backgroundColor: Color.white,
        maarginRight: 15,
        flexDirection: 'row',
        marginRight: 20,
        marginTop: 15,
        padding: 20,
        borderRadius: 5,
        width: windowWidth - 60,
        flexWrap: 'wrap'
    },
    user1Image: {
        height: 60,
        width: 60
    },
    detail: {
        color: Color.black,
        fontSize: 15,
        fontWeight: '500',
    },
    neon: {
        color: Color.themeGreen,
        fontSize: 12,
        marginTop: 5,
        fontWeight: '300'
    },
    con: {
        flex: 1,
        marginHorizontal: 15,
    },
    budget : {
        color: Color.black
    },
    activeGig: {
        backgroundColor: Color.white,
        padding: 15,
        marginVertical: 15,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rating: {
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: 5
    }
})