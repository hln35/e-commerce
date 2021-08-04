import React from 'react';
import { Grid} from '@material-ui/core';
import Product from './Product/product';
import useStyles from './productsstyle';


const ProductSummary = (props) => {
    const classes = useStyles();
    return(
        <main className={classes.content} style={{ background: "rgb(227,225,54)", background: "linear-gradient(90deg, rgba(227,225,54,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)" }}>
            <Grid container justify="center" spacing={4}>
                { props.products.map((product) => (
                     product.categories[0].name === props.category &&
                <Grid item xs={6} sm={6} md={3} lg={2}>
                    <Product product={product} handleAddToCart={props.onHandleAddToCart} handleGetId={props.onChooseProduct} showPrice={props.showPrice}/>
                  </Grid>
                  
                ))}
            </Grid>
                
        
        </main>
    )
}

export default ProductSummary