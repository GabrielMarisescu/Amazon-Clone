import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://i2.wp.com/syrus.blog/wp-content/uploads/2020/03/amazon.png?resize=1140%2C537&ssl=1"
					alt="Amazon Banner"
				/>
			</div>
			<div className="home__row">
				<Product
					title="Samsung Galaxy A21s"
					price={99.99}
					image="https://images-na.ssl-images-amazon.com/images/I/71DkgRbnuzL._AC_SL1500_.jpg"
					rating={5}
				/>
				<Product
					id="49538094"
					title="Kenwood Mixer"
					price={239.0}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="4903850"
					title="Orologio Samsung XLGD2"
					price={199.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
				<Product
					id="23445930"
					title="Amazon Echo Smart Speaker"
					price={98.99}
					rating={5}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
				/>
				<Product
					id="3254354345"
					title="Borsa da Donna in Tela Gatto Carino"
					price={598.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/61C0niZX3sL._AC_SL1001_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="90829332"
					title="Samsung LC49RG90SSUXEN 5120 x 1440"
					price={1094.98}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
