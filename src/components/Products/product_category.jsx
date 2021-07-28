import React from 'react';
import { Grid} from '@material-ui/core';
import Product from './Product/product';
import useStyles from './productsstyle';


const ProductCategory = (props) => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <Grid container justify="center" spacing={4}>
                { props.products.map((product) => (
                     product.categories[0].name === props.category &&
                <Grid item xs={6} sm={6} md={4}>
                    <Product product={product} handleAddToCart={props.onHandleAddToCart} handleGetId={props.onChooseProduct}/>
                  </Grid>
                  
                ))}
            </Grid>
                
        
        </main>
    )
}

export default ProductCategory