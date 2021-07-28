import React from 'react';
import { makeStyles, Typography, Menu, MenuItem, Button } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    popover: {PointerEvent:'none'},
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
      },

}));

const SimpleMenu = (props) =>{
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose =()=>{
        setAnchorEl(null);
    };
    return(
        <div>
            <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick} href={props.item.href}>
                <Typography variant='body2' className={classes.title}>{props.item.name}</Typography>
            </Button>
            
            {/* <Menu id="menu" anchorEl={anchorEl} 
                getContentAnchorEl={null}
                className={classes.popover} 
                anchorOrigin={{vertical:'bottom', horizontal:'center'}} 
                transformOrigin={{vertical:'top', horizontal:'center'}} 
                onClose={handleClose} 
                open={open} 
                keepMounted>
                
            </Menu> */}
        </div>
    )
};

export default SimpleMenu

