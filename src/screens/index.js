import React, { useState } from 'react';
import { 
  View,
  StyleSheet,
  Text,
  Image
  } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const InitialScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
        <Image source={require('../assets/BikeLogoWhite.png')} style={styles.logoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#07A0C3',
  },
  logoImage: {
    width: 300, 
    height: 150, 
    resizeMode: 'contain',
  },
});


export default InitialScreen;
