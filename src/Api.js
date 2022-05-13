import { create } from 'apisauce'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Api = create({
    baseURL: 'https://www.admin.edugigs.org/api',
    headers: { Accept: 'application/json' },
})

Api.addAsyncRequestTransform(async request => {
    const token = await AsyncStorage.getItem('token')
    request.headers = { ...request.headers, Authorization: `Bearer ${token}` }
})