import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow:1,
        display:'inline-block',
        maxWidth:'85%',
        
        
        
        
    },
    main:{
        display:'flex',
        
    },
    toolbar: theme.mixins.toolbar,
    media:{
        display:'flex',       
    },
    marginleft:{
        flexGrow:1
    },
    marginright:{
        flexGrow:0.5
    },
    space:{
        height:'50px'
    },
    card_space:{
        height:'30px'
    },
    image:{
        height:0,
        paddingTop:'40%',
        transform:'scale(0.8,0.9)'
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