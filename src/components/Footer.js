// Footer.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const Footer = ({ onPressConta, tipoTela }) => {
  const mensagem = tipoTela === 'cadastro' ? 'Já tenho uma' : 'Ainda não tenho';

  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <Text style={styles.footerText}>
          {mensagem}{' '} 
        </Text>
        <Pressable onPress={onPressConta} style={styles.contaButton}>
          <Text style={[styles.linkText]}>conta</Text>
        </Pressable>
      </View>

      <Image source={require('../assets/securite.png')} style={styles.footerImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    
    //paddingVertical: 50,
  },
  footerContent: {
    flexDirection : 'row',
    alignItems: 'center',
    //backgroundColor : '#07A0C3'
  },
  footerText: {
    justifyContent : 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#8F8F8F',
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
  },
  footerImage: {
    marginTop: 15,
    width: 150,
    height: 35,
    resizeMode: 'contain',
  },
  contaButton : {
    //backgroundColor : '#000',
  }
});

export default Footer;
