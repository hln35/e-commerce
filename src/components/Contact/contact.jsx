import React from 'react'
import {Card, CardMedia, CardContent, Typography, Divider, Icon, Link} from '@material-ui/core'
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';
import useStyles from './style_contact';
import Movie from '../../assests/My_Movie_1.mov'
import Movie2 from '../../assests/movie_2.mov'
import {Home, Phone, MailOutline} from '@material-ui/icons'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = withScriptjs(withGoogleMap((props) => 
            
                <GoogleMap
                    
                   
                    defaultZoom={14}
                    defaultCenter={{lat: 20.9956281,
                                    lng: 105.7494161}}
                    style={{height: '300px'}}>
                        
                {props.isMarkerShown && <Marker position={{ lat: 20.9956281, lng: 105.7501162 }} onClick={props.handleOpen}/>}       
                </GoogleMap>
            ))

const MyMap = () => {
    const Toggle = () =>{
        
    } 
    const classes = useStyles()
    return(
    //   <Map 
    //           isMarkerShown
    //           containerElement={<div style={{ height: `400px` }} />}
    //           mapElement={<div style={{ height: `100%` }} />}
    //           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              
    //           loadingElement={<div style={{ height: `100%` }} />}
    //           handleOpen={Toggle}
    //           />
    <main className={classes.root}>
        <video 
            autoPlay
            loop
            muted
            style={{
                position: "absolute",
                width:'100%',
                height:'100%',
                top:'50%',
                left:'50%',
                transform:'translate(-50%,-50%)',
                objectFit:'cover'
            }}
            >
                <source src={Movie2} type="video/mp4"/>
        </video>
     <Card className={classes.main}>
        <CardMedia className={classes.media}>
                    <iframe
                className={classes.media}
                title="map"
                loading="lazy"
                allowfullscreen
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_PUBLIC_KEY}&q=Nhà+phân+phối+thạch+cao+Vĩnh+Tường-Công+Ty+Xây+Lắp+Thương+Mại+Tân+Hải+Vân,+Hữu+Hưng,+Đai+Mỗ,+Nam+Từ+Liêm,+Hà+Nội,+Việt+Nam`}>
                    </iframe>
        </CardMedia>
        <div className={classes.details}>
            <CardContent >
                
                <Typography variant='h4' style={{color:"#FFFFFF"}}>
                    Địa chỉ
                </Typography>
                <Divider style={{backgroundColor:"#FFFFFF"}} />
                <Icon style={{color:"#FFFFFF"}}>
                    <Home/>
                   
                </Icon>
                <Typography variant='h5' style={{color:"#FFFFFF"}}>
                
                130 Hữu Hưng, Nam Từ Liêm, HN
                </Typography>
                <br/>
                <Icon style={{color:"#FFFFFF"}}>
                    <Phone/>
                </Icon>
                <Typography variant='h5' style={{color:"#FFFFFF"}}>
                    0904252226
                </Typography>
                <Typography variant='h5' style={{color:"#FFFFFF"}}>
                    0913581100
                </Typography>
                <br/>
                <Icon style={{color:"#FFFFFF"}}>
                    <MailOutline/>
                </Icon>
                <br/>
                <Typography variant='h5' style={{color:"#FFFFFF"}} component={Link} href="mailto:tanhaivan.ltd@gmail.com">
                    tanhaivan.ltd@gmail.com
                </Typography>
            </CardContent>
        </div>
    </Card> 
    <div class="zalo-chat-widget" data-oaid="579745863508352884" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="350" data-height="420"></div>

    <script src="https://sp.zalo.me/plugins/sdk.js"></script>
    </main>
    )
}


export default MyMap