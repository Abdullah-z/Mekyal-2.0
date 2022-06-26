import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Login,
  Articles,
  Components,
  Home,
  Profile,
  Register,
  Pro,
} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import Signin from '../screens/Signin';
import SignupAs from '../screens/SignupAs';
import SignupInvestor from '../screens/SignupInvestor';
import SignupEntrepreneur from '../screens/SignupEntrepreneur';
import VideoPlayer from '../screens/VideoPlayer';
import OpportunityDetails from '../screens/OpportunityDetails';
import PDFview from '../components/PDFview';
import TransactionHistory from '../screens/TransactionHistory';
import News from '../screens/News';
import SignupInvestor2 from '../screens/SignupInvestor2';
import KYC from '../screens/KYC';
import Test from '../screens/BottomNavigation';
import KYC2 from '../screens/KYC2';
import KYC3 from '../screens/KYC3';
import KYCForm from '../screens/KYCForm';
import UserProfile from '../screens/UserProfile';
import ChangePassword from '../screens/ChangePassword';
import EditProfile from '../screens/EditProfile';
import Test2 from '../screens/Test2';
import MyInvestments from '../screens/MyInvestments';
import OTP from '../screens/OTP';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator
      screenOptions={screenOptions.stack}
      initialRouteName={'Home'}>
      {/* initialRouteName={'OTP'}> */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      {/* <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      /> */}

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign In"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up As"
        component={SignupAs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up As Investor"
        component={SignupInvestor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up As Entrepreneur"
        component={SignupEntrepreneur}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={OpportunityDetails}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Video Player"
        component={VideoPlayer}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="PDF View"
        component={PDFview}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Transaction History"
        component={TransactionHistory}
        options={{headerShown: true}}
      />

      <Stack.Screen
        name="News"
        component={News}
        options={{headerShown: true}}
      />

      <Stack.Screen
        name="Sign Up As Investor 2"
        component={SignupInvestor2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Test"
        component={Test2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KYC2"
        component={KYC2}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="KYC3"
        component={KYC3}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="KYC Form"
        component={KYCForm}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Profile"
        component={UserProfile}
        options={{headerShown: true}}
      />

      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{headerShown: true}}
      />

      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{headerShown: true}}
      />

      <Stack.Screen
        name="My Investments"
        component={MyInvestments}
        options={{headerShown: true}}
      />

      <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />

      <Stack.Screen name="KYC" component={KYC} options={{headerShown: true}} />
    </Stack.Navigator>
  );
};
