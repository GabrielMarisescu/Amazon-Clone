import { Button, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';
import { useStateValue } from './StateProvider';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { auth } from './firebase';

function MobileMenu() {
	const [anchorEl, setAnchorEl] = useState();
	const [{ basket, user }, dispatch] = useStateValue();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleCloseAndAuth = () => {
		if (user) {
			auth.signOut();
			setAnchorEl(null);
		}
	};
	return (
		<div className="background">
			<div className="mobile__button">
				<MenuIcon
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleClick}
					fontSize="large"
				/>

				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<Link to="/" className="mobile__basket">
						{' '}
						<MenuItem onClick={handleClose}>Home</MenuItem>{' '}
					</Link>

					{!user?.email ? (
						<Link to="/login" className="mobile__basket">
							{' '}
							<MenuItem onClick={handleCloseAndAuth}>
								{user?.email ? 'Log Off' : 'Log In'}
							</MenuItem>{' '}
						</Link>
					) : (
						<MenuItem onClick={handleCloseAndAuth}>
							{user?.email ? 'Log Off' : 'Log In'}
						</MenuItem>
					)}

					<Link to="/checkout" className="mobile__basket">
						{' '}
						<MenuItem onClick={handleClose}>Ordini</MenuItem>{' '}
					</Link>
				</Menu>
			</div>
			<div className="mobile__basketDiv ">
				{!user ? null : <div className="mobile__font"> {user.email}</div>}
				<div className="mobile__alignment">
					<ShoppingBasketIcon />
					<span className="mobile__spacing">{basket?.length} </span>
				</div>
			</div>
		</div>
	);
}

export default MobileMenu;
