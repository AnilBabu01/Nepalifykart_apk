import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';

const Scrollamp = () => {
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
  return (
    <View>
      <ScrollView>
        {data &&
          data.map((item, index) => {
            return (
              <View key={item.id}>
                <Text style={style.cusview}>{item.name}</Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Scrollamp;

const styles = StyleSheet.create({});
