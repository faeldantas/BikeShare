import React, { useState } from 'react';
import { 
  View,
  Text, 
  TextInput, 
  StyleSheet
  } from 'react-native';
import Button from './Button';

const FormLoginScreen = () => {
  return (
    <View>
        <View style={ styles.header}>
            <Text style={[styles.centeredText, styles.txtG]}>Acessar conta</Text>
        </View>

        <TextInput
        style={styles.input} 
        placeholder='E-mail'/> 
        <TextInput 
        style={styles.input}
        placeholder='Senha'/> 

        <Button  
        title={"Acessar"} 
        color={'#07A0C3'}
        onPress={() => 
            {
                setStep(step - 1);
                alert('Logado com sucesso!')
            }}
        />

    </View>      
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 45,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor : '#8F8F8F',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  rowInputs: {
    flexDirection : 'row'
  },
  inputP : {
    width: 60,
    padding: 10,
  },
  inputM : {
    width: 230,
    marginRight: 10,
  },
  button : {
    width: 250,
  },
  txtG: { 
    fontSize: 22
  },
  txtP: { 
    fontSize: 16,
    //fontWeight: '200',
    color : '#8F8F8F'

  },
  centeredText: {
    alignSelf: 'center',
    padding: 5,
    
    
  },
  header : {
    paddingVertical : 60,
    
    
  }
});


export default FormLoginScreen;
