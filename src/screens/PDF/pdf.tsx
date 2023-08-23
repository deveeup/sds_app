import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PDFScreen() {
  const yourPdfURL="https://firebasestorage.googleapis.com/v0/b/servicedogschool-e0fc7.appspot.com/o/SA-2809131-L.pdf?alt=media&token=e2b4b2c3-4ac8-4ec4-91f1-6d40e5b954fa"
  return (
    <SafeAreaView>
      <Text>PDF SCREENx</Text>
      <WebView
        source={{ uri: `https://docs.google.com/gview?embedded=true&url=${yourPdfURL}` }}
        style={{ width:"100%",height:"100%"}}
      />
    </SafeAreaView>
  )
};
