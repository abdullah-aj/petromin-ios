import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('screen');
const wHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight || 70;
const bottomNavBar = height - wHeight;

const styles = StyleSheet.create({
  webView: {
    width: width,
    height: height - statusBarHeight - bottomNavBar,
  },
  loaderStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default styles;
