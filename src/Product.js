import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";
import {motion} from "framer-motion";






function Product( {id,title, image , price, rating}) {
  const [ { basket },dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({ type:"ADD_TO_BASKET",  item:  {id:id,title:title,image:image,price:price,rating:rating} })  
  }
  

  
  return (
    <div className="product">
      <div className="product__info">
        <p> {title}</p>
        <p className="product__price">
          <small>€ </small>
  <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_,i)=> ( <p> 🌟</p>))}
        </div>
      </div>
      <motion.img whileHover={{ scale: 1.04 }}
        src= {image}
        alt="AA"
      />
      <motion.button onClick= {addToBasket}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}> Aggiungi al carrello</motion.button>
    </div>
  );
}

export default Product;
