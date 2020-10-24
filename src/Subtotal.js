import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
import {motion} from "framer-motion"

function Subtotal() {
  const history =useHistory();
  const [{basket},dispatch] = useStateValue()
    return (
        <div className="subtotal">
             <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
        Totale ({basket.length} oggetti): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />Questo ordine contiene un regalo
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€ "} />

        <motion.button onClick={e =>  history.push("/payment")}  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}> Procedere al Check-out</motion.button>
        
        </div>

    )
}

export default Subtotal;
