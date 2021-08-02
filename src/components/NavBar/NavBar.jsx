import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, makeStyles, Hidden, Button, CssBaseline} from '@material-ui/core';
import logoTHV from '../../assests/logoTHV2_cropped.png';
import {AddShoppingCart} from '@material-ui/icons';
import SimpleMenu from './NavItem/NavItem';
import Drawer from './NavItem/NavItemsDrawer';
const navItems=[
    {id: '1', name:"Trang chủ", href:"/" },
    {id: '2', name:"Thi công", href:"/thachcao"},
    {id: '3', name:"Giới Thiệu", href:"/intro"},
    {id: '4', name:"Liên Hệ", href:"/contact"},
    
]
const drawerWidth=0

const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow:1,
    },
    appbar:{
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        width:"100%",
        top:0},
    
    toolbar:{
        width:"100%"
    },
        
       
        

    
    grow:{
        flexGrow: 0,
    },
    
}));

const Appbar = (props) => {
    const classes = useStyles();
    return(
        <AppBar position="sticky" style={{background: '#FDDC00'}} className={classes.appbar}>
            <CssBaseline/>
            <Toolbar  >
    
                <Button href='/'>
               
                    
                    <img src={logoTHV}/>
                    
                </Button>
                <div className={classes.root}></div>
                <Hidden smDown>
                {navItems.map((item) => <SimpleMenu item={item}/>)}
                </Hidden>
                <Hidden mdUp>
                   <Drawer items={navItems} />
                </Hidden>
                <div className={classes.grow}> 
                    <IconButton  aria-label='Show cart items' color='primary' href='/cart'>
                        <Badge badgeContent={props.total} color='secondary'>
                            <AddShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>

            </Toolbar>
        </AppBar>
    )
}

export default Appbar

 {/*[theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,},*/}