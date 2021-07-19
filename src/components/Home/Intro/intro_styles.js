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
    }


}))

export default useStyles