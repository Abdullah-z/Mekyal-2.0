import React, {useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Block from './Block';
import Button from './Button';
import Input from './Input';
import Text from './Text';
import {useData, useTheme, useTranslation} from '../hooks';
import {ScrollView} from 'react-native-gesture-handler';
import {t} from 'i18n-js';

function Popup() {
  const {colors, sizes} = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Block align="center">
      <Button
        width={'120%'}
        marginHorizontal={sizes.sm}
        onPress={toggleModal}
        color={'white'}
        marginVertical={sizes.s}>
        <Text semibold color={colors.primary}>
          {t('common.withdraw')}
        </Text>
      </Button>

      <Modal
        isVisible={isModalVisible}
        style={{
          marginHorizontal: '5%',
          alignItems: 'center',
          marginTop: '50%',
        }}>
        <ScrollView>
          <Block card align="center" justify="center">
            <Text h5 marginTop={sizes.sm} color={colors.primary}>
              Withdraw Request
            </Text>
            <Block width={'100%'}>
              <Input
                marginVertical={sizes.sm}
                autoCapitalize="none"
                keyboardType="number-pad"
                placeholder="Amount"
              />
              <Input
                marginBottom={sizes.sm}
                autoCapitalize="none"
                keyboardType="default"
                placeholder="Message"
              />

              <Block row align="center">
                <Button
                  width={'40%'}
                  marginHorizontal={sizes.sm}
                  onPress={toggleModal}
                  primary
                  solid
                  color={'red'}
                  marginVertical={sizes.s}>
                  <Text bold primary transform="uppercase" color={'#fff'}>
                    Cancel
                  </Text>
                </Button>
                <Button
                  width={'40%'}
                  marginHorizontal={sizes.sm}
                  primary
                  solid
                  marginVertical={sizes.s}>
                  <Text bold primary transform="uppercase" color={'#fff'}>
                    Submit
                  </Text>
                </Button>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Modal>
    </Block>
  );
}

export default Popup;
