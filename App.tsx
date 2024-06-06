import Group from './src/Screens/Group';
import {ThemeProvider} from 'styled-components'

import theme from './src/themes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Group />
    </ThemeProvider>  
  );
}

