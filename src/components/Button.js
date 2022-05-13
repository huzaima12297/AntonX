import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Styles from './Styles';

function Button(props) {
    const { title, onPress, isLoading } = props
    return (
        <TouchableOpacity style={Styles.button} onPress={onPress}>
            {!isLoading && <Text style={Styles.buttonTitle}>{title}</Text>}
            {isLoading && <ActivityIndicator size={'small'} color={'white'}/>}
        </TouchableOpacity>
    );
}

export default Button;