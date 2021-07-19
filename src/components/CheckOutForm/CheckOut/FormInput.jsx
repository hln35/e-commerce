import React from 'react'
import {Grid, Typography, TextField, Select, MenuItem, Input} from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

const FormInput=({name, required, label}) => {
    const { control } = useFormContext();
    return(
        <Grid item xs={12} sm={6}>
            
            <Controller
            control={control} 
            name={name}     
            fullWidth
            
             render={({ field }) => {
            //     <TextField
            //     label={label}
            //     required
                
                
            // />
            return <input {...field} placeholder={label} />;
            
             }}
            
            />

            
        </Grid>
    )
}
export default FormInput