import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Select from 'react-select';
import { Hidden } from '@material-ui/core';
import MobileMenu from './MobileMenu';

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthentification = () => {
		if (user) {
			auth.signOut();
		}
	};

	const options = [
		{ value: 'Samsung Galaxy A21s', label: 'Samsung Galaxy A21s' },
		{ value: 'Kenwood Mixer', label: 'Kenwood Mixer' },
		{ value: 'Orologio Samsung XLGD2', label: 'Orologio Samsung XLGD2' },
		{ value: 'Amazon Echo Smart Speaker', label: 'Amazon Echo Smart Speaker' },
		{
			value: 'Borsa da Donna in Tela Gatto Carino',
			label: 'Borsa da Donna in Tela Gatto Carino',
		},
		{
			value: 'Samsung LC49RG90SSUXEN 5120 x 1440',
			label: 'Samsung LC49RG90SSUXEN 5120 x 1440',
		},
	];

	return (
		<header>
			<Hidden xsDown>
				<div className="header">
					<Link to="/">
						<img
							className="header__logo"
							src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
							alt="Amazon"
						/>{' '}
					</Link>

					<div className="header__search">
						<Select
							options={options}
							className="header_searchInput"
							placeholder="Selezionare Oggetti"
						/>
					</div>

					<div className="header__nav">
						<Link to={!user && '/login'} className="header__option">
							<div onClick={handleAuthentification}>
								{user ? null : 'Log In'}
							</div>
						</Link>
						{!user ? null : <div className="header__option"> {user.email}</div>}

						<div className="header__option">Ordini</div>
						<div className="header__option">Prime</div>

						<Link to="/checkout" className="header__optionBasket">
							<ShoppingBasketIcon className="" />
							<span className="header__basketCount">{basket?.length} </span>
						</Link>

						{user ? (
							<div className="header__logout" onClick={handleAuthentification}>
								Log Out{' '}
							</div>
						) : null}
					</div>
				</div>
			</Hidden>
			<Hidden smUp>
				<MobileMenu />
			</Hidden>
		</header>
	);
}

export default Header;
