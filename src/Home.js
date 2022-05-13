import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Category';
import ShowRow from './components/ShowRow';
import Styles from './Styles'
import Color from './themes/Color';
import images from './themes/Images';
import Api from './Api';

function Home({ navigation }) {
  const [loader, setLoader] = useState(false)
  const [posts, setPosts] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
    },
  ])

  useEffect(() => {
    getAllPosts()
  }, []);

  const getAllPosts = async () => {
    try {
      setLoader(true)
      const response = await Api.get('all_posts')
      if (response.status == 200) {
        //in case of correct token posts will be set in state "setPosts[data]" 
      }
      setLoader(false)
    } catch (err) {
      alert(err)
      setLoader(false)
    }
  }

  const renderGigs = ({ item }) => (
    <View style={Styles.listView}>
      <Image source={images.user1}
        resizeMode='contain'
        style={Styles.user1Image} />

      <View style={Styles.con}>
        <Text style={Styles.detail}>Looking for Flutter Dev & UI/UX designer.</Text>

        <Text style={Styles.neon}>Leon Nunez</Text>

        <Text style={{ marginTop: 15 }}>
          <Text style={Styles.budget}>Budget: </Text>
          <Text style={[Styles.neon, { fontWeight: '500' }]}>150 $</Text>
        </Text>

        <View style={Styles.row}>
          <Category title='Category1' />
          <Category title='Category2' />
        </View>
      </View>

    </View>
  );


  return (
    <>
      {loader && <ActivityIndicator size={'large'} color={Color.themeGreen} />}

      {!loader && <View style={Styles.container}>

        <View style={Styles.row}>
          <TouchableOpacity style={Styles.iconButton}>
            <Icon name="ellipsis-vertical" size={20} />
          </TouchableOpacity>

          <Text style={[Styles.heading, Styles.headingIcon]}>
            Edu
            <Text style={Styles.headingSub}>
              GIGS
            </Text>
          </Text>

          <Image source={images.user}
            style={Styles.userImage} />
        </View>

        <ScrollView>
          <Text style={Styles.userName}>Hi Simone</Text>
          <Text style={Styles.details}>Find Your Perfect Gigs!</Text>

          <ShowRow title={'Gig Requests'} />

          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={posts}
              renderItem={renderGigs}
              keyExtractor={item => item.id}
            />
          </View>

          <ShowRow title={'My Active Gigs'} />

          <View style={Styles.activeGig}>
            <Image source={images.active}
              resizeMode='contain'
              style={Styles.user1Image} />

            <View style={Styles.con}>
              <Text style={Styles.detail}>UI Designer</Text>

              <View style={Styles.rating}>
                <Text>⭐ 4.5 (2)</Text>

                <Text>
                  <Text style={{ color: Color.black }}>From:</Text>
                  <Text style={{ color: Color.themeGreen }}>{` 25$`}</Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>}
    </>
  );
}

export default Home;
