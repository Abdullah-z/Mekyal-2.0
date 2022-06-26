import React, {useCallback, useEffect, useState} from 'react';
import {Linking, Platform, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme, useTranslation} from '../hooks/';
import * as regex from '../constants/regex';
import {Block, Button, Input, Image, Text, Checkbox} from '../components/';
import {ScrollView} from 'react-native-gesture-handler';
import MekyalLogo from '../components/MekyalLogo';
import {color} from 'react-native-reanimated';

const isAndroid = Platform.OS === 'android';

interface IRegistration {
  name: string;
  email: string;
  password: string;
  agreed: boolean;
}
interface IRegistrationValidation {
  name: boolean;
  email: boolean;
  password: boolean;
  agreed: boolean;
}

const SignupInvestor = () => {
  const navigate = useNavigation();
  const {isDark} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {locale, setLocale} = useTranslation();

  const handleLanguageButton = () => {
    locale === 'en' ? setLocale('ar') : setLocale('en');
  };
  const [isValid, setIsValid] = useState<IRegistrationValidation>({
    name: false,
    email: false,
    password: false,
    agreed: false,
  });
  const [registration, setRegistration] = useState<IRegistration>({
    name: '',
    email: '',
    password: '',
    agreed: false,
  });
  const {assets, colors, gradients, sizes} = useTheme();

  const handleChange = useCallback(
    (value) => {
      setRegistration((state) => ({...state, ...value}));
    },
    [setRegistration],
  );

  const handleSignUp = useCallback(() => {
    if (!Object.values(isValid).includes(false)) {
      /** send/save registratin data */
      console.log('handleSignUp', registration);
    }
  }, [isValid, registration]);

  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      name: regex.name.test(registration.name),
      email: regex.email.test(registration.email),
      password: regex.password.test(registration.password),
      agreed: registration.agreed,
    }));
  }, [registration, setIsValid]);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Block safe marginTop={sizes.md}>
        <Block>
          <MekyalLogo />
          {/* <Block style={{alignItems: 'flex-end'}} marginHorizontal={sizes.sm}>
            <Button
              width={'25%'}
              primary
              outlined
              shadow={!isAndroid}
              marginVertical={sizes.s}
              onPress={() => handleLanguageButton()}>
              <Text bold primary transform="uppercase">
                {locale === 'en' ? 'عربي' : 'English'}
              </Text>
            </Button>
          </Block> */}
          <Block>
            <Block
              flex={0}
              card
              margin={sizes.sm}
              shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
            >
              <Block
                flex={0}
                radius={sizes.sm}
                overflow="hidden"
                justify="space-evenly"
                paddingVertical={sizes.sm}
                >
                <Text h4 semibold color={colors.primary}>
                  {t('common.signupas')} {t('common.investor')}
                </Text>

            
               
                <Block marginHorizontal={sizes.sm}>
                  <Input
                    autoCapitalize="none"
                    marginVertical={sizes.m}
                    // label={t('common.email')}
                    keyboardType="email-address"
                    placeholder={t('common.email')}
                    success={Boolean(registration.email && isValid.email)}
                    danger={Boolean(registration.email && !isValid.email)}
                    onChangeText={(value) => handleChange({email: value})}
                  />
                  <Input
                    autoCapitalize="none"
                    // label={t('common.email')}
                    keyboardType="phone-pad"
                    placeholder={t('common.phonenum')}
                    onChangeText={(value) => handleChange({email: value})}
                  />
                  <Text
                    size={12}
                    color={colors.primary}
                    marginBottom={sizes.sm}>
                    {t('common.phonehelptext')}
                  </Text>
                  <Input
                    marginBottom={sizes.sm}
                    secureTextEntry
                    autoCapitalize="none"
                    // label={t('common.password')}
                    placeholder={t('common.passwordPlaceholder')}
                    onChangeText={(value) => handleChange({password: value})}
                    success={Boolean(registration.password && isValid.password)}
                    danger={Boolean(registration.password && !isValid.password)}
                  />
                  <Input
                    secureTextEntry
                    autoCapitalize="none"
                    // label={t('common.password')}
                    placeholder={t('common.confirmpassword')}
                    onChangeText={(value) => handleChange({password: value})}
                    success={Boolean(registration.password && isValid.password)}
                    danger={Boolean(registration.password && !isValid.password)}
                  />
                  <Text
                    size={12}
                    color={colors.primary}
                    marginBottom={sizes.sm}>
                    {t('common.passwordhelptext')}
                  </Text>
                </Block>

                <Block row flex={0} align="center" paddingHorizontal={sizes.sm}>
                  <Checkbox
                    marginRight={sizes.sm}
                    checked={registration?.agreed}
                    onPress={(value) => handleChange({agreed: value})}
                  />
                  <Text paddingRight={sizes.s}>
                    {t('common.agreemekyalterms')}{' '}
                    <Text
                      semibold
                      onPress={() => {
                        Linking.openURL('https://www.creative-tim.com/terms');
                      }}>
                      {t('common.terms')}
                    </Text>
                  </Text>
                </Block>

                <Button
                  width={'50%'}
                  primary
                  solid
                  shadow={!isAndroid}
                  marginVertical={sizes.s}
                  marginHorizontal={'25%'}
                  onPress={() => navigation.navigate('Sign Up As Investor 2')}>
                  <Text bold primary transform="uppercase" color={'#fff'}>
                    {t('common.signup')}
                  </Text>
                </Button>
                <Block marginVertical={sizes.sm}>
                  <Text>
                    {t('common.alreadyuser')}{' '}
                    <Text
                      color={colors.primary}
                      semibold
                      onPress={() => {
                        navigation.navigate('Sign Up As');
                      }}>
                      {t('common.signinhere')}
                    </Text>
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default SignupInvestor;
