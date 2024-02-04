import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Adicione sua logo centralizada aqui */}
      <Image source={require('../assets/BikeLogoCol.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor : '#FFF',
    marginTop : 10
    // Cor de fundo do cabeçalho
  },
  logo: {
    width: 300, // Ajuste conforme necessário
    height: 150, // Ajuste conforme necessário
    resizeMode: 'contain', // Ajuste conforme necessário
  },
});

export default Header;
