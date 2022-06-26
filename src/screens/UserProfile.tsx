import {View, ScrollView} from 'react-native';
import React from 'react';
import {Block, Button, Text} from '../components';
import {useData, useTheme, useTranslation} from '../hooks/';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/core';

const UserProfile = () => {
  const {colors, sizes} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {firstName, role} = useData();
  const {locale, setLocale} = useTranslation();
  return (
    <ScrollView>
      <Block align={'center'}>
        <Block card color={colors.primary} margin={sizes.sm} width={'95%'}>
          <View>
            <Text semibold h4 color={'white'}>
              {firstName}
            </Text>
            <Text h5 color={'white'}>
              {role}
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text h5 color={'white'} marginTop={sizes.sm}>
              {t('common.totalbalance')}
            </Text>
            <Block row align="center">
              <Text semibold h3 color={'white'}>
                500004
              </Text>
              <Text h5 color={'white'}>
                {' '}
                {t('common.SAR')}
              </Text>
            </Block>

            <Text marginTop={sizes.sm} h5 color={'white'}>
              SA9430100979001208115974
            </Text>
            <Text h5 color={'white'} marginBottom={sizes.sm}>
              Arab National Bank
            </Text>
          </View>
        </Block>
        <Block card width={'95%'} marginBottom={sizes.sm}>
          <Text
            h5
            marginVertical={sizes.sm}
            onPress={() => {
              navigation.navigate('Edit Profile');
            }}>
            <Ionicons size={20} name="person" color={colors.black} /> Account
          </Text>
          <Text
            h5
            marginBottom={sizes.sm}
            onPress={() => {
              navigation.navigate('Change Password');
            }}>
            <Ionicons size={20} name="key" color={colors.black} /> Change
            Password
          </Text>
          <Text h5 marginBottom={sizes.sm}>
            <Ionicons size={20} name="headset" color={colors.black} /> Help and
            Support
          </Text>
          <Button
            onPress={() => {
              locale === 'en' ? setLocale('ar') : setLocale('en');
            }}>
            <Text>English</Text>
          </Button>
          <View style={{alignItems: 'center', marginTop: sizes.md}}>
            <Text
              h5
              marginBottom={sizes.sm}
              color={'red'}
              onPress={() => {
                navigation.navigate('Sign In');
              }}>
              <Ionicons size={20} name="power" color={'red'} /> Logout
            </Text>
          </View>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default UserProfile;
