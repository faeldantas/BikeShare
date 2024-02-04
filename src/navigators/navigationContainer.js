import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from "../screens/CadastroScreen"
import Login from "../screens/LoginScreen"


const Stack = createNativeStackNavigator();

export default function NavigationComponent () {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Cadastro">
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


