import { ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import AppBar from './Components/AppBar';
import theme from './Style/theme';
import Banner from './Components/Banner/Banner'



const App = () => {

  useEffect(() => {
    document.title = "Ecommerce Store - Home"
  })

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff"
        }}
      >
        <AppBar />
        <Banner />
      </Container>
    </ThemeProvider>

  );
}

export default App;
