import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
    root:{
        
        flexGrow:1,
        width:400,
        marginLeft: 100

    },
    media:{
        height: 200,
        transform:'scale(0.8,0.9)'
        
    },
    toolbar: theme.mixins.toolbar,
    display:{
        display:'flex',
    },
    details:{
        display:'flex',
        flexDirection:'column'
    },
    horizontalDisplay:{
        display:'inline-block',
    },
    icon:{
        position:"fixed",
        transform:"scale(0.15,0.15)",
        bottom:"10%",
        right:-110,  
        zIndex:"1"
    },
    "@keyframes shake":{
        "0%": { transform: "translate(1px, 1px) rotate(0deg) scale(0.15,0.15)" },
        "20%": { transform: "translate(-3px, 0px) rotate(1deg) scale(0.15,0.15)" },
        "40%": { transform: "translate(1px, -1px) rotate(1deg) scale(0.15,0.15)" },
        "60%": { transform: "translate(-3px, 1px) rotate(0deg) scale(0.15,0.15)" },
        "80%": { transform: "translate(-1px, -1px) rotate(1deg) scale(0.15,0.15)" },
        "100%": { transform: "translate(1px, -2px) rotate(-1deg) scale(0.15,0.15)"}
    }
}));

export default useStyles