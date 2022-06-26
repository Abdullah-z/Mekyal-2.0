import {TextInput, View} from 'react-native';
import React from 'react';
import {Block, Button, Input, Text} from '../components';
import {useData, useTheme, useTranslation} from '../hooks/';
import {ScrollView} from 'react-native-gesture-handler';
import Popup from '../components/Popup';
import TransactionCard from '../components/TransactionCard';
import BottomNavigation from './BottomNavigation';

const TransactionHistory = () => {
  const {t} = useTranslation();
  const {colors, sizes} = useTheme();
  return (
    <>
      <ScrollView>
        <Block color={'#f8f9fa'} align={'center'}>
          <Block
            width={'95%'}
            card
            align="center"
            color={colors.primary}
            marginHorizontal={sizes.sm}
            marginTop={sizes.sm}>
            <Text h5 color={'white'} marginTop={sizes.sm}>
              {t('common.totalbalance')}
            </Text>
            <Block row align="center">
              <Text semibold h3 color={'white'}>
                500004
              </Text>
              <Text h5 color={'white'}>
                {t('common.SAR')}
              </Text>
            </Block>

            <Text marginTop={sizes.sm} h5 color={'white'}>
              SA9430100979001208115974
            </Text>
            <Text h5 color={'white'} marginBottom={sizes.sm}>
              Arab National Bank
            </Text>
            <Block>
              <Popup />
            </Block>
          </Block>

          <Block
            card
            align="center"
            marginHorizontal={sizes.sm}
            width={'95%'}
            marginVertical={sizes.sm}>
            <Text h5 marginTop={sizes.sm} color={colors.primary}>
            {t('common.transactionhistory')}
            </Text>
            <TransactionCard />
            <Block width={'100%'}></Block>
          </Block>
        </Block>
      </ScrollView>

      <View style={{marginTop: 50}}>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}>
          <BottomNavigation tab={2} />
        </View>
      </View>
    </>
  );
};

export default TransactionHistory;
