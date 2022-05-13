import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import Button from './components/Button';
import Input from './components/Input';
import Styles from './Styles'
import Api from './Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [emailFormatErr, setEmailFormatErr] = useState(false)
  const [password, setPassowrd] = useState('')
  const [passwordErr, setPasswordErr] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loader, setLoader] = useState(false)

  const onSetEmail = (text) => {
    setEmailErr(false)
    if (!emailFormat.test(text)) {
      setEmailFormatErr(true)
      return
    }
    setEmailFormatErr(false)
    setEmail(text)
  }

  const onSetPassword = (text) => {
    setPasswordErr(false)
    setPassowrd(text)
  }

  const onSignup = () => {
    if (email.length == 0) {
      setEmailErr(true)
    } else if (password.length == 0) {
      setPasswordErr(true)
    } else if (emailFormatErr) {
      return
    } else {
      signup()
    }
  }

  const signup = async () => {
    try {
      setLoader(true)
      var data = new FormData()
      data.append('email', email)
      data.append('password', password)
      data.append('user_type', 'seller')

      const response = await Api.post('login', data)
      if (response.status == 200) {
        //in case of correct creds it will save the access token in local storage
        await AsyncStorage.setItem('token', 'dummyToken')
        navigation.navigate('home')
      } else {
        alert("Unable to Login")
      }
      setLoader(false)
    } catch (err) {
      alert(err)
      setLoader(false)
    }
  }

  return (
    <View style={Styles.fullContainer}>
      <Text style={Styles.heading}>
        Edu
        <Text style={Styles.headingSub}>
          GIGS
        </Text>
      </Text>

      <View style={Styles.box}>
        <Text style={Styles.boxHeading}>Sign In to EduGIGS</Text>

        <Input title={'Email Address'}
          placeholder='Enter Your Email Address'
          onChange={onSetEmail}
          err={emailErr}
          emailFormatErr={emailFormatErr} />

        <Input title={'Password'}
          placeholder='Enter Your Password'
          onChange={onSetPassword}
          password
          secureTextEntry={!showPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          err={passwordErr}
        />

        <Text style={Styles.forgotPassword}>
          Forgot Password ?
        </Text>

        <Button title={'Sign In'} onPress={onSignup} isLoading={loader} />
      </View>

      <TouchableOpacity style={Styles.rowCenter}>
        <Text style={Styles.account}>
          {"Don't have an account?  "}
        </Text>

        <Text style={Styles.bold}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
