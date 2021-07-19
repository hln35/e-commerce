import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: { 
        flexGrow: 1,
        maxHeight: '100%',
        maxWidth: '100%'
    },
    media: {height: 0, paddingTop:'45%', maxHeight: '80%', maxWidth:'100%'},
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(0),
      },
    
}))

export default useStyles