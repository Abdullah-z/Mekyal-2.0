import {ScrollView, View} from 'react-native';
import React from 'react';
import {Block, Button, Input, Text} from '../components';
import {useTheme, useTranslation} from '../hooks/';

const EditProfile = () => {
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
              Edit Profile
            </Text>
          </View>
          <View>
            <View style={{marginTop: sizes.sm}}>
              <Input
                autoCapitalize="none"
                marginBottom={sizes.sm}
                label="Full Name"
                placeholder=""
              />
              <Input
                autoCapitalize="none"
                marginBottom={sizes.sm}
                label="Email Address"
                placeholder=""
              />
              <Input
                autoCapitalize="none"
                marginBottom={sizes.sm}
                label="Phone Number"
                placeholder=""
              />

              <Text size={12} color={colors.primary} marginBottom={sizes.sm}>
                {t('common.phonehelptext')}
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

export default EditProfile;
