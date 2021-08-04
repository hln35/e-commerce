import React from 'react'
import { Grid, Typography, Card, CardContent, CardMedia, Container, Link, Button, CssBaseline } from '@material-ui/core'
import useStyles from './cart_styles';
import CartItem from './CartItem/CartItem';
import {Helmet} from "react-helmet";
import zalo from '../../../assests/zalo.png'
const Cart= (props) => {
    const classes = useStyles();
    const UnFilled = () =>(
        <>
        <Typography variant='subtitle1' className={classes.title}>
            You have no items in your shopping cart, 
            <Link href='/'>please find more here</Link>
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
            <Helmet>
                <title>
                   Giỏ hàng | Công ty Tân Hải Vân
                </title>
                <link rel="canonical" href="https://tanhaivanltd.com/cart" />
                <meta name="description" content="Giỏ hàng của hệ thống mua hàng online của công ty Tân Hải Vân"/>
                <meta name="keywords" content="giỏ hàng, thạch cao, vĩnh tường, trần thạch cao, vách thạch cao"/>
            </Helmet>
        <CssBaseline/>
        <div className={classes.toolbar}/>
        <Typography gutterBottom variant='h4' style={{fontFamily:'Time New Roman'}}>
            Your shopping cart is:
        </Typography>
        {!props.cart.line_items.length ? <UnFilled/> : <Filled/>}
        <Button className={classes.icon} style={{color:"#479cc9"}} component={Link} target="_blank" href="https://zalo.me/0904252226"><img src={zalo}/></Button>

        </Container>
        )

}

export default Cart