import React from 'react'
import {Typography, List, ListItem, ListItemText} from '@material-ui/core'

const Review=({token}) => {
    return(
        <>
        <Typography variant='h6' gutterBottom style={{padding:20}}>
            Xác nhận đơn hàng
        </Typography>
        <List>
            {token.live.line_items.map((item) => (
                <ListItem style={{padding:"10px 0"}} key={item.name}>
                    <ListItemText primary={item.product_name} secondary={`Quantity: ${item.quantity}`}/>
                    <Typography variant='body2'>
                        {item.line_total.formatted_with_code}
                    </Typography>
                    
                </ListItem>
            ))}
            <ListItem style={{padding:"10px 0"}} >
                <ListItemText primary="Total"/>

                <Typography variant='subtitle2' style={{fontWeight:700}}>
                    {token.live.total.formatted_with_code}
                </Typography>
            </ListItem>
        </List>
        </>
    )
}

export default Review