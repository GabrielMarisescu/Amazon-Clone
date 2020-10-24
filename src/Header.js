import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Select from 'react-select'


function Header() {
  const [{ basket, user }, dispatch] = useStateValue()
  const handleAuthentification = () => {
    if (user) { auth.signOut() }
  }




  const options = [
    { value: 'Samsung Galaxy A21s', label: 'Samsung Galaxy A21s' },
    { value: 'Kenwood Mixer', label: 'Kenwood Mixer' },
    { value: 'Orologio Samsung XLGD2', label: 'Orologio Samsung XLGD2' },
    { value: 'Amazon Echo Smart Speaker', label: 'Amazon Echo Smart Speaker'},
    { value: 'Borsa da Donna in Tela Gatto Carino', label: 'Borsa da Donna in Tela Gatto Carino'},
    { value: 'Samsung LC49RG90SSUXEN 5120 x 1440', label: 'Samsung LC49RG90SSUXEN 5120 x 1440'}
  ]
  
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />  </Link>


      <div className="header__search">
      <Select options={options}  className="header_searchInput"  placeholder="Selezionare Oggetti"    />
  

      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentification} className="header__option">
            <span className="header__optionLineOne">Ciao,  {!user ? "Accedi" : user.email} </span>
            <span className="header__optionLineTwo">{user ? "Log Out" : "Log in"}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Resi </span>
          <span className="header__optionLineTwo">e ordini</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Iscriviti a </span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="" />
            <span className="header__optionLineTwo  header__basketCount">{basket?.length} </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
