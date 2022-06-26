import {View} from 'react-native';
import React from 'react';
import {Block, Text, Input, Button} from '../components';
import {useData, useTheme, useTranslation} from '../hooks/';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Center,
  CheckIcon,
  FormControl,
  NativeBaseProvider,
  Radio,
  Select,
  WarningOutlineIcon,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';

const KYC2 = () => {
  const {assets, colors, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  var radio_props = [
    {label: 'Male', value: 0},
    {label: 'Female', value: 1},
  ];
  return (
    <ScrollView>
      <View style={{margin: (S = sizes.sm)}}>
        <Block card>
          <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
            <Text
              h4
              color={colors.primary}
              align="center"
              marginBottom={sizes.sm}>
              National Address
            </Text>
          </View>
          <View>
            <View style={{marginTop: sizes.sm}}>
              <NativeBaseProvider>
                <FormControl w="3/4" maxW="340" isRequired>
                  <FormControl.Label>Country</FormControl.Label>
                  <Select
                    minWidth="340"
                    accessibilityLabel="Country"
                    placeholder="Country"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size={5} />,
                    }}
                    mt="1">
                    <Select.Item label="Pakistan" value="ux" />
                    <Select.Item label="Saudi Arabia" value="web" />
                    <Select.Item label="UAE" value="cross" />
                    <Select.Item label="Turkey" value="ui" />
                    <Select.Item label="Qatar" value="backend" />
                  </Select>
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl w="3/4" maxW="340" isRequired>
                  <FormControl.Label>City</FormControl.Label>
                  <Select
                    minWidth="340"
                    accessibilityLabel="City"
                    placeholder="City"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size={5} />,
                    }}
                    mt="1">
                    <Select.Item label="Pakistan" value="ux" />
                    <Select.Item label="Saudi Arabia" value="web" />
                    <Select.Item label="UAE" value="cross" />
                    <Select.Item label="Turkey" value="ui" />
                    <Select.Item label="Qatar" value="backend" />
                  </Select>
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                  </FormControl.ErrorMessage>
                </FormControl>
              </NativeBaseProvider>

              <Input
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.m}
                label="Unit Number"
                placeholder=""
                // onChangeText={(value) => handleChange({password: value})}
              />
              <Input
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.m}
                label="Zip Code"
                placeholder=""
                // onChangeText={(value) => handleChange({password: value})}
              />
              <Input
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.m}
                label="Street Name"
                placeholder=""
                // onChangeText={(value) => handleChange({password: value})}
              />
              <Input
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.m}
                label="Additional Number"
                placeholder=""
                // onChangeText={(value) => handleChange({password: value})}
              />

              <Button
                onPress={() => navigation.navigate('KYC3')}
                width={'50%'}
                primary
                solid
                marginVertical={sizes.s}
                marginHorizontal={'25%'}>
                <Text bold primary transform="uppercase" color={'#fff'}>
                  Proceed
                </Text>
              </Button>
            </View>
          </View>
        </Block>
      </View>
    </ScrollView>
  );
};

export default KYC2;
