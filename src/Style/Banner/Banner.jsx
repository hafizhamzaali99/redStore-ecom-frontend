import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Box } from "@mui/system"
import { Colors } from "../theme"



export const BannerContainer = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    background:Colors.light_gray,
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        alignItems:'center'
    }
}))

export const BannerContent = styled(Box)(()=>({
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    maxWidth:420,
    padding:'30px'
}))

export const BannerTitle = styled(Typography)(({theme})=>({
    fontSize:'72px',
    lineHeight:1.5,
    marginBottom:'20px',
    [theme.breakpoints.down('sm')]:{
        fontSize:'42px'
    }
}))
