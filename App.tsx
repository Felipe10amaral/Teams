import { StatusBar } from 'react-native';
import { Loading } from './src/Components/Loading';

import Group from './src/Screens/Group';
import {ThemeProvider} from 'styled-components/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import theme from './src/theme'

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })


  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} translucent/>
        { fontsLoaded ? <Group /> : <Loading /> }
    </ThemeProvider>  
  );
}

