import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles';

function Category(props) {
    const { title } = props
    return (
        <View style={Styles.cat}>
            <Text style={Styles.catText}>{title}</Text>
        </View>
    );
}

export default Category;