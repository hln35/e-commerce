import React from 'react'
import { Grid, Typography,Button,Link, TextField, InputLabel, Select, MenuItem } from '@material-ui/core'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import FormInput from './FormInput'
import { useState, useEffect } from 'react'
import { commerce_1 } from '../../../lib/commerce'
const AddressForm=({next, token}) => {
    const methods = useForm();
    const [subDivision, setSubDivision] = useState([])
    const [subDivisions, setSubDivisions] = useState('')
    const [options, setOptions] = useState()
    const [option, setOption] = useState()
    const provinceList = Object.entries(subDivisions).map(([subdivisionID, subdivisionName]) => ({id: subdivisionID, name: subdivisionName}))
    const country = "VN"

    const subdivisionsList = async () =>{
        const subdivisions = await commerce_1.services.localeListSubdivisions('VN')
        setSubDivisions(subdivisions.subdivisions)
        setSubDivision(Object.keys(subDivisions)[0])
        console.log(subdivisions.subdivisions)
        console.log(subDivision)


    }

    const fetchShippingOption = async (tokenID, country, region = null) => {
        const options = await commerce_1.checkout.getShippingOptions(tokenID, {country , region })
        setOptions(options)
        setOption(options[0].id)
        console.log(options)
    }

    useEffect (() => {
        
        subdivisionsList()
        
    },[])

    useEffect (() =>{
        if(subDivision){
            fetchShippingOption(token.id,country,subDivision)
        }
    },[subDivision])
    

    return(
        <>
        <Typography variant='h6' gutterBottom>
           Địa chỉ
        </Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data)=> next({...data, option, subDivision}))} >
                <Grid container spacing={3}>
                    <FormInput name='Surname' label='Họ' required/>
                    <FormInput name='Firstname' label='Tên' required/>
                    <FormInput name='Address' label='Địa chỉ' required/>
                    <FormInput name='City' label='Tỉnh/Thành phố' required/>
                    <FormInput name='PhoneNumber' label='Số điện thoại' required/>
                    <FormInput name='Email' label='Email' required/>
                    <Grid>
                    <InputLabel>Tỉnh/Thành phố</InputLabel>
                    <Select value={subDivisions.subDivision} fullWidth onChange={(e) => setSubDivision(e.target.value)}>
                        {provinceList.map((province) => (
                        
                        <MenuItem key={province.id} value={province.id} >{province.name}</MenuItem>

                        ))} 
                    </Select>
                    </Grid>
                    {/* <Grid>
                    <InputLabel>Shipping Options</InputLabel>
                    <Select value={option} fullWidth onChange={(e) => setOption(e.target.value)}>
                        {options.map((option) => (
                        
                        <MenuItem key={option.id} value={option.id} >{option}</MenuItem>

                        ))} 
                    </Select>
                    </Grid> */}
                    
                </Grid>
                <br/>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Button component={Link} href='/cart' variant='outlined'>
                            Trở lại giỏ hàng
                        </Button>
                        <Button type='submit' variant='contained' color='primary'>
                            Tiếp tục
                        </Button>
                    </div>
            </form>
            {/*<form onSubmit={handleSubmit((data) => console.log(data))}>
            <input {...register("firstName", { required: true })} placeholder="First name" />
            <FormInput name='Tên' label='Tên' required/>
        <br/>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Button component={Link} to='/cart' variant='outlined'>
                            Back to cart
                        </Button>
                        <Button type='submit' variant='contained' color='primary'>
                            Next
                        </Button>
                    </div>
        </form>*/}
        </FormProvider>
        </>
    )
}

export default AddressForm