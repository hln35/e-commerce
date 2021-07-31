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
    }
}));

export default useStyles