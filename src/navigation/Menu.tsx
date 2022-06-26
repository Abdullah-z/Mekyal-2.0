import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, Animated, Linking, StyleSheet, View} from 'react-native';

import {
  useIsDrawerOpen,
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Screens from './Screens';
import {Block, Text, Switch, Button, Image} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';

const Drawer = createDrawerNavigator();

/* drawer menu screens navigation */
const ScreensStack = () => {
  const {colors} = useTheme();
  const isDrawerOpen = useIsDrawerOpen();
  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.88],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {
    borderRadius: borderRadius,
    transform: [{scale: scale}],
  };

  useEffect(() => {
    Animated.timing(animation, {
      duration: 200,
      useNativeDriver: true,
      toValue: isDrawerOpen ? 1 : 0,
    }).start();
  }, [isDrawerOpen, animation]);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        animatedStyle,
        {
          flex: 1,
          overflow: 'hidden',
          borderColor: '#f8f9fa',
          borderWidth: isDrawerOpen ? 1 : 0,
        },
      ])}>
      {/*  */}
      <Screens />
    </Animated.View>
  );
};

/* custom drawer menu */
const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  const {navigation} = props;
  const {t} = useTranslation();
  const {isDark, handleIsDark} = useData();
  const [active, setActive] = useState('Home');
  const {assets, colors, gradients, sizes} = useTheme();
  const labelColor = colors.text;
  const {locale, setLocale} = useTranslation();
  console.log('menu ' + locale);

  const handleLanguageButton = () => {
    locale === 'en' ? setLocale('ar') : setLocale('en');
    locale === 'en' ? setMenuPos('Left') : setMenuPos('Right');
  };

  const handleNavigation = useCallback(
    (to) => {
      setActive(to);
      navigation.navigate(to);
    },
    [navigation, setActive],
  );

  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  // screen list for Drawer menu
  const screens = [
    {name: t('screens.home'), to: 'Home', icon: assets.home},
    {name: t('screens.kyc'), to: 'Components', icon: assets.components},
    {
      name: t('screens.transactionHistory'),
      to: 'Transaction History',
      icon: assets.document,
    },
    {
      name: t('screens.myInvestments'),
      to: 'My Investments',
      icon: assets.rental,
    },
    {name: t('screens.generalAssembly'), to: 'Profile', icon: assets.profile},
    {
      name: t('screens.conflictofInterestsPolicy'),
      to: 'Pro',
      icon: assets.settings,
    },
    {name: t('screens.complaints'), to: 'Register', icon: assets.register},
    {name: t('screens.notifications'), to: 'Pro', icon: assets.extras},
    {name: t('screens.messages'), to: 'Pro', icon: assets.extras},
  ];

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled
      removeClippedSubviews
      renderToHardwareTextureAndroid
      contentContainerStyle={{
        paddingBottom: sizes.padding,
        backgroundColor: colors.primary,
        height: '100%',
      }}>
      <Block paddingHorizontal={sizes.padding}>
        {screens?.map((screen, index) => {
          const isActive = active === screen.to;
          return (
            <Button
              row
              justify={locale === 'ar' ? 'flex-end' : 'flex-start'}
              marginBottom={sizes.s}
              key={`menu-screen-${screen.name}-${index}`}
              onPress={() => handleNavigation(screen.to)}>
              <Text p semibold={isActive} color={'#fff'}>
                {screen.name}
              </Text>
            </Button>
          );
        })}

        <Block
          flex={0}
          height={1}
          marginRight={sizes.md}
          marginVertical={sizes.sm}
          gradient={gradients.menu}
        />

        {/* <View
          style={{
            alignItems: 'flex-start',
            borderColor: '#fff',
          }}>
          <Text color={'#fff'}>{t('common.language')}</Text>
          <Button
            gradient={gradients.dark}
            marginBottom={sizes.base}
            marginTop={sizes.base}
            width={'50%'}
            onPress={handleLanguageButton}>
            <Text white bold transform="uppercase">
              {locale === 'en' ? 'عربي' : 'English'}
            </Text>
          </Button>
        </View> */}
      </Block>
    </DrawerContentScrollView>
  );
};

/* drawer menu navigation */
export default () => {
  const {gradients} = useTheme();
  const {locale, setLocale} = useTranslation();
  console.log(locale)

  return (
    <Block gradient={gradients.light}>
      <Drawer.Navigator
        drawerPosition={'left'}
        drawerType="front"
        overlayColor="transparent"
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerStyle={{
          flex: 1,
          width: '100%',
          borderRightWidth: 0,
          backgroundColor: 'transparent',
        }}>
        <Drawer.Screen name="Screens" component={ScreensStack} />
      </Drawer.Navigator>
    </Block>
  );
};
