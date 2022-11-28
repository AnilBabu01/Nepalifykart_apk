import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {style} from '../style';

export default function Flatlist() {
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
      const res = await axios.get(
        'https://backend.akash.nepalifykart.com/api/product/getAllProduct',
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
  );
}
