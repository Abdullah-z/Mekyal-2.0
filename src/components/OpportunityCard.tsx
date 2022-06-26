import {View, ScrollView} from 'react-native';
import React from 'react';
import Block from './Block';
import Image from './Image';
import Text from './Text';
import {Badge, Box, Center, NativeBaseProvider, Progress} from 'native-base';
import Button from './Button';
import {useTheme, useTranslation} from '../hooks/';
import {REACT_APP_API_URL} from '../services/common-data-service';
import DetailsPage from '../screens/DetailsPage';
import {useNavigation} from '@react-navigation/core';

const OpportunityCard = (props) => {
  const {locale} = useTranslation();
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {colors, sizes} = useTheme();
  function numberWithCommas(x) {
    return x == undefined
      ? ''
      : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <Block card marginBottom={sizes.sm}>
      <Block>
        <Image
          height={200}
          background
          resizeMode="cover"
          source={{
            uri: REACT_APP_API_URL + 'get_document/' + props.header,
          }}
          radius={sizes.cardRadius}>
          <Block color="rgba(0,0,0,0.3)" padding={sizes.padding}>
            <Text p white>
              {props.description.substring(0, 180)}
            </Text>
            <Block row marginTop={sizes.sm}></Block>
          </Block>
        </Image>
      </Block>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Image
          margin={sizes.sm}
          source={{
            uri: REACT_APP_API_URL + 'get_document/' + props.logo,
          }}
          style={{
            width: 50,
            height: 50,
          }}
        />

        <Text h4 semibold marginTop={sizes.sm}>
          {props.name}
        </Text>
      </View>
      <View>
        <Text center>
          {locale === 'en-US' || locale === 'en'
            ? props.category
            : props.categoryArabic}
        </Text>
      </View>

      <Block
        row
        paddingVertical={sizes.sm}
        marginBottom={sizes.sm}
        style={{
          borderBottomWidth: 1,

          borderColor: '#D3D3D3',
        }}>
        <Block align="center">
          <Text bold>{props.sharePrice}</Text>
          <Text>{t('common.shareprice')}</Text>
        </Block>
        <Block align="center">
          <Text bold>{numberWithCommas(props.valuation)}</Text>
          <Text>{t('common.valuation')}</Text>
        </Block>

        <Block align="center">
          <Text bold>{props.investors}</Text>
          <Text>{t('common.investors')}</Text>
        </Block>
      </Block>

      <Block>
        <Block row marginVertical={sizes.sm}>
          <View style={{width: '80%', flexDirection: 'row'}}>
            <Text>{t('common.raisedamount')}: </Text>
            <Text bold>{numberWithCommas(props.raisedAmount)} SAR</Text>
          </View>
          <View style={{width: '20%', alignItems: 'flex-end'}}>
            <Text bold color="#267E00">
              {((props.raisedAmount / props.targetAmount) * 100)
                .toString()
                .substring(0, 4)}
              %
            </Text>
          </View>
        </Block>
        <NativeBaseProvider>
          <Center w="100%">
            <Box w="100%" maxW="400">
              <Progress
                value={(props.raisedAmount / props.targetAmount) * 100}
                mx="4"
                bg="coolGray.100"
                _filledTrack={{
                  bg: '#267E00',
                }}
              />
            </Box>
          </Center>
        </NativeBaseProvider>
        <Block row marginVertical={sizes.sm}>
          <View style={{width: '60%', flexDirection: 'row'}}>
            <Text> {t('common.targetamount')}: </Text>
            <Text bold>{numberWithCommas(props.targetAmount)} SAR</Text>
          </View>
          <View style={{width: '40%', alignItems: 'flex-end'}}>
            <NativeBaseProvider>
              {props.remainingDays >= 1 ? (
                <Badge colorScheme="error" alignSelf="center">
                  <Text semibold color={'#8b0000'} size={12}>
                    {props.remainingDays} Days Left
                  </Text>
                </Badge>
              ) : (
                <Badge colorScheme="success" alignSelf="center">
                  <Text semibold color={'#023020'} size={12}>
                    Completed
                  </Text>
                </Badge>
              )}
            </NativeBaseProvider>
          </View>
        </Block>
      </Block>
      <Block align="center" marginTop={sizes.sm}>
        <Button
          width={'95%'}
          primary
          marginHorizontal={sizes.sm}
          onPress={() => navigation.navigate('Details', {id: props.id})}>
          <Text bold primary transform="uppercase" color={'#fff'}>
            {t('common.moredetails')}
          </Text>
        </Button>
      </Block>
    </Block>
  );
};

export default OpportunityCard;
