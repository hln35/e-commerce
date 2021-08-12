import React from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardMedia,CardContent, Grid, IconButton, Button, Hidden, BottomNavigation, BottomNavigationAction, CssBaseline, Link, Select, MenuItem, FormControl, InputLabel} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { AddShoppingCart, Phone } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import {ImageList, ImageListItem} from '@material-ui/core'
import { Helmet } from 'react-helmet';
import zalo from '../../../assests/zalo.png'
import { commerce_1 } from '../../../lib/commerce';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      paddingLeft:'10%',
      paddingTop:'5%',
      
      
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft:'5%'
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 500,
      height:300
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    list_images:{
      paddingLeft:'10%',
      
    },
    smallSpace:{
      width: 10
    }, 
    smallImage:{
      width:120,
      height:120,
      justifyContent:'center',
      "&:hover":{transform:"scale3d(1.05, 1.05, 1)"}
      
      
    },
    cardHovered: {
      transform: "scale3d(1.05, 1.05, 1)"
    },
    rootPhone:{
      
      maxWidth:'100%'
    },
    mediaPhone:{
      paddingTop:'50%',
      height:0
    },
    space:{
      height: 20
    },
    bottomNavigation:{
      bottom:"0%",
      position: "fixed", 
      justifyContent:"space-between",
      width:"100%"
    }, 
    icon:{
      position:"fixed",
      transform:"scale(0.15,0.15)",
      bottom:"10%",
      right:-110,  
      zIndex:"1",
      animation: `$shake 300ms ${theme.transitions.easing.easeInOut}`,
      animationIterationCount: "infinite",
  },
  "@keyframes shake":{
    "0%": { transform: "translate(1px, 1px) rotate(0deg) scale(0.15,0.15)" },
    "20%": { transform: "translate(-3px, 0px) rotate(1deg) scale(0.15,0.15)" },
    "40%": { transform: "translate(1px, -1px) rotate(1deg) scale(0.15,0.15)" },
    "60%": { transform: "translate(-3px, 1px) rotate(0deg) scale(0.15,0.15)" },
    "80%": { transform: "translate(-1px, -1px) rotate(1deg) scale(0.15,0.15)" },
    "100%": { transform: "translate(1px, -2px) rotate(-1deg) scale(0.15,0.15)"}
  },

  addItem:{
    backgroundColor:"#D0011B"
  },
  addItemDisabled:{
    backgroundColor:"#bd9997"
  },
  addItemMobile:{
    backgroundColor:"#FDDC00"
  },
  addItemMobileDisabled:{
    backgroundColor:"#fffdf0"
  }


    
     
    


    
  }));

const ProductDetail =(props) =>{
    const classes = useStyles();
    const theme = useTheme();
    
    
    const [imageUrl, setImageUrl] = useState(props.product.assets[0].url);
    const [value, setValue] = useState();
    const [variant, setVariant] = useState();
    const [variants, setVariants] = useState();
    const handleChange = (e) => {
      setVariant(e.target.value)
    }
    const changeImg = (imgUrl) =>{
      setImageUrl(imgUrl)
    }
    const fetchVariants = ()=>{
      setVariants(props.product.variant_groups[0].options)
    }
    const fetchVariant = () => {
      setVariant(variants[0])
    }
    useEffect(()=>{
      if(props.product.variant_groups.length){fetchVariants()}
    },[])
    useEffect(() => {
      if(variants){fetchVariant()}
    },[variants])
    console.log(variant)
    console.log(variants)

    const PriceHasVariants = () => (
      <Typography variant="h6" color="textPrimary">
       {props.product.is.pay_what_you_want ? "Liên hệ để biết giá sản phẩm hiện tại" : variant && variant.price.formatted_with_code}
       </Typography>
      
    )
    const PriceNoVariants = () => (
      <Typography variant="h6" color="textPrimary">
      {props.product.is.pay_what_you_want ? "Liên hệ để biết giá sản phẩm hiện tại" : props.product.price.formatted_with_code}
      </Typography>
      
    )

    return(
      <>
               <Helmet>
                <title>
                   {props.product.name} | Công ty Tân Hải Vân
                </title>
                <meta name="description" content="Hệ thống mua hàng online của công ty Tân Hải Vân"/>
                <meta name="keywords" content="tân hải vân, hàng chính hãng, thạch cao, vĩnh tường, trần thạch cao, vách thạch cao"/>
            </Helmet>
            <Button className={classes.icon} style={{color:"#479cc9"}} component={Link} target="_blank" href="https://zalo.me/0904252226"><img src={zalo}/></Button>

              <CssBaseline/>
              <Hidden smDown>
             <Card className={classes.root}>
              
              <CardMedia
               className={classes.cover}
               image={imageUrl}
               title="thạch cao Tân Hải Vân"
               alt="thạch cao Tân Hải Vân"
             />
             

             <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography component="h4" variant="h4">
                   {props.product.name}
                 </Typography>
                 <Typography variant="subtitle1" color="textSecondary">
                   {props.product.is.pay_what_you_want ? "Liên hệ để biết giá sản phẩm hiện tại" : props.product.price.formatted_with_code}
                 </Typography> 
               </CardContent>
               <div className={classes.controls}>
                 <Button className={props.product.is.pay_what_you_want ? classes.addItemDisabled : classes.addItem} variant='contained' onClick={() => {props.onAddToCart(props.product.id)}} disabled={props.product.is.pay_what_you_want}>
                 <IconButton style={{color:"#FFFFFF"}}>
                  <AddShoppingCart/>
                  </IconButton>
                  <Typography style={{color:"#FFFFFF"}} variant='secondary'  >
                  Thêm vào giỏ hàng
                  </Typography>
                 </Button >
                 <div className={classes.playIcon}/>
                 <Button style={{border:"1px solid red", background:"#D0011B14"}} variant='contained' href="/contact">
                 <IconButton style={{color:"#D0011B"}}>
                  <Phone/>
                  </IconButton>
                  <Typography style={{color:"#D0011B"}} variant='secondary'  >
                  Liên hệ
                  </Typography>
                 </Button>
                 
               </div>
               
             </div>
             
           </Card>
           <ImageList sx={{ width: 400, height: 150 }} cols={8} rowHeight={150} className={classes.list_images} spacing={-20} > 
                {props.product.assets.map((item) =>(
                  
                  <ImageListItem style={{ borderRadius:"5px"}} 
                                  onClick={()=>{changeImg(item.url)}} href='/#'>
                     <Button style={{boxShadow:'none'}}>
                     <img src={item.url} className={classes.smallImage} 
                     style={Boolean(item.url===imageUrl) ? {backgroundColor:"#f0f0f0"} : {}}
                     />
                     
                     </Button>
                  </ImageListItem>
                  
                ))}
            </ImageList>
           <Card className={classes.root}>
             <div>
                 <Typography variant='h5' gutterBottom>
                 MÔ TẢ SẢN PHẨM
                 </Typography>
                 <Typography variant='h6' dangerouslySetInnerHTML={{ __html: props.product.description}}>
                 </Typography>
               </div>
           </Card>
           </Hidden>
           <Hidden mdUp>
             <div className={classes.space}/>
             <Carousel >
             {props.product.assets.map((asset) => (
             <Card className={classes.rootPhone}>
               
                  <CardMedia image={asset.url} className={classes.mediaPhone}>
                  </CardMedia>

             </Card>))}
             </Carousel>
             <Card>
               <CardContent>
                 <Typography variant='h4'>
                 {props.product.name}
                 </Typography>
                {props.product.variant_groups.length ? <FormControl fullWidth style={{backgroundColor:"#FDDC00"}}>
                    <InputLabel id="simple-select-label" style={{fontSize:22}} alignItems="center">Chọn Sản Phẩm</InputLabel> 
                 <Select id="simple-select-label"
                          fullWidth
                          value={variant}
                          onChange={handleChange}
                         >
                   {props.product.variant_groups.length && props.product.variant_groups[0].options.map((option) => (
                      <MenuItem value={option} variant="h6">{option.name}</MenuItem>
    ))}
                 </Select>
                 </FormControl> : <Typography/>}
                 <br/>
                 
                   {props.product.variant_groups.length ? <PriceHasVariants/> : <PriceNoVariants/>}
                   {/* props.product.variant_groups.length ?{ props.product.is.pay_what_you_want ? "Liên hệ để biết giá sản phẩm hiện tại" : props.product.price.formatted_with_code} */}
                 
               </CardContent>
             </Card>
             <Card>
               <CardContent>
                <Typography variant='h5' gutterBottom style={{fontFamily:"Time New Roman"}}>
                 Mô tả sản phẩm
                 </Typography>
                 <Typography variant='h6' dangerouslySetInnerHTML={{ __html:props.product.description}} style={{fontFamily:"Time New Roman"}}>
                 
                 </Typography>
                 </CardContent>
             </Card>
             <BottomNavigation value={value}
                                  onChange={(event, newValue) =>{setValue(newValue)}}
                                  showLabels
                                  className={classes.bottomNavigation}
                                  >
               <BottomNavigationAction label="Thêm vào giỏ" component={Button} icon={<AddShoppingCart />} className={props.product.is.pay_what_you_want ? classes.addItemMobileDisabled : classes.addItemMobile} onClick={() => {props.onAddToCart(props.product.id)}} disabled={props.product.is.pay_what_you_want}/>
               <BottomNavigationAction label="Liên hệ" icon={<Phone/>} href="/contact"/>
             </BottomNavigation>
           </Hidden>
           </>
    )

}

export default ProductDetail

      