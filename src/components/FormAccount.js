import React, { useState } from 'react';
import { 
  View,
  Text, 
  TextInput, 
  StyleSheet
  } from 'react-native';
import Button from './Button';

const FormAccountScreen = ({onPressConta}) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <View>
      {step === 1 && (
        <View>
          <View style={ styles.header}>
              <Text style={[styles.centeredText, styles.txtG]}>Criar nova conta</Text>
              <Text style={[styles.txtP, styles.centeredText]}>Passo 1 de 2</Text>
          </View>

          <TextInput 
            style={styles.input}
            placeholder='Nome'/> 
          <TextInput
            style={styles.input} 
            placeholder='E-mail'/> 
          <TextInput 
            style={styles.input}
            placeholder='Senha'/> 
          <TextInput
            style={styles.input} 
            placeholder='Telefone'/> 

          {/* Campos para as informações pessoais */}

           <Button  
            title={"Próximo"} 
            color={'#F0C808'}
            onPress={nextStep}
           />

        </View>
      )}

      {step === 2 && (
        <View>
          <View style={ styles.header}>
              <Text style={[styles.centeredText, styles.txtG]}>Criar nova conta</Text>
              <Text style={[styles.txtP, styles.centeredText]}>Passo 2 de 2</Text>
          </View>

          <View style={styles.rowInputs}>
              <TextInput 
                style={[styles.input, styles.inputM]}
                placeholder='Rua'/> 
              <TextInput
                style={[styles.input, styles.inputP]} 
                placeholder='N°'/> 
          </View>
          
          <TextInput 
            style={styles.input}
            placeholder='Bairro'/> 

          <View style={styles.rowInputs}>
              <TextInput 
                style={[styles.input, styles.inputM]}
                placeholder='Cidade'/> 
              <TextInput
                style={[styles.input, styles.inputP]} 
                placeholder='N°'/> 
          </View>

          <TextInput 
            style={styles.input}
            placeholder='CEP'/> 


          {/* Campos para as informações da conta */}
          {/* <Button title="Criar minha conta" onPress={() => 
            {
              setStep(step - 1);
              alert('Conta criada com sucesso!')
            }} /> */}

          <Button  
            title={"Criar minha conta"} 
            color={'#F0C808'}
            onPress={onPressConta} 
              // {
              //   setStep(step - 1);
              //   alert('Conta criada com sucesso!');
              //   onPressConta;
              // }}
           />
        </View>
      )}
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
    paddingVertical : 20,
    
    
  }
});


export default FormAccountScreen;
