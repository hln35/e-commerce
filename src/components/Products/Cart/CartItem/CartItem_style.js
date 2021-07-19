import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
    media: {
        height: 190,
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      cartActions: {
        justifyContent: 'space-between',
      },
      buttons: {
        display: 'flex',
        alignItems: 'center',
      },
      root:{
          maxWidth:'100%',
          
      }
}))

export default useStyles