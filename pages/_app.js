import '../styles/globals.css'
import styled, {ThemeProvider} from 'styled-components';
import MyThemeProvider from '../lib/provider/MyThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <MyThemeProvider>
      <Component {...pageProps} />
    </MyThemeProvider>
  )
}

export default MyApp
