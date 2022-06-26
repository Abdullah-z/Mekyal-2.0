import {ScrollView, View} from 'react-native';
import React from 'react';
import {Block, Button, Input, Text} from '../components';
import {useTheme, useTranslation} from '../hooks/';
import {FormControl, NativeBaseProvider} from 'native-base';

const ChangePassword = () => {
  const {colors, sizes} = useTheme();
  const {t} = useTranslation();
  return (
    <ScrollView>
      <View style={{margin: sizes.sm}}>
        <Block card>
          <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
            <Text
              h4
              color={colors.primary}
              align="center"
              marginBottom={sizes.sm}>
              Change Password
            </Text>
          </View>
          <View>
            <View style={{marginTop: sizes.sm}}>
              <Input
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.sm}
                label="Old Password"
                placeholder=""
              />
              <Input
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.sm}
                label="New Password"
                placeholder=""
              />
              <Input
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.sm}
                label="Confirm New Password"
                placeholder=""
              />

              <Text size={12} color={colors.primary} marginBottom={sizes.sm}>
                {t('common.passwordhelptext')}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginVertical: sizes.sm,
                }}>
                <Button width={'40%'} primary marginHorizontal={sizes.sm}>
                  <Text bold primary transform="uppercase" color={'#fff'}>
                    Update
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

export default ChangePassword;
