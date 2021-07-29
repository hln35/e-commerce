import React  from 'react';
import { Grid, Card, CardMedia, CardContent,Typography,IconButton,CardActions,makeStyles } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
      
      

    },
    media: {
      height: 0,
      paddingTop:'60%', // 16:9
      transform: 'scale(0.9,1)',
      marginTop:"5%",
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    cardContent:{
        display: 'flex',
        justifyContent: 'space-between',

    },
    cardAction:{
        display: 'flex',
        justifyContent:'flex-end',
    },
    space:{
      
    }
  }));


const ProductVariant = (props) =>{
    const classes = useStyles();
    
    
    

    
    return(
    props.products.map((product) => ( product.variant_groups.length !== 0 && product.id ===props.id &&
        <Grid container justify="center" spacing={4} >
            {product.assets.map((image) => (
            <Grid item xs={6} sm={6} md={4} lg={3}>
                <Card className={classes.root} >
      
                     
                    <Link to={`/${product.id}`}>
                        <CardMedia  className={classes.media} image={image.url} />
     
                   </Link>
                </Card>
    
    </Grid>
                ))}
    </Grid>
    ))
        
    )}

    export default ProductVariant