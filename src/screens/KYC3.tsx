import {View} from 'react-native';
import React, {useState} from 'react';
import {Block, Text, Input, Button} from '../components';
import {useTheme, useTranslation} from '../hooks/';
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

const KYC3 = () => {
  const {assets, colors, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  const [value, setValue] = useState('false');
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
              Education & Profession
            </Text>
          </View>
          <View>
            <View style={{marginTop: sizes.sm}}>
              <NativeBaseProvider>
                <Text bold>Education</Text>
                <Radio.Group
                  defaultValue="1"
                  name="myRadioGroup"
                  color={colors.primary}
                  accessibilityLabel="Pick your favorite number">
                  <Radio value="1" my={1}>
                    Post Graduate
                  </Radio>
                  <Radio value="2" my={1}>
                    University
                  </Radio>
                  <Radio value="3" my={1}>
                    High School
                  </Radio>
                  <Radio value="4" my={1}>
                    Other
                  </Radio>
                </Radio.Group>

                <Text bold marginTop={sizes.sm}>
                  Profession
                </Text>
                <Radio.Group
                  defaultValue="1"
                  name="myRadioGroup"
                  color={colors.primary}
                  accessibilityLabel="Pick your favorite number">
                  <Radio value="1" my={1}>
                    Bussiness Man
                  </Radio>
                  <Radio value="2" my={1}>
                    Employee
                  </Radio>
                  <Radio value="3" my={1}>
                    Retired
                  </Radio>
                  <Radio value="4" my={1}>
                    Unemployed
                  </Radio>
                </Radio.Group>
                <Text bold marginTop={sizes.sm}>
                  Are you director or an officer in public listed company?
                </Text>
                <Radio.Group
                  defaultValue="1"
                  name="myRadioGroup"
                  color={colors.primary}
                  accessibilityLabel="Pick your favorite number">
                  <Radio value="1" my={1}>
                    Yes
                  </Radio>
                  <Radio value="2" my={1}>
                    No
                  </Radio>
                </Radio.Group>
                <Text bold h5 marginTop={sizes.sm} color={colors.primary}>
                  Self-Certification and Declaration (FATCA & CRS)
                </Text>
                <Text bold marginTop={sizes.sm}>
                  Do You have another nationality?
                </Text>
                <Radio.Group
                  defaultValue="false"
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value}
                  onChange={(nextValue) => {
                    setValue(nextValue);
                  }}>
                  <Radio value="true" my={1}>
                    Yes
                  </Radio>
                  <Radio value="false" my={1}>
                    No
                  </Radio>
                </Radio.Group>

                {value === 'true' ? (
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
                ) : (
                  <></>
                )}
              </NativeBaseProvider>

              <Button
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

export default KYC3;
