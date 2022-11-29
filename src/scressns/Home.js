import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {style} from '../../style';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [products, setproducts] = useState([]);
  const [data, setdata] = useState([
    {
      id: 1,
      name: 'anil babu',
    },
    {
      id: 2,
      name: 'anil babu',
    },
    {
      id: 3,
      name: 'anil babu',
    },
    {
      id: 4,
      name: 'anil babu',
    },
    {
      id: 5,
      name: 'anil babu',
    },
    {
      id: 6,
      name: 'anil babu',
    },
    {
      id: 7,
      name: 'anil babu',
    },
    {
      id: 8,
      name: 'anil babu',
    },
    {
      id: 9,
      name: 'anil babu',
    },
    {
      id: 10,
      name: 'anil babu',
    },
    {
      id: 11,
      name: 'anil babu',
    },
    {
      id: 12,
      name: 'anil babu',
    },
  ]);

  const handleclick = id => {
    setdata(predata => {
      return predata.filter(tempdata => {
        if (tempdata.id != id) {
          return tempdata;
        }
      });
    });
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
