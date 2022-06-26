import {View} from 'react-native';
import React from 'react';
import Modal from './Modal';
import Popup from './Popup';
import Text from './Text';
import {useTheme, useTranslation,useData} from '../hooks/';

const TabInvestNow = () => {
  const {token}=useData();

  const {colors, sizes} = useTheme();
  const {t} = useTranslation();
  return (
    <View style={{margin: sizes.sm}}>
      <Text center color={'red'} h4>
        {t('common.closed')}
      </Text>
    </View>
  );
};

export default TabInvestNow;
