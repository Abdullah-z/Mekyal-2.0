import {View} from 'react-native';
import React from 'react';
import Block from './Block';
import Text from './Text';
import {useTheme} from '../hooks/';
import {Ionicons} from '@expo/vector-icons';
import {
  Box,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  Pressable,
} from 'native-base';

const TransactionCard = () => {
  const {colors, sizes} = useTheme();
  return (
    <>
      {/* <Block card row color={'#C1FFD7'} marginTop={sizes.sm} justify={'center'}>
        <Block
          color={'#fff'}
          align="center"
          marginVertical={sizes.sm}
          style={{
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 10,
            height: 80,
            overflow: 'hidden',
          }}>
          <Block color={'#EF4B4B'} width={'100%'} align={'center'}>
            <Text s color={'#fff'}>
              February
            </Text>
          </Block>
          <Block flex={2} justify={'center'}>
            <Text h4 semibold>
              12
            </Text>
          </Block>
        </Block>

        <Block align="center" justify="center" marginHorizontal={'15%'}>
          <Text h5>Mekyal Account</Text>
          <Text>Invested in Gasable</Text>
        </Block>
        <Block align="center" justify="center">
          <Text h5>100 SAR</Text>
        </Block>
      </Block> */}

      {/* <Block card row color={'#C1FFD7'} marginTop={sizes.sm} justify={'center'}>
        <Block
          color={'#fff'}
          align="center"
          justify="center"
          marginVertical={sizes.sm}
          style={{
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 10,
            height: 80,
            overflow: 'hidden',
          }}>
          <Text h4 semibold>
            12
          </Text>
          <Text>Feb</Text>
        </Block>

        <Block align="center" justify="center" marginHorizontal={'15%'}>
          <Text h5>Mekyal Account</Text>
          <Text>Invested in Gasable</Text>
        </Block>
        <Block align="center" justify="center">
          <Text h5>100 SAR</Text>
        </Block>
      </Block> */}

      <NativeBaseProvider>
        <Block
          card
          row
          marginTop={sizes.sm}
          justify={'center'}
          style={{width: '100%'}}>
          <View style={{width: '10%', justifyContent: 'center'}}>
            <Icon
              
              as={<Ionicons name={'arrow-down-circle'} />}
              color={'blue.500'}
              size="2xl"
            />
          </View>

          <View style={{width: '60%'}}>
            <Text semibold h5>
              Invested in Gasable
            </Text>

            <Text>Mekyal Acoount</Text>
          </View>

          <Block col width={'30%'}>
            <Block align="flex-end" justify="center">
              <Text bold h5>
                1000 SAR
              </Text>
            </Block>
            <Block align="flex-end">
              <Text>25 May 2022</Text>
            </Block>
          </Block>
        </Block>
        <Block
          card
          row
          marginTop={sizes.sm}
          justify={'center'}
          style={{width: '100%'}}>
          <View style={{width: '10%', justifyContent: 'center'}}>
            <Icon
              
              as={<Ionicons name={'arrow-up-circle'} />}
              color={'red.500'}
              size="2xl"
            />
          </View>

          <View style={{width: '60%'}}>
            <Text semibold h5>
              Withdraw
            </Text>

            <Text>Arab National Bank</Text>
          </View>

          <Block col width={'30%'}>
            <Block align="flex-end" justify="center">
              <Text bold h5>
                500 SAR
              </Text>
            </Block>
            <Block align="flex-end">
              <Text>5 June 2022</Text>
            </Block>
          </Block>
        </Block>









        
      </NativeBaseProvider>
    </>
  );
};

export default TransactionCard;
