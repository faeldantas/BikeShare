import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navi from './src/navigators/navigationContainer';

export default function App() {
  return (
    <SafeAreaProvider>
        <Navi />
    </SafeAreaProvider>
  );
}

