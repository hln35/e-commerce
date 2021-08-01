import { makeStyles } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
    main:{
        width:'auto',
        marginTop: '5%',
        [theme.breakpoints.up(900 + theme.spacing(2) * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
          },
    },
    content:{
        marginTop:theme.spacing(8),
        paddingTop:theme.spacing(4)
    },
    media:{
        height:0,
        width:"100%",
        paddingTop:'60%'
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
    botNav:{
        position:"absolute",
        width:'100%'
    },
    banner: {
        "&:hover":{transform:"scale3d(1.05, 1.05, 1)", transition: "0.5s ease-in-out"},
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