import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/product';
import useStyles from './productsstyle';



const Products = (props) => {
    const classes = useStyles();
    
    
    
    

    return(
    <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Grid container justify="center" spacing={4}>
            {props.products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} handleAddToCart={props.onHandleAddToCart} handleGetId={props.onChooseProduct}></Product>
                

            </Grid>
            ))}

        </Grid>
    </main>)

};

export default Products;