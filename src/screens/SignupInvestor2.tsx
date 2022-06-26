import React, {useCallback, useEffect, useState} from 'react';
import {Linking, Platform, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme, useTranslation} from '../hooks/';
import * as regex from '../constants/regex';
import {Block, Button, Input, Image, Text} from '../components/';
import {ScrollView} from 'react-native-gesture-handler';
import MekyalLogo from '../components/MekyalLogo';
import {
  CheckIcon,
  FormControl,
  NativeBaseProvider,
  Select,
  WarningOutlineIcon,
  Checkbox,
} from 'native-base';
import Footer from '../components/Footer';

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

const SignupInvestor2 = () => {
  const navigate = useNavigation();
  const {isDark} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {locale, setLocale} = useTranslation();
  const months = [
    {name: 'Muharram', value: '1'},
    {name: 'Safar', value: '2'},
    {name: 'Rabi al-Awwal', value: '3'},
    {name: 'Rabi al-Thani', value: '4'},
    {name: 'Jumada al-Awwal', value: '5'},
    {name: 'Jumada al-Thani', value: '6'},
    {name: 'Rajab', value: '7'},
    {name: 'Shaban', value: '8'},
    {name: 'Ramadan', value: '9'},
    {name: 'Shawwal', value: '10'},
    {name: 'Dhu al-Qadah', value: '11'},
    {name: 'Dhu al-Hijjah', value: '12'},
  ];

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

          <Block card margin={sizes.sm}>
            <Block>
              <Input
                autoCapitalize="none"
                marginBottom={sizes.m}
                // label={t('common.email')}
                keyboardType="email-address"
                placeholder={t('common.id')}
                success={Boolean(registration.email && isValid.email)}
                danger={Boolean(registration.email && !isValid.email)}
                onChangeText={(value) => handleChange({email: value})}
              />
              <Text size={18} color={colors.primary} marginBottom={sizes.sm}>
                {t('common.dob')} ({t('common.hijri')})
              </Text>
              <View
                style={{
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <Input
                  autoCapitalize="none"
                  maxLength={2}
                  // label={t('common.email')}
                  keyboardType="phone-pad"
                  placeholder={t('common.day')}
                  onChangeText={(value) => handleChange({email: value})}
                  style={{width: '20%', marginRight: 5}}
                />
                <Input
                  autoCapitalize="none"
                  maxLength={2}
                  // label={t('common.email')}
                  keyboardType="phone-pad"
                  placeholder={t('common.month')}
                  onChangeText={(value) => handleChange({email: value})}
                  style={{width: '38%', marginRight: 5}}
                />
                <Input
                  autoCapitalize="none"
                  maxLength={4}
                  // label={t('common.email')}
                  keyboardType="phone-pad"
                  placeholder={t('common.year')}
                  onChangeText={(value) => handleChange({email: value})}
                  style={{width: '38%'}}
                />
              </View>
            </Block>
            <NativeBaseProvider>
              <View
                style={{
                  margin: sizes.sm,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Checkbox
                  marginRight={1}
                  shadow={2}
                  value="test"
                  accessibilityLabel="This is a dummy checkbox"
                  defaultIsChecked></Checkbox>
                <Text> {t('common.agreeelmterms')}</Text>
              </View>

              {/* <FormControl maxW="340" isRequired>
                <FormControl.Label>Month</FormControl.Label>
                <Select
                  minWidth="200"
                  accessibilityLabel="Month"
                  placeholder="Month"
                  _selectedItem={{
                    bg: 'teal.600',
                    endIcon: <CheckIcon size={5} />,
                  }}
                  mt="1">
                  {months.map((row) => {
                    return (
                      <Select.Item
                        key={row.value}
                        label={row.name}
                        value={row.value}
                      />
                    );
                  })}
                </Select>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  Please make a selection!
                </FormControl.ErrorMessage>
              </FormControl> */}
            </NativeBaseProvider>

            <Button
              width={'50%'}
              primary
              solid
              shadow={!isAndroid}
              marginVertical={sizes.s}
              marginHorizontal={'25%'}
              onPress={() => navigation.navigate('KYC Form')}>
              <Text bold primary transform="uppercase" color={'#fff'}>
                Proceed
              </Text>
            </Button>
            <Block marginTop={sizes.sm}>
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
        <Footer />
      </Block>
    </ScrollView>
  );
};

export default SignupInvestor2;
