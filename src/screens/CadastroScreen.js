import React, { useState } from 'react';
import { 
  View,
  StyleSheet
  } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Form from '../components/FormAccount'
import Header from '../components/Header';
import Footer from '../components/Footer';

const CreateAccountScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const handlePressConta = () => {
    // Navegar para a tela de login
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
        <Header />
        <Form onPressConta={handlePressConta}/>
        <Footer onPressConta={handlePressConta} tipoTela={'cadastro'}/>
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


export default CreateAccountScreen;
