import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions,Button } from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import useStyles from './CartItem_style'
const CartItem =(props) =>{
    const classes = useStyles();
    return(
        <Card >
            <CardMedia className={classes.media} image={props.item.media.source}/>
            <CardContent className={classes.cardContent}>
                <Typography variant='h8' style={{fontFamily: "Georgia"}}>
                {props.item.name}
                </Typography>
                <Typography variant='h9'>
                    {props.item.line_total.formatted_with_symbol}
                </Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <Button type='button' size='small' onClick={()=> {props.onAdd(props.item.id, props.item.quantity-1)}}>
                    <Remove/>
                </Button>
                <Typography>
                    {props.item.quantity}
                </Typography>
                <Button type='button' size='small' onClick={() => {props.onAdd(props.item.id, props.item.quantity+1)}}>
                    <Add/>
                </Button>
                <Button variant='contained' color='secondary' onClick={() => {props.onRemove(props.item.id)}}>
                    <Typography variant='body2'>
                        Xóa
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    )
}

export default CartItem