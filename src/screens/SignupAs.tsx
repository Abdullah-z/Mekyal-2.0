import React, {useCallback, useEffect, useState} from 'react';
import {Linking, Platform, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme, useTranslation} from '../hooks/';
import * as regex from '../constants/regex';
import {Block, Button, Input, Image, Text, Checkbox} from '../components/';
import {ScrollView} from 'react-native-gesture-handler';
import MekyalLogo from '../components/MekyalLogo';

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

const SignupAs = () => {
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
    <>
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
                  paddingVertical={sizes.sm}>
                  <Text h3 semibold color={colors.primary}>
                    {t('common.signupas')}
                  </Text>

                  <Block
                    flex={0}
                    align="center"
                    justify="center"
                    marginBottom={sizes.sm}
                    marginTop={sizes.sm}
                    paddingHorizontal={sizes.xxl}>
                    <Button
                      width={'75%'}
                      primary
                      outlined
                      shadow={!isAndroid}
                      marginVertical={sizes.s}
                      onPress={() =>
                        navigation.navigate('Sign Up As Investor')
                      }>
                      <Text bold primary transform="uppercase">
                        {t('common.investor')}
                      </Text>
                    </Button>
                    <Button
                      width={'75%'}
                      primary
                      outlined
                      shadow={!isAndroid}
                      marginVertical={sizes.s}
                      onPress={() =>
                        navigation.navigate('Sign Up As Entrepreneur')
                      }>
                      <Text bold primary transform="uppercase">
                        {t('common.entrepreneur')}
                      </Text>
                    </Button>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <Block
        row
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Text>{t('common.footertext')}</Text>
        <Text
          semibold
          color={colors.primary}
          onPress={() => handleLanguageButton()}>
          {' '}
          {locale === 'en' ? 'عربي|' : '| English'}
        </Text>
      </Block>
    </>
  );
};

export default SignupAs;
