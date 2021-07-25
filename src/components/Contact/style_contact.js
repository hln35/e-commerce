import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.down(780+ theme.spacing(2) * 2)]: {
            flexDirection:'column'}
    },
    media:{
        width: 600,
        height:300,
        [theme.breakpoints.down(780 + theme.spacing(2) * 2)]: {
            width: "100%",
            marginLeft: 'auto',
            marginRight: 'auto',
          },
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft:'5%'
      },
    cover: {
        width: 500,
        height:300,
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          },
      },
      video:{
          width:"100%",
          height:"100%"
      },
      main:{
          display:'flex',
          paddingLeft:20,
          paddingTop:"50%",
          backgroundColor:"#4a4a4a"


      }
}))

export default useStyles