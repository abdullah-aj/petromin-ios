import React from 'react';
import {useState} from 'react';
import {Alert, Text, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './style';

type Props = {};

let webview = null;

const loaderView = () => {
  return <ActivityIndicator color="#555555" size="large" style={styles.loaderStyle} />;
};

const WebViewContainer: React.FC<Props> = () => {
  return (
    <>
      <WebView
        ref={ref => (webview = ref)}
        source={{
          uri: 'https://sites.google.com/petromin.com/operation-excellence/home',
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={loaderView}
        startInLoadingState={true}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
          Alert.alert('Error', 'Unable to Connect Server');
        }}
        style={styles.webView}
      />
    </>
  );
};

export default WebViewContainer;
