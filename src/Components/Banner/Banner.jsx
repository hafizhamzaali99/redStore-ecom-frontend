import React from 'react'
import { Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { BannerContainer, BannerContent } from '../../Style/Banner/Banner'

const Banner = () => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <BannerContainer matches={matches}>
      <BannerContent>
        <Typography variant='h6'>Huge Collection</Typography>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
