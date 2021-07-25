import React, { useState } from 'react'
import { makeStyles, Typography, Menu, MenuItem, Button, List, ListItem, SwipeableDrawer, ListItemText, Link} from '@material-ui/core'
import { Dehaze } from '@material-ui/icons';

const useStyles =makeStyles((theme)=>({
    popover: {PointerEvent:'none'},
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
      },

}));

const Drawer = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const handleClick =(event) =>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose= () => {
        setAnchorEl(null);
    };
    return(
        <div>
        <Button aria-controls="menu" onClick={handleClick} >
            <Dehaze/>
        </Button>
        <SwipeableDrawer id='menu' 
              open={open}
              getContentAnchorEl={null}
              anchor='right'
              anchorOrigin={{vertical:'bottom', horizontal:'center'}}
              onClose={handleClose}
              keepMounted
              className={classes.popover}>
            <List>
                {props.items.map((item) => 
                <ListItem button key={item.name} component={Link} href={item.href}>
                    <ListItemText primary={item.name}/>
                </ListItem>)}
            </List>
           
        </SwipeableDrawer>
        </div>
    )
}

export default Drawer