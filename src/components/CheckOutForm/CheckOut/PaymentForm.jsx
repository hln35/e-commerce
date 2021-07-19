import React from 'react'
import { Divider, Typography, Button } from '@material-ui/core'
import {Elements,CardElement, useStripe, useElements, ElementsConsumer} from '@stripe/react-stripe-js'
import { loadStripe  } from '@stripe/stripe-js'
import Review from './Review'
import { commerce_1 } from '../../../lib/commerce'
const PaymentForm = ({shippingData, token, onCaptureCheckout, nextStep, backStep}) => {
    console.log(shippingData)
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        if (!elements||!stripe){
            return
        }
        const cardElement = elements.getElement(CardElement);
        const {error, paymentMethod} = await stripe.createPaymentMethod({type:'card', card:cardElement});
        if(error){
            console.log(error)
        }
        else{
            const lineItemsList = {}
            token.live.line_items.map((line_item) =>{
              lineItemsList[line_item.id] = {quantity: line_item.quantity}
            })
            const orderData = {
                line_items : lineItemsList,
                customer : { firstname: shippingData.Firstname, lastname: shippingData.Surname, email: shippingData.Email },
                shipping : {name: `${shippingData.Firstname} ${shippingData.Surname}`, street: shippingData.Address,town_city: shippingData.City, county_state: shippingData.subDivision, country: "VN"},
                fulfillment: {shipping_method: shippingData.option},
                payment : {gateway: 'stripe', 
                           stripe: {
                               payment_method_id: paymentMethod.id}  }

            }
            onCaptureCheckout(token.id, orderData)
            console.log(orderData)
            console.log(lineItemsList)
            nextStep()
        }
    }
    return(
        <>
        
        <Review token={token}/>
        <Divider/>
        <Typography variant='h6' gutterBottom style={{margin:"20px 0"}}>Payment method</Typography>
        <br/>
        <Elements stripe={stripePromise}>
            <ElementsConsumer>
                {({elements, stripe}) => (
                    <form onSubmit={(e) => handleSubmit(e, elements, stripe)} >
                        <CardElement hidePostalCode={true}/>
                        <br/>
                        <div style={{display:'space-between'}}>
                            <Button variant='outlined' onClick={backStep} >Back</Button>
                            <Button variant='contained' color='primary' disabled={!stripe} type='submit' >Pay </Button>
                        </div>
                    </form>
                )}
            </ElementsConsumer>
        </Elements>
        
        </>
    )
}

export default PaymentForm