import {View, Text} from 'react-native';
import React from 'react';
import {Heading, HStack, Spinner} from 'native-base';
import {useData, useTheme, useTranslation} from '../hooks/';

const Loading = () => {
  const {colors, sizes} = useTheme();
  return (
    <View>
      <HStack space={2} justifyContent="center" alignItems="center">
        <Spinner
          color={colors.primary}
          size={'lg'}
          accessibilityLabel="Loading"
        />
        <Heading color={colors.primary} fontSize="lg">
          Loading
        </Heading>
      </HStack>
    </View>
  );
};

export default Loading;
