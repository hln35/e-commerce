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
    }
}));

export default useStyles