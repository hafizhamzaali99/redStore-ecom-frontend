import React from 'react'
import { Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../Style/Banner/Banner'

const Banner = () => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <BannerContainer matches={matches}>
      <BannerImage src='/images/banner/banner.png'/>
      <BannerContent>
        <Typography variant='h6'>Huge Collection</Typography>
        <BannerTitle>New Bags</BannerTitle>
        <BannerDescription variant='subtitle'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus qui omnis deleniti laborum esse corporis excepturi, est praesentium reiciendis sequi.</BannerDescription>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
