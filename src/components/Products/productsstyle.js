import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },

  formControl: {
    width:"50%",
    paddingBottom:'5%'
  },
  icon:{
    position:"fixed",
    transform:"scale(0.15,0.15)",
    bottom:"10%",
    right:-110,  
    zIndex:"1"
}
}));

export default useStyles;