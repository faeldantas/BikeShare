import React from 'react';
import {View, Text, Alert, Pressable, StyleSheet} from 'react-native';

const App = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>
            This is clickable{' '}
        </Text>

        <Pressable onPress={() => {navigation.navigate('Cadastro')}}>
            <Text style={styles.click}>text</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  click : {
    color : '#07A0C3'
  }
});

export default App;
