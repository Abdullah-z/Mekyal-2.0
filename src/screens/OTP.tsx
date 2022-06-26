import React, {useEffect, useState} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Button, Input, Image, Text} from '../components/';
import {ScrollView} from 'react-native-gesture-handler';
import {useData, useTheme, useTranslation} from '../hooks/';
import axios from 'axios';
import {FormControl, NativeBaseProvider, Toast} from 'native-base';

const OTP = () => {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const handleOTP = () => {
    axios
      .post('http://172.16.16.92:7583/api/accounts/login', {
        OTP,
      })
      .then((res) => {
        res.data.Status === 1 ? console.log(res) : errorToast();
      });
  };

  return (
    <ScrollView>
      <View
        style={{
          margin: sizes.sm,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
                textAlign="center"
                maxLength={4}
                autoFocus
                keyboardType="decimal-pad"
                autoCapitalize="none"
                marginBottom={sizes.sm}
              />

              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button
                  onPress={() => {
                    navigation.navigate('Sign In');
                  }}
                  width={'30%'}
                  primary
                  marginVertical={sizes.sm}
                  marginHorizontal={sizes.sm}>
                  <Text bold primary transform="uppercase" color={'#fff'}>
                    Back
                  </Text>
                </Button>
                <Button
                  width={'30%'}
                  primary
                  marginVertical={sizes.sm}
                  marginHorizontal={sizes.sm}>
                  <Text bold primary transform="uppercase" color={'#fff'}>
                    Verify
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </Block>
      </View>
    </ScrollView>
  );
};

export default OTP;
