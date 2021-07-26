import React from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardMedia,CardContent, Grid, IconButton, Button, Hidden, BottomNavigation, BottomNavigationAction, CssBaseline, Link} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { AddShoppingCart, Phone } from '@material-ui/icons';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import {ImageList, ImageListItem} from '@material-ui/core'
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
    }

    
     
    


    
  }));

const ProductDetail =(props) =>{
    const classes = useStyles();
    const theme = useTheme();
    
    
    const [imageUrl, setImageUrl] = useState(props.product.assets[0].url);
    const [value, setValue] = useState();
    
    const changeImg = (imgUrl) =>{
      setImageUrl(imgUrl)
    }
   

    return(
      <>
              <CssBaseline/>
              <Hidden smDown>
             <Card className={classes.root}>
              
              <CardMedia
               className={classes.cover}
               image={imageUrl}
               title="Live from space album cover"
             />
             

             <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography component="h4" variant="h4">
                   {props.product.name}
                 </Typography>
                 <Typography variant="subtitle1" color="textSecondary">
                   Mac Miller
                 </Typography>
               </CardContent>
               <div className={classes.controls}>
                 <Button style={{background:"#D0011B"}} variant='contained' onClick={() => {props.onAddToCart(props.product.id)}}>
                 <IconButton style={{color:"#FFFFFF"}}>
                  <AddShoppingCart/>
                  </IconButton>
                  <Typography style={{color:"#FFFFFF"}} variant='secondary'  >
                  Them vao gio hang
                  </Typography>
                 </Button >
                 <div className={classes.playIcon}/>
                 <Button style={{border:"1px solid red", background:"#D0011B14"}} variant='contained' href="/contact">
                 <IconButton style={{color:"#D0011B"}}>
                  <Phone/>
                  </IconButton>
                  <Typography style={{color:"#D0011B"}} variant='secondary'  >
                  Lien he
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
                 <Typography variant='h6'>
                 {props.product.name}
                 </Typography>
                 
               </CardContent>
             </Card>
             <Card>
               <CardContent>
                <Typography variant='h6' gutterBottom style={{fontFamily:"Time New Roman"}}>
                 Mo ta san pham
                 </Typography>
                 <Typography variant='h7' dangerouslySetInnerHTML={{ __html:props.product.description}} style={{fontFamily:"Time New Roman"}}>
                 
                 </Typography>
                 </CardContent>
             </Card>
             <BottomNavigation value={value}
                                  onChange={(event, newValue) =>{setValue(newValue)}}
                                  showLabels
                                  className={classes.bottomNavigation}
                                  >
               <BottomNavigationAction label="Them vao gio" icon={<AddShoppingCart/>} style={{backgroundColor:"#FDDC00"}} onClick={() => {props.onAddToCart(props.product.id)}}/>
               <BottomNavigationAction label="Lien he" icon={<Phone/>} href="/contact"/>
             </BottomNavigation>
           </Hidden>
          
           
           </>
            
            
            
        
    )

}

export default ProductDetail

      {/*  <Card className={classes.display}>
            <Grid item xs={12} md={3} sm={4} justify='space-between' className={classes.horizontalDisplay}>
                <CardMedia className={classes.media} image="https://cdn.chec.io/merchants/29897/assets/d3cmK6ejCqUm41GG|he-fineline-plus-2020-mb-on.webp" >

                </CardMedia>
                <div className={classes.details}>
                <CardContent>
                    <Typography>
                    GGGGGGGGGGGGGGGGGGGGG
                    </Typography>
                </CardContent>
                </div>
            </Grid>
            </Card> */}