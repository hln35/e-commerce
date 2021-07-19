import React from 'react'
import { Grid, Typography, Card, CardContent, CardMedia, Container, Link, Button } from '@material-ui/core'
import useStyles from './cart_styles';
import CartItem from './CartItem/CartItem';

const Cart= (props) => {
    const classes = useStyles();
    const UnFilled = () =>(
        <>
        <Typography variant='subtitle1' className={classes.title}>
            You have no items in your shopping cart, 
            <Link href='/home'>please find more here</Link>
        </Typography>
        </>
    );
    const Filled = () =>(
        <>
        <Grid container  spacing={4}>
            {props.cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} md={3}>
                <CartItem item={item} onAdd={props.onHandleAdd} onRemove={props.onRemoveItem}/>
            </Grid>

        
        ))}
        </Grid>
        <CardContent className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal: 
                    {props.cart.subtotal.formatted_with_symbol}
                </Typography>
                <div >
                <Button color='secondary' variant='contained' className={classes.emptyButton} onClick={props.onEmpty}>    
                    Emty Cart
                </Button>
                <Button component={Link} href='/checkout' color='primary' variant='contained'  className={classes.checkoutButton}>
                    Check Out
                </Button>
                </div>
        </CardContent>
        </>
    );
    if(!props.cart.line_items) return 'Loading....';
    return(
        <Container>
        <div className={classes.toolbar}/>
        <Typography gutterBottom variant='h4' style={{fontFamily:'Time New Roman'}}>
            Your shopping cart is:
        </Typography>
        {!props.cart.line_items.length ? <UnFilled/> : <Filled/>}

        </Container>
        )

}

export default Cart