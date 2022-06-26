import React from 'react';
import Block from './Block';
import Text from './Text';
import {t} from 'i18n-js';
import {ScrollView, View} from 'react-native';
import StatsCard from './StatsCard';
import VideoPlayer from '../screens/VideoPlayer';
import {Badge, Box, Center, NativeBaseProvider, Progress} from 'native-base';
import {sub} from 'react-native-reanimated';
import {useTheme, useTranslation} from '../hooks/';

const TabDetail = (props) => {
  const {colors, sizes} = useTheme();
  const {locale} = useTranslation();

  function numberWithCommas(x) {
    return x == undefined
      ? ''
      : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <ScrollView>
      <View style={{marginHorizontal: sizes.sm, marginVertical: sizes.sm}}>
        <Block card marginTop={sizes.sm}>
          <Text h3 color={colors.primary}>
            {locale === 'en-US' || locale === 'en'
              ? props.name
              : props.nameArabic}
          </Text>
          
          <Text>
            {locale === 'en-US' || locale === 'en'
              ? props.description
              : props.descriptionArabic}
          </Text>
        </Block>

        <Block card marginVertical={sizes.sm}>
          <Block>
            <Block
              row
              paddingVertical={sizes.sm}
              marginVertical={sizes.sm}
              style={{
                borderBottomWidth: 1,

                borderColor: '#D3D3D3',
              }}>
              <Block align="center">
                <Text h5>{numberWithCommas(props.valuation)}</Text>

                <Text>{t('common.valuation')}</Text>
              </Block>
              <Block align="center">
                <Text h5>{numberWithCommas(props.targetAmount)}</Text>
                <Text>{t('common.maxtarget')}</Text>
              </Block>
              <Block align="center">
                <Text h5>{props.sharePrice}</Text>
                <Text>{t('common.shareprice')}</Text>
              </Block>
            </Block>

            <Block style={{borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
              <Text h5 color={colors.primary} center>
                {t('common.subscriptions')}
              </Text>

              <Block row marginVertical={sizes.sm}>
                <Block align="center">
                  <Text h5>
                    {numberWithCommas(
                      props.subavg ? parseFloat(props.subavg).toFixed(2) : 0,
                    )}
                  </Text>
                  <Text>{t('common.average')}</Text>
                </Block>
                <Block align="center">
                  <Text h5>{numberWithCommas(props.submax)}</Text>
                  <Text>{t('common.highest')}</Text>
                </Block>
                <Block align="center">
                  <Text h5>{numberWithCommas(props.submin)}</Text>
                  <Text>{t('common.lowest')}</Text>
                </Block>
              </Block>
            </Block>

            <Block
              marginTop={sizes.sm}
              style={{borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
              <Text h5 color={colors.primary} center>
                {t('common.sharesallowed')}
              </Text>

              <Block row marginVertical={sizes.sm}>
                <Block align="center">
                  <Text h5>{props.sharesmin}</Text>
                  <Text>{t('common.minimum')}</Text>
                </Block>
                <Block align="center">
                  <Text h5>{props.sharesmax}</Text>
                  <Text>{t('common.maximum')}</Text>
                </Block>
              </Block>
            </Block>

            <Block style={{borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
              <Block row marginVertical={sizes.sm}>
                <Block align="center">
                  <Text h5>{props.investors}</Text>
                  <Text>{t('common.currentinvestors')}</Text>
                </Block>
              </Block>
            </Block>

            <Block row marginVertical={sizes.sm}>
              <Block align="center">
                <Text h5>{props.startDate}</Text>
                <Text>{t('common.from')}</Text>
              </Block>
              <Block align="center">
                <Text h5>{props.endDate}</Text>
                <Text>{t('common.to')}</Text>
              </Block>
            </Block>
          </Block>
        </Block>

        <Block card>
          <Block row marginVertical={sizes.sm}>
            <Block align="center">
              <Block>
                <Block row marginVertical={sizes.sm}>
                  <View style={{width: '80%', flexDirection: 'row'}}>
                    <Text>{t('common.raisedamount')}:</Text>
                    <Text bold>
                      {' '}
                      {numberWithCommas(props.raisedAmount)} SAR
                    </Text>
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
                  <View style={{width: '70%', flexDirection: 'row'}}>
                    <Text>{t('common.targetamount')}:</Text>
                    <Text bold>
                      {' '}
                      {numberWithCommas(props.targetAmount)} SAR
                    </Text>
                  </View>
                  <View style={{width: '30%', alignItems: 'flex-end'}}>
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
            </Block>
          </Block>
        </Block>
      </View>
    </ScrollView>
  );
};

export default TabDetail;
