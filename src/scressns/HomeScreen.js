import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
const width = Dimensions.get('window').width / 2 - 30;

const HomeScreen = () => {
  const navigation = useNavigation();
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = [
    {
      id: 1,
      name: 'Women',
      img: require('../assests/women.jpg'),
    },
    {
      id: 2,
      name: 'Men',
      img: require('../assests/men.png'),
    },
    {
      id: 3,
      name: 'Kids',
      img: require('../assests/kids.png'),
    },
    {
      id: 4,
      name: 'Beauty',
      img: require('../assests/loo.png'),
    },
    {
      id: 5,
      name: 'Electronic',
      img: require('../assests/electronic.png'),
    },
    {
      id: 6,
      name: 'Accessories',
      img: require('../assests/accessories.png'),
    },
    {
      id: 7,
      name: 'Jewellery',
      img: require('../assests/je.jpg'),
    },
  ];
  const [products, setproducts] = useState([]);
  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        <FlatList
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                <View style={{marginHorizontal: 12, alignItems: 'center'}}>
                  <Image
                    source={item.img}
                    style={{width: 60, height: 60, borderRadius: 60}}
                  />
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  const Card = ({plant}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ProductDetailsScreen', plant)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: plant.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>
          <View>
            <Image
              source={{
                uri: plant.images[0].Url,
              }}
              style={{height: 225, marginTop: 7, borderRadius: 5}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              ₹{plant.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.orange,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 15, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Welcome to</Text>
          <Text
            style={{fontSize: 28, color: COLORS.orange, fontWeight: 'bold'}}>
            Nepalifykart
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#fa9c23', fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>

        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <TextInput
            placeholder="Search by keyword or name"
            style={style.input}
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="search" size={30} color={COLORS.white} />
        </View>
      </View>

      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={products}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 13,
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
