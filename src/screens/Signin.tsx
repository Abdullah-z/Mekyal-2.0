import React, {useCallback, useState} from 'react';
import {Linking, Platform, View, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Input, Text} from '../components/';
import {ScrollView} from 'react-native-gesture-handler';
import MekyalLogo from '../components/MekyalLogo';
import Footer from '../components/Footer';
import {Box, NativeBaseProvider, Toast} from 'native-base';
import CommonDataService from '../services/common-data-service';
import {SERVICE_ROUTE} from '../services/endpoints';
import uuid from 'react-uuid';
import {useToast} from 'react-native-toast-notifications';
import Loading from '../components/Loading';

const isAndroid = Platform.OS === 'android';
const commonDataService = new CommonDataService();

interface IRegistration {
  id: string;
  password: string;
}
interface IRegistrationValidation {
  id: boolean;
  password: boolean;
}

const Signin = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const [status, setStatus] = useState('0');
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [OTP, setOTP] = useState('');
  const {token, setToken} = useData();
  const {role, setRole} = useData();
  const {firstName, setFirstName} = useData();
  const {sessionId, sesSessionId} = useState(uuid());
  const [loading, setLoading] = useState(false);

  const errorToast = (msg) => {
    Toast.show({
      placement: 'top',
      render: () => {
        return (
          <Box bg="red.600" px="2" py="1" rounded="sm" mb={5}>
            <Text color={'#fff'}>{msg}</Text>
          </Box>
        );
      },
    });
  };


  const handleSignin = () => {
    setLoading(true);
    commonDataService
      .executeApiCall(SERVICE_ROUTE.VALIDATE_SEND_OTP, {
        email: ID,
        password: password,
        SessionId: sessionId,
      })
      .then((res) => {
        // console.log(res.data);
        setLoading(false);
        res.data.Status === 1 ? setStatus('1') : errorToast(res.data.Message);
      });
  };

  const handleOTP = () => {
    setLoading(true);
    commonDataService
      .executeApiCall(SERVICE_ROUTE.VALIDATE_OPT_LOGIN, {
        UserName: ID,
        Password: password,
        SessionId: sessionId,
        pin: OTP,
        OTPEnabled: 1,
        OTPtimeOut: 30,
      })
      .then((res) => {
        setLoading(false);
        const newdata = JSON.parse(res.data.Content);

        console.log(JSON.parse(res.data.Content));
        res.data.Status === 1
          ? (navigation.navigate('Home'),
            setStatus(0),
            setFirstName(newdata.FirstName),
            setToken(newdata.Token),
            setRole(newdata.Role))
          : //localStorage.setItem("token", res.data.Data.Token);

            errorToast(res.data.Message);
      });
  };

  const handleResendOTP = () => {
    handleSignin();
  };

  const [registration, setRegistration] = useState<IRegistration>({
    id: '',
    password: '',
  });
  const {assets, colors, gradients, sizes} = useTheme();

  const handleChange = useCallback(
    (value) => {
      setRegistration((state) => ({...state, ...value}));
    },
    [setRegistration],
  );

  return (
    <>
      {status == '1' ? (
        <ScrollView>
          <View
            style={{
              margin: sizes.sm,
              paddingTop:
                Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text h4 color={'grey'} align="center">
                OTP Verification
              </Text>
            </View>
            <Block card marginTop={sizes.sm}>
              <View style={{margin: sizes.sm}}>
                <Text semibold>
                  A message with a verification code has been sent to your phone
                  number. Enter the code to continue.
                </Text>
              </View>
              <View>
                <View style={{marginTop: sizes.sm}}>
                  <Input
                    onChangeText={(value) => setOTP(value)}
                    textAlign="center"
                    maxLength={4}
                    autoFocus
                    keyboardType="decimal-pad"
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                  />

                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    {loading === false ? (
                      <>
                        <Button
                          onPress={() => {
                            setStatus('0');
                          }}
                          width={'30%'}
                          primary
                          marginVertical={sizes.sm}
                          marginHorizontal={sizes.sm}>
                          <Text
                            bold
                            primary
                            transform="uppercase"
                            color={'#fff'}>
                            Back
                          </Text>
                        </Button>
                        <Button
                          onPress={handleOTP}
                          width={'30%'}
                          primary
                          marginVertical={sizes.sm}
                          marginHorizontal={sizes.sm}>
                          <Text
                            bold
                            primary
                            transform="uppercase"
                            color={'#fff'}>
                            Verify
                          </Text>
                        </Button>
                      </>
                    ) : (
                      <Loading />
                    )}
                  </View>
                  <View>
                    <Button onPress={handleResendOTP}>
                      <Text color={colors.primary}>Resend</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </Block>
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={{backgroundColor: '#fff'}}>
          <NativeBaseProvider>
            <Block safe marginTop={sizes.md}>
              <MekyalLogo />

              <Block>
                <Block>
                  <Block flex={0} card margin={sizes.sm} shadow={!isAndroid}>
                    <Block
                      flex={0}
                      radius={sizes.sm}
                      overflow="hidden"
                      justify="space-evenly"
                      paddingVertical={sizes.sm}>
                      <Text h3 semibold color={colors.primary}>
                        {t('common.signin')}
                      </Text>
                      <Text p semibold marginVertical={sizes.sm}>
                        {t('common.crowdfundingaccount')}
                      </Text>

                      <Block paddingHorizontal={sizes.sm}>
                        <Input
                          defaultValue={ID}
                          autoCapitalize="none"
                          marginBottom={sizes.m}
                          label={t('common.idnum')}
                          keyboardType="decimal-pad"
                          placeholder={t('common.idnumPlaceholder')}
                          onChangeText={(value) => setID(value)}
                        />
                        <Input
                          defaultValue={password}
                          secureTextEntry
                          autoCapitalize="none"
                          marginBottom={sizes.m}
                          label={t('common.password')}
                          onChangeText={(value) => setPassword(value)}
                        />
                      </Block>
                      {/* checkbox terms */}
                      <Block
                        row
                        flex={0}
                        align="center"
                        marginBottom={sizes.sm}
                        paddingHorizontal={sizes.sm}>
                        <Text
                          color={colors.primary}
                          semibold
                          onPress={() => {
                            Linking.openURL(
                              'https://www.creative-tim.com/terms',
                            );
                          }}>
                          {t('common.forgetpassword')}
                        </Text>
                      </Block>

                      {loading === false ? (
                        <Button
                          width={'50%'}
                          primary
                          shadow={!isAndroid}
                          marginVertical={sizes.s}
                          marginHorizontal={'25%'}
                          onPress={handleSignin}>
                          <Text
                            bold
                            primary
                            transform="uppercase"
                            color={'#fff'}>
                            {t('common.signin')}
                          </Text>
                        </Button>
                      ) : (
                        <Loading />
                      )}

                      <Block marginVertical={sizes.sm}>
                        <Text>
                          {t('common.donthaveaccount')}{' '}
                          <Text
                            color={colors.primary}
                            semibold
                            onPress={() => {
                              navigation.navigate('Sign Up As');
                            }}>
                            {t('common.signuphere')}
                          </Text>
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                  <View style={{marginTop: 50}}>
                    <View
                      style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                      }}>
                      <Footer />
                    </View>
                  </View>
                </Block>
              </Block>
            </Block>
          </NativeBaseProvider>
        </ScrollView>
      )}
    </>
  );
};

export default Signin;
