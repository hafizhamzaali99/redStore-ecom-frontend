import { Search } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader, MyList } from '../../Style/Appbar'
import Action from './Action'

const AppbarDesktop = ({ matches }) => {
    return (
        <>
            <AppbarContainer>
                <AppbarHeader>RedStoreHub</AppbarHeader>
                <MyList type="row">
                    <ListItemText primary='Home'/>
                    <ListItemText primary='Categories'/>
                    <ListItemText primary='Products'/>
                    <ListItemText primary='Contact Us'/>
                </MyList>
                <ListItemButton>
                    <ListItemIcon>
                        <Search />
                    </ListItemIcon>
                </ListItemButton>
                <Action matches={matches}/>
            </AppbarContainer>
        </>
    )
}

export default AppbarDesktop
