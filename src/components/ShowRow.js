import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from './Styles';

function ShowRow(props) {
    const { title } = props
    return (
        <View style={Styles.servicesSee}>
            <Text style={Styles.account}>{title}</Text>

            <TouchableOpacity>
                <Text style={Styles.showAll}>Show All</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ShowRow;