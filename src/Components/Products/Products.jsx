import { Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { data } from '../../Data/Data'
import SingleProduct from './SingleProduct'

const Products = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const renderProduct = data.map((product)=>{
      return(

      <Grid item key={product.id} display={'flex'} alignItems={'center'} flexDirection={'column'} xs={2} sm={4} md={4}>
        <SingleProduct product={product} matches={matches}/>
      </Grid>
      )
    })
  return (
    <Grid
      container
      spacing={{xs:3, md:4}}
      justifyContent={'center'}
      sx={{padding:'20px 4px 10px 4px'}}
      columns={{xs:4,sm:8,md:12}}
    >
      {renderProduct}
    </Grid>
  )
}

export default Products
