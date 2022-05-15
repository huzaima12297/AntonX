import { create } from 'apisauce'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Api = create({
    baseURL: 'https://www.admin.edugigs.org/api/',
})

Api.addAsyncRequestTransform(async request => {
    const token = await AsyncStorage.getItem('token')
    console.log("token", token)
    request.headers = { ...request.headers, Authorization: `Bearer ${token}` }
})