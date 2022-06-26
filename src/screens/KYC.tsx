import {View} from 'react-native';
import React, {useState} from 'react';
import {Block, Text, Input, Button} from '../components';
import {useData, useTheme, useTranslation} from '../hooks/';
import {gestureHandlerRootHOC, ScrollView} from 'react-native-gesture-handler';
import {
  Center,
  CheckIcon,
  FormControl,
  NativeBaseProvider,
  Radio,
  Select,
  WarningOutlineIcon,
} from 'native-base';

const KYC = () => {
  const {t} = useTranslation();
  const [KYCStep, setKYCStep] = useState(1);
  const {colors, sizes} = useTheme();
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setgender] = useState('male');
  const progressbar = KYCStep / 6;
  const [otherNationality, setOtherNationality] = useState('false');
  console.log(text);

  return (
    <ScrollView>
      <View style={{margin: sizes.sm}}>
        <View style={{justifyContent: 'center'}}>
          <Text h4 color={'grey'} align="center">
            {t('common.beginidverification')}
          </Text>
          <Text h5 color={'grey'} align="center">
            {t('common.verifyyouridentity')}
          </Text>
        </View>
        <Block card marginTop={sizes.sm}>
          <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
            <Text
              h4
              color={colors.primary}
              align="center"
              marginBottom={sizes.sm}>
              {t('common.personalinfo')}
            </Text>
            <Text>{t('common.personalinforeq')}</Text>
          </View>
          <View>
            <Text color={'grey'} marginTop={sizes.sm}>
              {t('common.typecarefully')}
            </Text>
            <View style={{marginTop: sizes.sm}}>
              <Input
                defaultValue={text}
                autoCapitalize="none"
                marginBottom={sizes.sm}
                label={t('common.id')}
                placeholder={t('common.id')}
                onChangeText={(newText) => setText(newText)}
              />
              <Text size={12} color={colors.primary}>
                {t('common.idmustbe')}
              </Text>
              <Text size={12} color={colors.primary} marginBottom={sizes.sm}>
                {t('common.saudinationals')}
              </Text>
              <Input
                defaultValue={password}
                autoCapitalize="none"
                marginBottom={sizes.sm}
                label={t('common.idexpirydate')}
                placeholder=""
                onChangeText={(newText) => setPassword(newText)}
              />
              <Input
                // secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.sm}
                label={t('common.dobg')}
                placeholder=""
                // onChangeText={(value) => handleChange({password: value})}
              />
              <Input
                // secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.sm}
                label={t('common.name')}
                placeholder=""
                // onChangeText={(value) => handleChange({password: value})}
              />

              <Text bold>{t('common.gender')}</Text>
              <NativeBaseProvider>
                <Radio.Group
                  value={gender}
                  onChange={(value) => setgender(value)}
                  defaultValue="male"
                  name="myRadioGroup"
                  color={colors.primary}
                  accessibilityLabel="Pick Gender">
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: sizes.sm,
                    }}>
                    <Radio value="male">
                      <Text marginRight={sizes.sm}>{t('common.male')}</Text>
                    </Radio>
                    <Radio value="female">
                      <Text marginRight={sizes.sm}>{t('common.female')}</Text>
                    </Radio>
                  </View>
                </Radio.Group>
              </NativeBaseProvider>
              {/* <Text bold>Country of Birth</Text> */}
              <NativeBaseProvider>
                <FormControl w="3/4" maxW="340" isRequired>
                  <FormControl.Label>{t('common.cob')}</FormControl.Label>
                  <Select
                    minWidth="340"
                    accessibilityLabel="Country of Birth"
                    placeholder="Country of Birth"
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

              <Button
                onPress={() => {
                  setKYCStep(KYCStep + 1);
                }}
                width={'50%'}
                primary
                solid
                marginVertical={sizes.sm}
                marginHorizontal={'25%'}>
                <Text bold primary transform="uppercase" color={'#fff'}>
                  {t('common.next')}
                </Text>
              </Button>
            </View>
          </View>
        </Block>
      </View>
    </ScrollView>
  );
};

export default KYC;
