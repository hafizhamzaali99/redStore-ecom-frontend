import { Typography, Box } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Colors } from "../theme"



export const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

export const BannerImage = styled('img')(({src,theme})=>({
    src:`url${src}`,
    width:"500px",
    [theme.breakpoints.down('md')]: {
        width:"350px",
    },
    [theme.breakpoints.down('sm')]: {
        width:"320px",
        height:'300px'
    },
}))

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: 420,
    padding: '30px'
}))

export const BannerTitle = styled(Typography)(({ theme }) => ({
    fontSize: '72px',
    lineHeight: 1.5,
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px'
    }
}))

export const BannerDescription = styled(Typography)(({ theme }) => ({
    letterSpacing: 1.25,
    lineHeight: 1.25,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
        letterSpacing: 1.15,
        lineHeight: 1.15,
        marginBottom: '1.5em',
    }
}))