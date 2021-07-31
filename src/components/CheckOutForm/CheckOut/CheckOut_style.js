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
        zIndex:"1"
    }
    }

    
))

export default useStyles