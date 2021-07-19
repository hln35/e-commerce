import React from "react"
import { Stepper, Step, StepLabel, Typography, Button, Paper, CssBaseline } from "@material-ui/core"
import { useState, useEffect } from "react"
import useStyles from "./CheckOut_style"
import AddressForm from "./AddressForm"
import PaymentForm from "./PaymentForm"
import Confirmation from "./Confirmation"
import { commerce_1 } from "../../../lib/commerce"

const CheckOut =({cart, order, error, onCaptureCheckout}) => {
    const[activeStep, setActiveStep] = useState(0);
    const[token,setToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    
    const steps = ["Shipping address", "Payment details"];
    const classes = useStyles();
    useEffect(() =>{
        const generateToken = async () => {
            try{
              const token = await commerce_1.checkout.generateToken(cart.id, {type:"cart"})
              console.log(token)
              setToken(token)
            }
            catch(error){
                
            }     
        }
        generateToken()             
        
    },[cart]);

    

    const stepForward = () => {
        setActiveStep((previousStep) => (previousStep+1))
    };

    const stepBackward = () => {
        setActiveStep((previousStep) => (previousStep-1))
    };

    const next = (data) => {
        setShippingData(data)
        
        stepForward()
        
    };

    const Form = () => 
        
        !activeStep ?  <AddressForm next={next} token={token}/> : <PaymentForm shippingData={shippingData} token={token} onCaptureCheckout={onCaptureCheckout} nextStep={stepForward} backStep={stepBackward}/>
        
    return(
        <>
            <main className={classes.layout}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>
                        Check Out Form
                    </Typography>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {
                            steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))
                        }
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation/> : token && <Form/>}
                    
                </Paper>
            </main>

        </>

    )
}
export default CheckOut