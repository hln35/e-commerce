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
      transform: 'scale(0.9,1)'
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
      height:30
    }
  }));


const Product = (props) =>{
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    
    

    
    return(
    <Card className={classes.root} >
      
        <div className={classes.space}/>
        <Link to={`/${props.product.id}`}>
        <CardMedia  className={classes.media} image={props.product.assets[0].url} title={props.product.id} onClick={() => {props.handleGetId(props.product)}} >
        
        </CardMedia>
        </Link>
        <Link to={`/${props.product.id}`}>
        <CardContent onClick={() => {props.handleGetId(props.product)}}>
            <Grid item xs={12} xs container justify="space-between">
                <Grid item >
                    <Typography variant='h6' gutterBottom>
                    
                        {props.product.name}
                    
                    </Typography>
                </Grid>
                
                {/*<Grid item >
                    <Typography variant='body2' color='textSecondary' >
                        {props.product.price.formatted_with_symbol}
                        
                    </Typography>
                </Grid>*/}
            </Grid>
            

        </CardContent>
        </Link>
        
        {/*<CardContent>
            <Typography variant='body2' color='textSecondary' dangerouslySetInnerHTML={{ __html:props.product.description}}>
            
            </Typography>
        </CardContent>*/}
        <CardActions className={classes.cardAction}>
            <IconButton onClick={() => {props.handleAddToCart(props.product.id, 1)}}>
                <AddShoppingCart/>
            </IconButton>
        </CardActions>
        
    </Card>
    
    )
}

export default Product;