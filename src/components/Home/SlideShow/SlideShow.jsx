import React from 'react'
import { useState, useEffect } from 'react'
import { IconButton, Card, CardMedia, Grid } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import useStyles from './slide_style'
{/*import {image1} from '../../../assests/air-bubble.png'
import {image2} from '../../../assests/banner.png'
import {image3} from '../../../assests/external-adapt.png'
import {image4} from '../../../assests/image1.png'*/}

const SlideShow  = () =>{
    const classes = useStyles();
    const image_list = ['https://vinhtuong.com/sites/default/files/2021-03/air-bubble1440x580banner-pc.png',
                        'https://vinhtuong.com/sites/default/files/2020-12/efd9bec82a1fdb41820e.jpg',
                        'https://vinhtuong.com/sites/default/files/2021-03/external-adapt-1440x580.png',
                        'https://vinhtuong.com/sites/default/files/2021-03/banner-sbv-website.jpg']
    const [current, setCurrent] = useState(0);

    const previousImage =() =>{
        const index = current===0 ? image_list.length-1 : current-1;
        setCurrent(index);
    };

    const nextImage =() =>{
        const index = current===image_list.length-1 ? 0 : current+1;
        setCurrent(index);
    };
    
    useEffect(() =>{
        const interval = setInterval(() => nextImage(),3000);
        return(() => clearInterval(interval))
    })

    return(
        <main className={classes.root}>
        
        <Card >
            
            <Grid className={classes.root}>
                <CardMedia className={classes.media} image={image_list[current]} title={"Thạch cao"}>
                
                </CardMedia>
            </Grid>
           
        </Card>
        </main>
  
    )
}
export default SlideShow