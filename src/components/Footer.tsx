import {View, Text} from 'react-native';
import React from 'react';
import {useTheme, useTranslation} from '../hooks/';

const Footer = () => {
  const {assets, colors, gradients, sizes} = useTheme();
  const {t} = useTranslation();
  const {locale, setLocale} = useTranslation();
  const handleLanguageButton = () => {
    locale === 'en' ? setLocale('ar') : setLocale('en');
  };
  return (
    <View
      style={{
        marginBottom: sizes.sm,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        flexDirection: 'row',
      }}>
      <Text>
        {t('common.footertext')} {'|'}{' '}
      </Text>
      <Text
        semibold
        color={colors.primary}
        onPress={() => handleLanguageButton()}>
        {' '}
        {locale === 'en' ? 'عربي' : 'English'}
      </Text>
    </View>
  );
};

export default Footer;
