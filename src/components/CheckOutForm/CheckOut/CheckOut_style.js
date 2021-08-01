import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    layout: {
        marginTop: '5%',
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          marginTop: 60,
        },
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        },
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
    }

    
))

export default useStyles