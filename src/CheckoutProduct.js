import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
import { motion } from "framer-motion"


 

function CheckoutProduct( {id,image,title,price,rating}) {
  
    const [ {basket}  ,dispatch] = useStateValue();
    const removefromBasket = () => {
        dispatch({type: "REMOVE_FROM_BASKET", id:id}) }

        const variants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }



    return (
       
        <motion.div  className="checkoutProduct"    initial="hidden" animate="visible" variants={variants} whileHover={{ scale: 1.02 }}  >
            <img className="checkoutProduct__image" src ={image} alt="ProductImage"/>
            
            <div className="checkoutProduct__info" >
            <p className="checkoutProduct__title"> {title}</p>
            <p className="checkoutProduct__price"> <small>$</small>
            
            <strong> {price}</strong></p>


            <div className="checkoutProduct__rating" >
            {Array(rating).fill().map(()=> ( <p> 🌟</p>))} 
            
            
            
            </div>
            

            
            <motion.button onClick= {removefromBasket}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}> Rimuovi dal carrello</motion.button>
            
            </div>
        </motion.div>
     
    )
    
}

export default CheckoutProduct;
