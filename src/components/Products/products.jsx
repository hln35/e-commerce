import React from 'react';
import {Grid, MenuItem, Select, InputLabel, FormControl} from '@material-ui/core';
import Product from './Product/product';
import useStyles from './productsstyle';
import { commerce_1 } from '../../lib/commerce';
import { useEffect, useState } from 'react';
import { LinearProgress } from '@material-ui/core';



const Products = (props) => {
    const classes = useStyles();
    const [category, setCategory] = useState();
    const [categories, setCategories] =useState();
    const handleChange = (e) => {
        setCategory(e.target.value)
    };
    const handleSetCategory = () => {
        setCategory(categories[0])
    };
    // const fetchCategory = async (id) => {
    //     const category = await commerce_1.categories.retrieve(id)
    //     setCategory(category)
    // }
 
    useEffect(()=>{
        const fetchCategories = async () =>{
            const {data} = await commerce_1.categories.list();
            setCategories(data);
            setCategory("Thi công trần")
          };
       
        fetchCategories();
        

        
    },[]);

    // useEffect(() => {
    //     const fetchSetCategory = async () => {

    //     } ;
    // },[categories]);
    
    if(!categories ) return (<LinearProgress/>);
    
    console.log(categories)
    console.log(category)
    
    
    return(
    <main className={classes.content}>
        <div className={classes.toolbar}></div>
         <FormControl className={classes.formControl}>
         <InputLabel id="simple-select-label">Danh Mục Sản Phẩm</InputLabel> 
        <Select fullWidth
                labelId="simple-select-label"
                
                onChange={handleChange}
                value={category}    >
            {categories.map((category) => (
                <MenuItem value={category.name}>{category.name}</MenuItem>
            ))}
        </Select> 
        </FormControl>
        <Grid container justify="center" spacing={4}>
            {props.products.map((product) => (
                 product.categories[0].name === category &&
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} handleAddToCart={props.onHandleAddToCart} handleGetId={props.onChooseProduct} showPrice={true}></Product>
                

            </Grid>
            ))}

        </Grid>
    </main>)

};

export default Products;