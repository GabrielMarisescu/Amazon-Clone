import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					{' '}
					Check-out (<Link to="/checkout">{basket.length} items</Link>){' '}
				</h1>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Indirizzo</h3>
					</div>

					<div className="payment__address">
						<p> {user?.email}</p>
						<p>123 React </p>
						<p>Torino</p>
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Oggetti:</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title"></div>
					<h3>Metodo di pagamento : Carta di Credito</h3>
				</div>
			</div>
		</div>
	);
}

export default Payment;
