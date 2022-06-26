import 'react-native-gesture-handler';
import React from 'react';

import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/App';
import UserContext from './src/hooks/UserContext';
import {ToastProvider} from 'react-native-toast-notifications';
import {Text, View} from 'react-native';
import {NativeBaseProvider} from 'native-base';

export default function App() {
  return (
    <DataProvider>
      <NativeBaseProvider>
        <ToastProvider
          renderType={{
            custom_type: (toast) => (
              <View style={{padding: 15, backgroundColor: 'red'}}>
                <Text>{toast.message}</Text>
              </View>
            ),
          }}>
          <AppNavigation />
        </ToastProvider>
      </NativeBaseProvider>
    </DataProvider>
  );
}
