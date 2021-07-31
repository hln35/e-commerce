import { makeStyles } from "@material-ui/core";

const useStyles=makeStyles((theme) =>({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  buttons:{
    display:'flex',
    justifyContent:'space-between'
  },
  icon:{
    position:"fixed",
    transform:"scale(0.15,0.15)",
    bottom:"10%",
    right:-110,  
    zIndex:"1"
}
}))

export default useStyles