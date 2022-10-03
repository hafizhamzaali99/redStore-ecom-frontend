import { Box, ThemeProvider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import AppBar from './Components/AppBar';
import theme from './Style/theme';
import Banner from './Components/Banner/Banner'
import Promotion from './Components/Promotions/Promotion';
import Products from './Components/Products/Products';



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
        <Promotion />
        <Box sx={{display:'flex',justifyContent:'center',pt:4}}>
          <Typography variant='h4' >OUR PRODUCTS</Typography>
        </Box>
        <Products />
      </Container>
    </ThemeProvider>

  );
}

export default App;
