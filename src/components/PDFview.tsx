import * as React from 'react';
import {View, Linking} from 'react-native';

// import {WebView} from 'react-native-webview';
import Button from './Button';
import Text from './Text';

export default function PDFview() {
  //   const pdfUrl =
  //     'src="https://drive.google.com/file/d/1nw8AQ8PsdL7MyF7e4Qir4bcvrm4DgCtZ/view"';

  const openLink = () => {
    Linking.openURL(
      'https://drive.google.com/file/d/1nw8AQ8PsdL7MyF7e4Qir4bcvrm4DgCtZ/view',
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Button solid primary width={'25%'} onPress={openLink}>
        <Text>PDF</Text>
      </Button>
    </View>
  );
}
