import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.down(780+ theme.spacing(2) * 2)]: {
            flexDirection:'column'}
    },
    media:{
        width: 600,
        height:300,
        [theme.breakpoints.down(780 + theme.spacing(2) * 2)]: {
            width: "100%",
            marginLeft: 'auto',
            marginRight: 'auto',
          },
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft:'5%'
      },
    cover: {
        width: 500,
        height:300,
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          },
      },
      video:{
          width:"100%",
          height:"100%"
      },
      main:{
          display:'flex',
          paddingLeft:20,
          paddingTop:"10%",
          position:"relative",
          backgroundColor:"#4a4a4a",
          [theme.breakpoints.down(780+ theme.spacing(2) * 2)]: {
            
            flexDirection:'column'}


      },
      contact:{
        paddingTop:'110%',
        backgroundColor:"#4a4a4a",
        [theme.breakpoints.up(780+ theme.spacing(2) * 2)]: {
            
            paddingTop:'50%'}
        
        
      },
      icon:{
        position:"fixed",
        transform:"scale(0.15,0.15)",
        bottom:"10%",
        right:-110,  
        zIndex:"1",
        animation: `$shake 300ms ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: "infinite",
    },
    "@keyframes shake":{
        "0%": { transform: "translate(1px, 1px) rotate(0deg) scale(0.15,0.15)" },
        "20%": { transform: "translate(-3px, 0px) rotate(1deg) scale(0.15,0.15)" },
        "40%": { transform: "translate(1px, -1px) rotate(1deg) scale(0.15,0.15)" },
        "60%": { transform: "translate(-3px, 1px) rotate(0deg) scale(0.15,0.15)" },
        "80%": { transform: "translate(-1px, -1px) rotate(1deg) scale(0.15,0.15)" },
        "100%": { transform: "translate(1px, -2px) rotate(-1deg) scale(0.15,0.15)"}
    }
}))

export default useStyles