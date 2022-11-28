import {View, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import axios from 'axios';
export default function App() {
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
      console.log(JSON(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={style.main}>
      <StatusBar backgroundColor={'red'} />
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => getdata()}>
                <View key={item.id}>
                  <Text style={style.cusview}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
