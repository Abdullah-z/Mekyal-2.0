import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Block from './Block';
import Image from './Image';
import Text from './Text';
import {useTheme, useTranslation} from '../hooks/';
import fitnessLogo from '../../assets/fitnessLogo.png';
import {Badge, Box, Center, NativeBaseProvider, Progress} from 'native-base';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import VideoPlayer from '../screens/VideoPlayer';
import CommonDataService from '../services/common-data-service';
import {SERVICE_ROUTE} from '../services/endpoints';
import axios from 'axios';

const ActiveOpportunities = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {colors, sizes} = useTheme();
  const [opportunities, setOpportunities] = useState([]);

  const fetchOpportunities = async () => {
    const {data} = await axios.post(
      'http://172.16.16.92:7580/api/mobile/opportunity/active-list',
    );

    const ActOpp = JSON.parse(data.Content);
    setOpportunities(ActOpp);
    // console.log(ActOpp);
  };

  useEffect(() => {
    fetchOpportunities();
  }, []);

  return (
    <ScrollView style={{width: '100%'}}>
      <Block paddingHorizontal={sizes.sm}>
        {opportunities.map((index) => {
          return (
            <Block key={index.CampaignId} card marginBottom={sizes.sm}>
              <Block>
                <Image
                  height={200}
                  background
                  resizeMode="cover"
                  source={require('../../assets/header.png')}
                  radius={sizes.cardRadius}>
                  <Block color="rgba(0,0,0,0.3)" padding={sizes.padding}>
                    <Text p white>
                      {index.Description.substring(0, 180)};
                    </Text>
                    <Block row marginTop={sizes.sm}></Block>
                  </Block>
                </Image>
              </Block>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}>
                <Image
                  source={require('../../assets/logo_v.png')}
                  style={{
                    width: 75,
                    height: 75,
                  }}
                />

                <Text h4 semibold marginTop={sizes.sm}>
                  {index.Name}
                </Text>
              </View>
              <View>
                <Text center>{index.Category}</Text>
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
                  <Text bold>{index.SharePrice}</Text>
                  <Text>{t('common.shareprice')}</Text>
                </Block>
                <Block align="center">
                  <Text bold>{index.ValuationPrice}</Text>
                  <Text>{t('common.valuation')}</Text>
                </Block>

                <Block align="center">
                  <Text bold>{index.InvestorCount}</Text>
                  <Text>{t('common.investors')}</Text>
                </Block>
              </Block>

              <Block>
                <Block row marginVertical={sizes.sm}>
                  <View style={{width: '80%', flexDirection: 'row'}}>
                    <Text> {t('common.raisedamount')}:</Text>
                    <Text bold> {index.FundAcquired} SAR</Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'flex-end'}}>
                    <Text bold color="#267E00">
                      {((index.FundAcquired / index.InvestmentRequired) * 100)
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
                        value={
                          (index.FundAcquired / index.InvestmentRequired) * 100
                        }
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
                    <Text> {t('common.targetamount')}:</Text>
                    <Text bold> {index.InvestmentRequired} SAR</Text>
                  </View>
                  <View style={{width: '40%', alignItems: 'flex-end'}}>
                    <NativeBaseProvider>
                      <Badge colorScheme="error" alignSelf="center">
                        <Text semibold color={'#8b0000'} size={12}>
                          {index.DaysRemaining} Days Left
                        </Text>
                      </Badge>
                    </NativeBaseProvider>
                  </View>
                </Block>
              </Block>
              <Block align="center" marginTop={sizes.sm}>
                <Button
                  width={'95%'}
                  primary
                  marginHorizontal={sizes.sm}
                  onPress={() => {
                    navigation.navigate('Details');
                  }}>
                  <Text bold primary transform="uppercase" color={'#fff'}>
                    {t('common.moredetails')}
                  </Text>
                </Button>
              </Block>
            </Block>
          );
        })}
      </Block>
    </ScrollView>
  );
};

export default ActiveOpportunities;
