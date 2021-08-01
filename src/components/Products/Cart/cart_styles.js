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