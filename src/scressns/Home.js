import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PrimaryButton, SecondaryButton} from '../components/Bottons';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();

  const [products, setproducts] = useState([]);

  const getdata = async () => {
    try {
      const {data} = await axios.get(
        'https://backend.akash.nepalifykart.com/api/product/getAllProduct',
      );

      setproducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <View style={style.main}>
      <StatusBar backgroundColor={'#232f3e'} />
      <View>
        <FlatList
          data={products}
          renderItem={({item}) => {
            return (
              <View>
                <View key={item._id} style={style.cusview}>
                  <Image
                    source={{
                      uri: item.images[0].Url,
                    }}
                    style={style.cardimge}
                  />
                  <Text style={style.cusview}>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
export default Home;

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  btn: {
    backgroundColor: 'green',
    marginTop: 20,
    width: 150,
    height: 35,
    color: 'white',
    textAlign: 'center',
    borderRadius: 5,
    paddingTop: 5,
  },

  inputstyle: {
    borderWidth: 2,
    width: 355,
    borderRadius: 50,
    paddingLeft: 15,
  },
  cusview: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'pink',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
  },

  cardimge: {
    height: 200,
    width: 330,
  },
});
