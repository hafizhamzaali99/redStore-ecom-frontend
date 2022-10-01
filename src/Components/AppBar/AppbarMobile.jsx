import { Menu, Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader } from '../../Style/Appbar'
import Action from './Action'

const AppbarMobile = ({ matches }) => {
    return (
        <>
            <AppbarContainer>
                <IconButton>
                    <Menu />
                </IconButton>
                <AppbarHeader textAlign='center'>My Bag</AppbarHeader>
                <IconButton>
                    <Search />
                </IconButton>
                <Action matches={matches}/>
            </AppbarContainer>
        </>
    )
}

export default AppbarMobile
