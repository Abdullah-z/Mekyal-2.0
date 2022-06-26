import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Block, Text, Input, Button} from '../components';
import {useTheme, useTranslation} from '../hooks/';
import {ScrollView} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import {
  CheckIcon,
  FormControl,
  NativeBaseProvider,
  Radio,
  Select,
  WarningOutlineIcon,
  Checkbox,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import AnnualIncome from '../components/AnnualIncome';
import InvestmentSectors from '../components/InvestmentSectors';
import CountriesList from '../components/Countries';

interface KYCData {
  id: string;
  name: string;
  email: string;
  idexpiry: string;
  dob: string;
  gender: string;
  cob: string;
  otherNationality: string;
  education: string;
  profession: string;
  unitNum: string;
}

const KYCForm = () => {
  const [kyc, setkyc] = useState<KYCData>({
    name: '',
    id: '',
    country: '',
    city: '',
    idexpiry: '',
    dob: '',
    gender: '',
    cob: '',
    otherNationality: 'No',
    education: '',
    profession: '',
    unitNum: '',
  });

  console.log(kyc);

  const handleChange = useCallback(
    (value) => {
      setkyc((state) => ({...state, ...value}));
    },
    [setkyc],
  );

  const {t} = useTranslation();
  const [KYCStep, setKYCStep] = useState(1);
  const {colors, sizes} = useTheme();
  const [id, setId] = useState('');
  const [idExpiryHijri, setidExpiryHijri] = useState('');
  const [dobg, setDobg] = useState('');
  const [name, setName] = useState('');
  const [gender, setgender] = useState('Male');
  const [cob, setcob] = useState('');
  const [groupValue, setGroupValue] = useState([]);
  const progressbar = KYCStep / 5;
  const [otherNationality, setOtherNationality] = useState('No');
  const [country, setcountry] = useState('');
  const [city, setcity] = useState('');
  const [unitNum, setunitNum] = useState('');
  const [zipCode, setzipCode] = useState('');
  const [streetName, setstreetName] = useState('');
  const [additionalNum, setadditionalNum] = useState('');
  const [education, seteducation] = useState('');
  const [profession, setprofession] = useState('');
  const [director, setdirector] = useState('');
  const [investorType, setinvestorType] = useState('');
  const [everInvested, seteverInvested] = useState('No');
  const [approxNetWorth, setapproxNetWorth] = useState('');
  const [approxannualIncome, setapproxannualIncome] = useState('');
  const [amountInvestedAnnually, setamountInvestedAnnually] = useState('');
  const [amountInvestedEachOp, setamountInvestedEachOp] = useState('');

  return (
    <>
      <View style={{alignItems: 'center', backgroundColor: '#fff'}}>
        <Progress.Bar
          progress={progressbar}
          width={395}
          height={5}
          color={colors.primary}
        />
      </View>
      <ScrollView>
        {KYCStep === 1 ? (
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
                    keyboardType="decimal-pad"
                    defaultValue={kyc.id}
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.id')}
                    placeholder={t('common.id')}
                    onChangeText={(value) => handleChange({id: value})}
                  />
                  <Text size={12} color={colors.primary}>
                    {t('common.idmustbe')}
                  </Text>
                  <Text
                    size={12}
                    color={colors.primary}
                    marginBottom={sizes.sm}>
                    {t('common.saudinationals')}
                  </Text>
                  <Input
                    keyboardType="decimal-pad"
                    defaultValue={kyc.idexpiry}
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.idexpirydate')}
                    placeholder="DD-MM-YYYY"
                    onChangeText={(value) => handleChange({idexpiry: value})}
                  />
                  <Input
                    keyboardType="decimal-pad"
                    defaultValue={kyc.dob}
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.dobg')}
                    placeholder="DD-MM-YYYY"
                    onChangeText={(value) => handleChange({dob: value})}
                  />
                  <Input
                    defaultValue={kyc.name}
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.name')}
                    placeholder=""
                    onChangeText={(value) => handleChange({name: value})}
                  />

                  <Text bold>{t('common.gender')}</Text>
                  <NativeBaseProvider>
                    <Radio.Group
                      value={kyc.gender}
                      onChange={(value) => handleChange({gender: value})}
                      defaultValue={kyc.gender}
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="Pick Gender">
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: sizes.sm,
                        }}>
                        <Radio value="Male">
                          <Text marginRight={sizes.sm}>{t('common.male')}</Text>
                        </Radio>
                        <Radio value="Female">
                          <Text marginRight={sizes.sm}>
                            {t('common.female')}
                          </Text>
                        </Radio>
                      </View>
                    </Radio.Group>
                  </NativeBaseProvider>

                  <NativeBaseProvider>
                    <FormControl w="3/4" maxW="340" isRequired>
                      <FormControl.Label>{t('common.cob')}</FormControl.Label>
                      <Select
                        defaultValue={kyc.cob}
                        onValueChange={(value) => handleChange({cob: value})}
                        minWidth="340"
                        accessibilityLabel="Country of Birth"
                        placeholder="Country of Birth"
                        _selectedItem={{
                          bg: 'teal.600',
                          endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1">
                        {CountriesList.map((index) => {
                          return (
                            <Select.Item
                              label={index.name}
                              value={index.value}
                              key={index.value}
                            />
                          );
                        })}
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
        ) : KYCStep === 2 ? (
          <View style={{margin: sizes.sm}}>
            <Block card>
              <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                <Text
                  h4
                  color={colors.primary}
                  align="center"
                  marginBottom={sizes.sm}>
                  {t('common.nationaladdress')}
                </Text>
              </View>
              <View>
                <View style={{marginTop: sizes.sm}}>
                  <NativeBaseProvider>
                    <FormControl w="3/4" maxW="340" isRequired>
                      <FormControl.Label>
                        {t('common.country')}
                      </FormControl.Label>
                      <Select
                        defaultValue={kyc.country}
                        onValueChange={(value) => {
                          handleChange({country: value});
                        }}
                        minWidth="340"
                        accessibilityLabel="Country"
                        placeholder="Country"
                        _selectedItem={{
                          bg: 'teal.600',
                          endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1">
                        {CountriesList.map((index) => {
                          return (
                            <Select.Item
                              label={index.name}
                              value={index.value}
                              key={index.value}
                            />
                          );
                        })}
                      </Select>
                      <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}>
                        Please make a selection!
                      </FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl w="3/4" maxW="340" isRequired>
                      <FormControl.Label>{t('common.city')}</FormControl.Label>
                      <Select
                        defaultValue={kyc.city}
                        onValueChange={(value) => {
                          handleChange({city: value});
                        }}
                        minWidth="340"
                        accessibilityLabel="City"
                        placeholder="City"
                        _selectedItem={{
                          bg: 'teal.600',
                          endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1">
                        <Select.Item label="Pakistan" value="Pakistan" />
                        <Select.Item
                          label="Saudi Arabia"
                          value="Saudi Arabia"
                        />
                        <Select.Item label="UAE" value="UAE" />
                        <Select.Item label="Turkey" value="Turkey" />
                        <Select.Item label="Qatar" value="Qatar" />
                      </Select>
                      <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}>
                        Please make a selection!
                      </FormControl.ErrorMessage>
                    </FormControl>
                  </NativeBaseProvider>

                  <Input
                    marginTop={sizes.sm}
                    defaultValue={kyc.unitNum}
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.unitnum')}
                    placeholder=""
                    onChangeText={(value) => handleChange({unitNum: value})}
                  />
                  <Input
                    defaultValue={zipCode}
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.zipcode')}
                    placeholder=""
                    onChangeText={(newText) => setzipCode(newText)}
                  />
                  <Input
                    defaultValue={streetName}
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.streetname')}
                    placeholder=""
                    onChangeText={(newText) => setstreetName(newText)}
                  />
                  <Input
                    defaultValue={additionalNum}
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.additionalnum')}
                    placeholder=""
                    onChangeText={(newText) => setadditionalNum(newText)}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginVertical: sizes.sm,
                    }}>
                    <Button
                      onPress={() => setKYCStep(KYCStep - 1)}
                      width={'40%'}
                      primary
                      marginHorizontal={sizes.sm}>
                      <Text bold primary transform="uppercase" color={'#fff'}>
                        {t('common.back')}
                      </Text>
                    </Button>
                    <Button
                      onPress={() => {
                        setKYCStep(KYCStep + 1);
                      }}
                      width={'40%'}
                      primary
                      marginHorizontal={sizes.sm}>
                      <Text bold primary transform="uppercase" color={'#fff'}>
                        {t('common.next')}
                      </Text>
                    </Button>
                  </View>
                </View>
              </View>
            </Block>
          </View>
        ) : KYCStep === 3 ? (
          <View style={{margin: sizes.sm}}>
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
                      defaultValue={kyc.education}
                      onChange={(value) => {
                        handleChange({education: value});
                      }}
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="Pick your favorite number">
                      <Radio value="Post Graduate" my={1}>
                        Post Graduate
                      </Radio>
                      <Radio value="University" my={1}>
                        University
                      </Radio>
                      <Radio value="High School" my={1}>
                        High School
                      </Radio>
                      <Radio value="Other" my={1}>
                        Other
                      </Radio>
                    </Radio.Group>

                    <Text bold marginTop={sizes.sm}>
                      Profession
                    </Text>
                    <Radio.Group
                      defaultValue={kyc.profession}
                      onChange={(value) => {
                        handleChange({profession: value});
                      }}
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="Pick your favorite number">
                      <Radio value="Bussiness Man" my={1}>
                        Bussiness Man
                      </Radio>
                      <Radio value="Employee" my={1}>
                        Employee
                      </Radio>
                      <Radio value="Retired" my={1}>
                        Retired
                      </Radio>
                      <Radio value="Unemployed" my={1}>
                        Unemployed
                      </Radio>
                    </Radio.Group>
                    <Text bold marginTop={sizes.sm}>
                      Are you director or an officer in public listed company?
                    </Text>
                    <Radio.Group
                      defaultValue={director}
                      onChange={(value) => {
                        setdirector(value);
                      }}
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="Pick your favorite number">
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: sizes.sm,
                        }}>
                        <Radio value="Yes">
                          <Text marginRight={sizes.sm}>Yes</Text>
                        </Radio>
                        <Radio value="No">
                          <Text marginRight={sizes.sm}>No</Text>
                        </Radio>
                      </View>
                    </Radio.Group>
                    <Text bold h5 marginTop={sizes.sm} color={colors.primary}>
                      Self-Certification and Declaration (FATCA & CRS)
                    </Text>
                    <Text bold marginTop={sizes.sm}>
                      Do You have another nationality?
                    </Text>
                    <Radio.Group
                      defaultValue={kyc.otherNationality}
                      name="myRadioGroup"
                      accessibilityLabel="favorite number"
                      value={kyc.otherNationality}
                      onChange={(value) =>
                        handleChange({otherNationality: value})
                      }>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: sizes.sm,
                        }}>
                        <Radio value="Yes">
                          <Text marginRight={sizes.sm}>Yes</Text>
                        </Radio>
                        <Radio value="No">
                          <Text marginRight={sizes.sm}>No</Text>
                        </Radio>
                      </View>
                    </Radio.Group>

                    {kyc.otherNationality === 'Yes' ? (
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

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginVertical: sizes.sm,
                    }}>
                    <Button
                      onPress={() => setKYCStep(KYCStep - 1)}
                      width={'40%'}
                      primary
                      marginHorizontal={sizes.sm}>
                      <Text bold primary transform="uppercase" color={'#fff'}>
                        {t('common.back')}
                      </Text>
                    </Button>
                    <Button
                      onPress={() => {
                        setKYCStep(KYCStep + 1);
                      }}
                      width={'40%'}
                      primary
                      marginHorizontal={sizes.sm}>
                      <Text bold primary transform="uppercase" color={'#fff'}>
                        {t('common.next')}
                      </Text>
                    </Button>
                  </View>
                </View>
              </View>
            </Block>
          </View>
        ) : KYCStep === 4 ? (
          <>
            <View style={{margin: sizes.sm}}>
              <View style={{justifyContent: 'center'}}>
                <Text h4 color={'grey'} align="center">
                  Financial Information
                </Text>
                <Text h5 color={'grey'} align="center">
                  Verify your identity to participate in Mekyal Crowd Funding
                </Text>
              </View>
              <Block card marginTop={sizes.sm}>
                <View>
                  <Text bold>Investor type</Text>
                  <NativeBaseProvider>
                    <Radio.Group
                      value={investorType}
                      onChange={(value) => setinvestorType(value)}
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="">
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: sizes.sm,
                        }}>
                        <Radio value="Retail Client">
                          <Text marginRight={sizes.sm}>Retail Client</Text>
                        </Radio>
                        <Radio value="Qualified Client">
                          <Text marginRight={sizes.sm}>Qualified Client</Text>
                        </Radio>
                      </View>
                    </Radio.Group>
                    <Text bold>
                      Have you ever invested in high risk companies?
                    </Text>
                    <Radio.Group
                      value={everInvested}
                      onChange={(value) => seteverInvested(value)}
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="">
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: sizes.sm,
                        }}>
                        <Radio value="Yes">
                          <Text marginRight={sizes.sm}>Yes</Text>
                        </Radio>
                        <Radio value="No">
                          <Text marginRight={sizes.sm}>No</Text>
                        </Radio>
                      </View>
                    </Radio.Group>

                    <Text bold>
                      Approximate Net Worth (Excluding Residency):
                    </Text>
                    <Radio.Group
                      value={approxNetWorth}
                      onChange={(value) => setapproxNetWorth(value)}
                      defaultValue={approxNetWorth}
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="">
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: sizes.sm,
                        }}>
                        <Radio value="Less than 5Mm">
                          <Text marginRight={sizes.sm}>Less than 5Mm</Text>
                        </Radio>
                        <Radio value="More than 5Mm">
                          <Text marginRight={sizes.sm}>More than 5Mm</Text>
                        </Radio>
                      </View>
                    </Radio.Group>

                    <Text bold>Approximate Annual Income (SAR)</Text>
                    <Radio.Group
                      value={approxannualIncome}
                      onChange={(value) => setapproxannualIncome(value)}
                      defaultValue={approxannualIncome}
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="">
                      <View
                        style={{
                          flexDirection: 'column',
                          marginVertical: sizes.sm,
                        }}>
                        {AnnualIncome.map((index) => {
                          return (
                            <Radio
                              value={index.value}
                              marginBottom={2}
                              key={index.value}>
                              <Text>{index.name}</Text>
                            </Radio>
                          );
                        })}
                      </View>
                    </Radio.Group>

                    <Input
                      defaultValue={amountInvestedEachOp}
                      value={amountInvestedEachOp}
                      autoCapitalize="none"
                      marginBottom={sizes.sm}
                      label="The amount to be invested for each opportunity"
                      placeholder=""
                      onChangeText={(value) => setamountInvestedEachOp(value)}
                    />

                    <Input
                      defaultValue={amountInvestedAnnually}
                      value={amountInvestedAnnually}
                      autoCapitalize="none"
                      marginBottom={sizes.sm}
                      label="The amount to be invested annually"
                      placeholder=""
                      onChangeText={(value) => setamountInvestedAnnually(value)}
                    />
                  </NativeBaseProvider>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginVertical: sizes.sm,
                    }}>
                    <Button
                      onPress={() => setKYCStep(KYCStep - 1)}
                      width={'40%'}
                      primary
                      marginHorizontal={sizes.sm}>
                      <Text bold primary transform="uppercase" color={'#fff'}>
                        {t('common.back')}
                      </Text>
                    </Button>
                    <Button
                      onPress={() => {
                        setKYCStep(KYCStep + 1);
                      }}
                      width={'40%'}
                      primary
                      marginHorizontal={sizes.sm}>
                      <Text bold primary transform="uppercase" color={'#fff'}>
                        {t('common.next')}
                      </Text>
                    </Button>
                  </View>
                </View>
                <View></View>
              </Block>
            </View>
          </>
        ) : KYCStep === 5 ? (
          <View style={{margin: sizes.sm}}>
            <Block card>
              <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                <Text
                  h4
                  color={colors.primary}
                  align="center"
                  marginBottom={sizes.sm}>
                  Preferred Sectors for Investment
                </Text>
              </View>

              <View>
                <NativeBaseProvider>
                  <FormControl>
                    <Checkbox.Group
                      mt="2"
                      colorScheme={colors.primary}
                      defaultValue={groupValue}
                      accessibilityLabel="choose multiple items"
                      onChange={(values) => {
                        setGroupValue(values || []);
                      }}
                      alignItems="flex-start">
                      {InvestmentSectors.map((index) => {
                        return (
                          <Checkbox
                            colorScheme={'info'}
                            key={index.value}
                            value={index.value}
                            my="1">
                            {index.name}{' '}
                          </Checkbox>
                        );
                      })}
                    </Checkbox.Group>
                  </FormControl>
                </NativeBaseProvider>
              </View>

              <View style={{marginTop: sizes.sm}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: sizes.sm,
                  }}>
                  <Button
                    onPress={() => setKYCStep(KYCStep - 1)}
                    width={'40%'}
                    primary
                    marginHorizontal={sizes.sm}>
                    <Text bold primary transform="uppercase" color={'#fff'}>
                      {t('common.back')}
                    </Text>
                  </Button>
                  <Button
                    onPress={() => setKYCStep(KYCStep + 1)}
                    width={'40%'}
                    primary
                    marginHorizontal={sizes.sm}>
                    <Text bold primary transform="uppercase" color={'#fff'}>
                      Finish
                    </Text>
                  </Button>
                </View>
              </View>
            </Block>
          </View>
        ) : (
          <View style={{margin: sizes.sm}}>
            <Block card>
              <Text
                h4
                paddingBottom={sizes.sm}
                semibold
                marginBottom={sizes.sm}
                style={{borderBottomColor: 'grey', borderBottomWidth: 2}}
                align="center">
                Personal Information
              </Text>
              <Text color={colors.primary}>ID</Text>
              <Text h5 marginBottom={sizes.sm}>
                {id}
              </Text>
              <Text color={colors.primary}>ID Expiry Date (Hijri)</Text>
              <Text h5 marginBottom={sizes.sm}>
                {idExpiryHijri}
              </Text>
              <Text color={colors.primary}>Name</Text>
              <Text h5 marginBottom={sizes.sm}>
                {name}
              </Text>
              <Text color={colors.primary}>Date of Birth (G)</Text>
              <Text h5 marginBottom={sizes.sm}>
                {dobg}
              </Text>
              <Text color={colors.primary}>Gender</Text>
              <Text h5 marginBottom={sizes.sm}>
                {gender}
              </Text>
              <Text color={colors.primary}>Address</Text>
              <Text h5 marginBottom={sizes.sm}>
                {unitNum +
                  ', ' +
                  streetName +
                  ', ' +
                  zipCode +
                  ', ' +
                  city +
                  ', ' +
                  country}
              </Text>
              <Text color={colors.primary}>Education</Text>
              <Text h5 marginBottom={sizes.sm}>
                {education}
              </Text>
              <Text color={colors.primary}>Profession</Text>
              <Text h5 marginBottom={sizes.sm}>
                {profession}
              </Text>
              <Text color={colors.primary}>
                Are you director or an officer in public listed company?
              </Text>
              <Text h5 marginBottom={sizes.sm}>
                {director}
              </Text>
              <Text color={colors.primary}>Another Nationality</Text>
              <Text h5 marginBottom={sizes.sm}>
                {otherNationality}
              </Text>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text
                semibold
                h4
                paddingBottom={sizes.sm}
                marginBottom={sizes.sm}
                style={{borderBottomColor: 'grey', borderBottomWidth: 2}}
                align="center">
                Financial Information
              </Text>
              <Text color={colors.primary}>Investor Type</Text>
              <Text h5 marginBottom={sizes.sm}>
                {investorType}
              </Text>
              <Text color={colors.primary}>
                Have you ever invested in high risk companies?
              </Text>
              <Text h5 marginBottom={sizes.sm}>
                {everInvested}
              </Text>
              <Text color={colors.primary}>
                Approximate Net Worth (Excluding Residency)
              </Text>
              <Text h5 marginBottom={sizes.sm}>
                {approxNetWorth}
              </Text>
              <Text color={colors.primary}>
                Approximate Annual Income (SAR)
              </Text>
              <Text h5 marginBottom={sizes.sm}>
                {approxannualIncome}
              </Text>
              <Text color={colors.primary}>
                The amount to be invested for each opportunity
              </Text>
              <Text h5 marginBottom={sizes.sm}>
                {amountInvestedEachOp}
              </Text>
              <Text color={colors.primary}>
                The amount to be invested annually
              </Text>
              <Text h5 marginBottom={sizes.sm}>
                {amountInvestedAnnually}
              </Text>
              <Text color={colors.primary}>
                Preferred Sectors for Investment
              </Text>
              <Text marginBottom={sizes.sm}>{groupValue + '. '}</Text>
            </Block>

            <View style={{flexDirection: 'row', marginTop: sizes.sm}}>
              <Button
                onPress={() => setKYCStep(KYCStep - 1)}
                width={'40%'}
                primary
                marginHorizontal={sizes.sm}>
                <Text bold primary transform="uppercase" color={'#fff'}>
                  {t('common.back')}
                </Text>
              </Button>
              <Button width={'40%'} primary marginHorizontal={sizes.sm}>
                <Text bold primary transform="uppercase" color={'#fff'}>
                  Finish
                </Text>
              </Button>
            </View>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default KYCForm;
