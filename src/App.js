import React from 'react'
import Products from './components/Products/products'
import Appbar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Intro from './components/Home/Intro/Intro'
import Cart from './components/Products/Cart/Cart'
import ProductDetail from './components/Products/Product/productDetails'
import CheckOut from './components/CheckOutForm/CheckOut/CheckOut'
import MyMap from './components/Contact/contact'
import IntroGypsum from './components/Home/Intro/intro_gypsum'
import { commerce_1 } from './lib/commerce'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'




const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [product, setProduct] = useState();
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState()
  const [categories, setCategories] = useState({});

  const fetchProducts  = async () =>{
    const {data} = await commerce_1.products.list();
    setProducts(data);
  };

  
  const fetchCart = async () =>{
    const cart = await commerce_1.cart.retrieve();
    setCartItems(cart);
  };

  const fetchCategories = async () =>{
    const {data} = await commerce_1.categories.list();
    setCategories(data);
  };

  

  const handleAddToCart = async (productId, quantity) =>{
    const respose = await commerce_1.cart.add(productId, quantity)
    setCartItems(respose.cart);
    
  };

  const handleUpdateCart = async (productId, quantity) =>{
    const updatedCart = await commerce_1.cart.update(productId, {quantity})
    setCartItems(updatedCart.cart);
    
  };

  const removeItem = async (productId) =>{
    const response = await commerce_1.cart.remove(productId)
    setCartItems(response.cart)
  };

  const handleEmpty = async () =>{
    const response = await commerce_1.cart.empty()
    setCartItems(response.cart)
  };

   const getProductId = async(productId) =>{
  {/* const productIdHref = `/${productId}`*/}
    setProduct(productId)
  };

  const cartRefresh = async () => {
    setCartItems(await commerce_1.cart.refresh())
  }

  const handleCaptureCheckout = async(token, newOrder) => {
    try{
    const incomingOrder = await commerce_1.checkout.capture(token, newOrder)
    setOrder(incomingOrder)
    cartRefresh()

  }
    catch(error) {
      setErrorMessage(error.data.error.message)
    }
  }


  useEffect(() =>{
    fetchProducts();
    fetchCart();
    
  }, []);
  useEffect(() =>{
    fetchCategories();
  }, []);

  console.log(categories)

 
   
  
  return(
    <div>
    
      <Router>
        <Appbar total={cartItems.total_items}/>
        <Switch>
          
          
          <Route path='/intro'>
            <Intro/>
          </Route>
          <Route path='/cart'>
            <Cart cart={cartItems}  onHandleAdd={handleUpdateCart} onRemoveItem={removeItem} onEmpty={handleEmpty}/>
          </Route>
          <Route path='/test'>
            <ProductDetail/>
          </Route>
          {/*<Route path= {`/${product.id}`}>
            <ProductDetail product={product}/>
          </Route>*/}
          {
            products.map((productDetail) =>(
              <Route path={`/${productDetail.id}`}>
                <ProductDetail product={productDetail} onAddToCart={handleAddToCart} />
              </Route>
            ))
          }
          <Route path='/checkout'>
            <CheckOut cart={cartItems} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>
          </Route>
          <Route path="/contact">
            <MyMap
             />
          </Route>
          <Route path="/thachcao" >
            <IntroGypsum products={products}
             />
          </Route>
          <Route path="/thachcaodep" >
            <IntroGypsum products={products}
             />
          </Route>

          <Route path="/">
            <Home/>
            
            <Products products={products} onHandleAddToCart={handleAddToCart} onChooseProduct={getProductId} categories={categories}/>
            

          </Route>
          
        </Switch>
      </Router>
      
    </div>
  )
} 
export default App