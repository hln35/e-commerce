import React from 'react';
import {Grid, MenuItem, Select, InputLabel, FormControl,Button, Link, Typography, Icon} from '@material-ui/core';
import Product from './Product/product';
import useStyles from './productsstyle';
import { commerce_1 } from '../../lib/commerce';
import { useEffect, useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import zalo from '../../assests/zalo.png'
import WhatshotIcon from '@material-ui/icons/Whatshot';
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
        <Helmet>
            <title>Trang chủ| Công ty Tân Hải Vân| Mang đến các giải pháp trần vách thạch cao tốt nhất </title>
            <meta name="description" content="Công ty TNHH xây lắp và thương mại Tân Hải Vân với kinh nghiệm gần 20 năm trong ngành trần vách thạch cao sẽ đem đến sự hài lòng cho mọi công trình"/>
            <meta name="keywords" content="thạch cao, vĩnh tường, trần thạch cao, vách thạch cao, tân hải vân, trang chủ, 2021"/>
        </Helmet>
        <div className={classes.toolbar}></div>
        <Button className={classes.icon} style={{color:"#479cc9"}} component={Link} target="_blank" href="https://zalo.me/0904252226"><img src={zalo}/></Button>

         <FormControl className={classes.formControl}>
         <InputLabel id="simple-select-label">Danh Mục Sản Phẩm</InputLabel> 
        <Select fullWidth
                labelId="simple-select-label"
                
                onChange={handleChange}
                value={category}    >
            {categories.map((category) => (
                ((category.name==="Thi công trần")||(category.name==="Thi công vách")) ?
                <MenuItem value={category.name} className={ classes.highlight}>{`${category.name}`}<Icon><WhatshotIcon/></Icon></MenuItem>:
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