import React, { useState } from 'react';
import { 
  View,
  StyleSheet
  } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Form from '../components/FormLogin'
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const handlePressConta = () => {
    // Navegar para a tela de cadastro
    navigation.navigate('Cadastro');
  };

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
        <Header />
        <Form />
        <Footer onPressConta={handlePressConta} tipoTela={'login'}/>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor : '#FEFFF7',
  },
});


export default LoginScreen;
