import React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';
import COLOR from '../themes/Color';

function Input(props) {
    const {
        title,
        placeholder,
        customStyles,
        customInputStyle,
        secureTextEntry,
        value,
        onChange,
        password,
        showPassword,
        setShowPassword,
        err,
        emailFormatErr,
        ...rest } = props

    return (
        <>
            <Text style={Styles.label}>{title}</Text>
            <View style={[Styles.inputContainer, customStyles]}>
                <TextInput
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    style={[Styles.input, customStyles]}
                    value={value}
                    onChangeText={onChange}
                    {...rest}
                />

                {password &&
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Icon name={showPassword ? "eye-off-outline" : 'eye-outline'} size={20} color={COLOR.grey}/>
                    </TouchableOpacity>}
            </View>
            {err && <Text style={Styles.err}>* Required</Text>}
            {emailFormatErr && <Text style={Styles.err}>Incorrect email format</Text>}
        </>
    );
}

export default Input;