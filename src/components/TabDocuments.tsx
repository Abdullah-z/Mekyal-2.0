import React from 'react';
import Block from './Block';
import {useTheme, useTranslation} from '../hooks';
import Text from './Text';
import {View, Linking} from 'react-native';
import {
  Box,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  Pressable,
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

const TabDocuments = (props) => {
  const {t} = useTranslation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <Block
      card
      marginHorizontal={sizes.sm}
      width={'95%'}
      marginVertical={sizes.sm}>
      <NativeBaseProvider>
        {(props.aboutCompanyURL &&
          props.financialRatioURL &&
          props.riskURL &&
          props.riskURL &&
          props.prospectusURL) === null ? (
          <Text h5 semibold>No Documents Available</Text>
        ) : props.aboutCompanyURL === null ? (
          <></>
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Icon
              mr={2}
              mb="1"
              as={<Ionicons name={'document'} />}
              color={'black'}
              size="lg"></Icon>
            <Text
              semibold
              h5
              marginTop={sizes.sm}
              onPress={() => {
                Linking.openURL(props.aboutCompanyURL);
              }}>
              {t('common.aboutcompany')}
            </Text>
          </View>
        )}

        {props.financialRatioURL === null ? (
          <></>
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Icon
              mr={2}
              mb="1"
              as={<Ionicons name={'document'} />}
              color={'black'}
              size="lg"></Icon>
            <Text
              semibold
              h5
              marginTop={sizes.sm}
              onPress={() => {
                Linking.openURL(props.financialRatioURL);
              }}>
              {t('common.financialratios')}
            </Text>
          </View>
        )}

        {props.riskURL === null ? (
          <></>
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Icon
              mr={2}
              mb="1"
              as={<Ionicons name={'document'} />}
              color={'black'}
              size="lg"></Icon>
            <Text
              semibold
              h5
              marginTop={sizes.sm}
              onPress={() => {
                Linking.openURL(props.riskURL);
              }}>
              {t('common.risks')}
            </Text>
          </View>
        )}

        {props.teamURL === null ? (
          <></>
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Icon
              mr={2}
              mb="1"
              as={<Ionicons name={'document'} />}
              color={'black'}
              size="lg"></Icon>
            <Text
              semibold
              h5
              marginTop={sizes.sm}
              onPress={() => {
                Linking.openURL(props.teamURL);
              }}>
              {t('common.team')}
            </Text>
          </View>
        )}

        {props.prospectusURL === null ? (
          <></>
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Icon
              mr={2}
              mb="1"
              as={<Ionicons name={'document'} />}
              color={'black'}
              size="lg"></Icon>
            <Text
              semibold
              h5
              marginTop={sizes.sm}
              onPress={() => {
                Linking.openURL(props.prospectusURL);
              }}>
              {t('common.prospectus')}
            </Text>
          </View>
        )}
      </NativeBaseProvider>
    </Block>
  );
};

export default TabDocuments;
