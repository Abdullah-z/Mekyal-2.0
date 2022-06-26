import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import BottomNavigation from './BottomNavigation';
import {Block, Button, Image, Input, Product} from '../components/';

const MyInvestments = () => {
  return (
    <>
      <ScrollView>
        <Block>
          <Text>MyInvestments</Text>
        </Block>
      </ScrollView>

      <View style={{marginTop: 50}}>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}>
          <BottomNavigation tab={3} />
        </View>
      </View>
    </>
  );
};

export default MyInvestments;
