import {View} from 'react-native';
import React from 'react';
import Image from './Image';
import {useTheme, useTranslation} from '../hooks/';

const MekyalLogo = () => {
  const {locale} = useTranslation();
  const {assets, sizes} = useTheme();
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={
          locale === 'en-US' || locale === 'en'
            ? assets.mekyal
            : assets.mekyalar
        }
        width={'85%'}
        height={120}
        marginVertical={sizes.sm}
      />
    </View>
  );
};

export default MekyalLogo;
