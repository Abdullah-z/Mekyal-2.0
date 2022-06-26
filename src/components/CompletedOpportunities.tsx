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

const CompletedOpportunities = () => {
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
  };

  useEffect(() => {
    fetchOpportunities();
  }, []);

  return (
    <ScrollView style={{width: '100%'}}>
      {/* <Block paddingHorizontal={sizes.padding}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Details')}>
          <Block card marginBottom={sizes.sm}>
            <View style={{alignItems: 'center'}}>
              <Image
                resizeMode="stretch"
                source={{
                  uri: 'https://images.template.net/wp-content/uploads/2017/03/22122756/Abstract-Modern-Fitness-Logo1.jpg',
                }}
                width={'100%'}
                height={200}
              />
            </View>
            <Text
              h4
              bold
              center
              transform="uppercase"
              color={colors.primary}
              marginTop={sizes.sm}>
              Fitness Star
            </Text>

            <Block row marginVertical={sizes.sm}>
              <Block align="center">
                <Text h5>4,999,948</Text>
                <Text>
                  {t('common.raisedamount')} ({t('common.SAR')})
                </Text>
              </Block>
            </Block>

            <Block
              row
              paddingVertical={sizes.sm}
              marginVertical={sizes.sm}
              style={{
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: '#D3D3D3',
              }}>
              <Block align="center">
                <Text h5>23,200,000</Text>
                <Text>{t('common.valuation')}</Text>
              </Block>
              <Block align="center">
                <Text h5>4,999,948</Text>
                <Text>{t('common.maxtarget')}</Text>
              </Block>
              <Block align="center">
                <Text h5>116</Text>
                <Text>{t('common.shareprice')}</Text>
              </Block>
            </Block>

            <Block style={{borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
              <Text h5 color={colors.primary} center>
                {t('common.subscriptions')}
              </Text>

              <Block row marginVertical={sizes.sm}>
                <Block align="center">
                  <Text h5>17,241</Text>
                  <Text> {t('common.average')}</Text>
                </Block>
                <Block align="center">
                  <Text h5>499,960</Text>
                  <Text> {t('common.highest')}</Text>
                </Block>
                <Block align="center">
                  <Text h5>1,044</Text>
                  <Text> {t('common.lowest')}</Text>
                </Block>
              </Block>
            </Block>
            <Block row marginVertical={sizes.sm}>
              <Block align="center">
                <Text h5>01-Jun-2021</Text>
                <Text>{t('common.from')}</Text>
              </Block>
              <Block align="center">
                <Text h5>31-Jul-2021</Text>
                <Text>{t('common.to')}</Text>
              </Block>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
        <Block card marginBottom={sizes.sm}>
          <View style={{alignItems: 'center'}}>
            <Image
              resizeMode="stretch"
              source={{
                uri: 'https://t4.ftcdn.net/jpg/01/03/93/99/360_F_103939904_504aq3PIe3pH6HGEa4W6JaoBueVve8da.jpg',
              }}
              width={'100%'}
              height={200}
            />
          </View>
          <Text
            h4
            bold
            center
            transform="uppercase"
            color={colors.primary}
            marginTop={sizes.sm}>
            Oil and Gas Company
          </Text>

          <Block row marginVertical={sizes.sm}>
            <Block align="center">
              <Text h5>4,999,948</Text>
              <Text>
                {t('common.raisedamount')} ({t('common.SAR')})
              </Text>
            </Block>
          </Block>

          <Block
            row
            paddingVertical={sizes.sm}
            marginVertical={sizes.sm}
            style={{
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderColor: '#D3D3D3',
            }}>
            <Block align="center">
              <Text h5>23,200,000</Text>
              <Text>{t('common.valuation')}</Text>
            </Block>
            <Block align="center">
              <Text h5>4,999,948</Text>
              <Text>{t('common.maxtarget')}</Text>
            </Block>
            <Block align="center">
              <Text h5>116</Text>
              <Text>{t('common.shareprice')}</Text>
            </Block>
          </Block>

          <Block style={{borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
            <Text h5 color={colors.primary} center>
              {t('common.subscriptions')}
            </Text>

            <Block row marginVertical={sizes.sm}>
              <Block align="center">
                <Text h5>17,241</Text>
                <Text> {t('common.average')}</Text>
              </Block>
              <Block align="center">
                <Text h5>499,960</Text>
                <Text> {t('common.highest')}</Text>
              </Block>
              <Block align="center">
                <Text h5>1,044</Text>
                <Text> {t('common.lowest')}</Text>
              </Block>
            </Block>
          </Block>
          <Block row marginVertical={sizes.sm}>
            <Block align="center">
              <Text h5>01-Jun-2021</Text>
              <Text>{t('common.from')}</Text>
            </Block>
            <Block align="center">
              <Text h5>31-Jul-2021</Text>
              <Text>{t('common.to')}</Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView> */}

      <ScrollView>
        <Block paddingHorizontal={sizes.sm}>
          <Block card marginBottom={sizes.sm}>
            <Block>
              <Image
                background
                resizeMode="cover"
                source={{
                  uri: 'https://www.thermofisher.com/blog/wp-content/uploads/2015/05/istock_000022336495_medium.jpg',
                }}
                radius={sizes.cardRadius}>
                <Block color="rgba(0,0,0,0.3)" padding={sizes.padding}>
                  {/* <Text h4 white marginBottom={sizes.sm}>
                  V Fitness
                </Text> */}
                  <Text p white>
                    V Fitness, established in 2018, is engaged in providing
                    health and fitness services with an aim to promote healthier
                    lifestyle and improve quality of life in-line with the
                    Vision 2030.
                  </Text>
                  {/* user details */}
                  <Block row marginTop={sizes.sm}>
                    <Image
                      source={{
                        uri: 'https://t4.ftcdn.net/jpg/01/03/93/99/360_F_103939904_504aq3PIe3pH6HGEa4W6JaoBueVve8da.jpg',
                      }}
                      style={{
                        width: sizes.xl,
                        height: sizes.xl,
                        borderRadius: sizes.m,
                      }}
                    />
                    {/* <Block marginLeft={sizes.s}>
                    <Text p white semibold>
                      V Fitness
                    </Text>
                    <Text p white>
                      Health Care
                    </Text>
                  </Block> */}
                  </Block>
                </Block>
              </Image>
            </Block>

            {/* <View>
              <Image
                marginRight={sizes.sm}
                source={require('../../assets/logo_v.png')}
                style={{
                  width: sizes.xl,
                  height: sizes.xl,
                  borderRadius: sizes.m,
                }}
              />
            </View> */}

            <View>
              <Text center h4 bold transform="uppercase" marginTop={sizes.sm}>
                Oliver
              </Text>

              <Text center>Industrial</Text>
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
                <Text bold>116</Text>
                <Text>{t('common.shareprice')}</Text>
              </Block>
              <Block align="center">
                <Text bold>23,200,000</Text>
                <Text>{t('common.valuation')}</Text>
              </Block>

              <Block align="center">
                <Text bold>24 Months</Text>
                <Text>{t('common.duration')}</Text>
              </Block>
            </Block>

            <Block>
              <Block row marginVertical={sizes.sm}>
                <View style={{width: '80%', flexDirection: 'row'}}>
                  <Text> {t('common.raisedamount')}:</Text>
                  <Text bold> 12,000,000 SAR</Text>
                </View>
                <View style={{width: '20%', alignItems: 'flex-end'}}>
                  <Text bold color="#267E00">
                    100%
                  </Text>
                </View>
              </Block>
              <NativeBaseProvider>
                <Center w="100%">
                  <Box w="100%" maxW="400">
                    <Progress
                      value={100}
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
                  <Text bold> 23,200,000 SAR</Text>
                </View>
                <View style={{width: '30%', alignItems: 'flex-end'}}>
                  <NativeBaseProvider>
                    <Badge colorScheme="success" alignSelf="center">
                      {t('home.completed')}
                    </Badge>
                  </NativeBaseProvider>
                </View>
              </Block>
            </Block>
            <Block align="center" marginTop={sizes.sm}>
              <Button width={'95%'} primary marginHorizontal={sizes.sm}>
                <Text bold primary transform="uppercase" color={'#fff'}>
                  {t('common.moredetails')}
                </Text>
              </Button>
            </Block>
          </Block>
          <Block card marginBottom={sizes.sm}>
            <Block>
              <Image
                background
                resizeMode="cover"
                source={{
                  uri: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
                }}
                radius={sizes.cardRadius}>
                <Block color="rgba(0,0,0,0.3)" padding={sizes.padding}>
                  {/* <Text h4 white marginBottom={sizes.sm}>
                  V Fitness
                </Text> */}
                  <Text p white>
                    OTS is an integrated international energy company with
                    businesses covering oil and gas operations, oilfield
                    services, petroleum engineering & construction, equipment
                    manufacturing, financial services, and new energy
                    development.
                  </Text>
                  {/* user details */}
                  <Block row marginTop={sizes.sm}>
                    <Image
                      source={{
                        uri: 'https://images.template.net/wp-content/uploads/2017/03/22122756/Abstract-Modern-Fitness-Logo1.jpg',
                      }}
                      style={{
                        width: sizes.xl,
                        height: sizes.xl,
                        borderRadius: sizes.m,
                      }}
                    />
                    {/* <Block marginLeft={sizes.s}>
                    <Text p white semibold>
                      V Fitness
                    </Text>
                    <Text p white>
                      Health Care
                    </Text>
                  </Block> */}
                  </Block>
                </Block>
              </Image>
            </Block>

            {/* <View>
              <Image
                marginRight={sizes.sm}
                source={require('../../assets/logo_v.png')}
                style={{
                  width: sizes.xl,
                  height: sizes.xl,
                  borderRadius: sizes.m,
                }}
              />
            </View> */}

            <View>
              <Text center h4 bold transform="uppercase" marginTop={sizes.sm}>
                Fitness Star
              </Text>

              <Text center>Health Care</Text>
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
                <Text bold>116</Text>
                <Text>{t('common.shareprice')}</Text>
              </Block>
              <Block align="center">
                <Text bold>25,000,000</Text>
                <Text>{t('common.valuation')}</Text>
              </Block>

              <Block align="center">
                <Text bold>24 Months</Text>
                <Text>{t('common.duration')}</Text>
              </Block>
            </Block>

            <Block>
              <Block row marginVertical={sizes.sm}>
                <View style={{width: '80%', flexDirection: 'row'}}>
                  <Text>{t('common.raisedamount')}:</Text>
                  <Text bold> 25,000,000 SAR</Text>
                </View>
                <View style={{width: '20%', alignItems: 'flex-end'}}>
                  <Text bold color="#267E00">
                    100%
                  </Text>
                </View>
              </Block>
              <NativeBaseProvider>
                <Center w="100%">
                  <Box w="100%" maxW="400">
                    <Progress
                      value={100}
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
                  <Text bold> 15,000,000 SAR</Text>
                </View>
                <View style={{width: '30%', alignItems: 'flex-end'}}>
                  <NativeBaseProvider>
                    <Badge colorScheme="success" alignSelf="center">
                      {t('home.completed')}
                    </Badge>
                  </NativeBaseProvider>
                </View>
              </Block>
            </Block>
            <Block align="center" marginTop={sizes.sm}>
              <Button width={'95%'} primary marginHorizontal={sizes.sm}>
                <Text bold primary transform="uppercase" color={'#fff'}>
                  {t('common.moredetails')}
                </Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </ScrollView>
  );
};

export default CompletedOpportunities;
