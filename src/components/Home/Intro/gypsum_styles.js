import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    main:{
        width:'auto',
        marginTop: '5%',
        [theme.breakpoints.up(900 + theme.spacing(2) * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
          },
    },
    content:{
        marginTop:theme.spacing(8),
        paddingTop:theme.spacing(4)
    }

}))

export default useStyles