import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase.js';

function Login() {
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
	const history = useHistory();

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(Email, Password)
			.then((auth) => history.push('/'))
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(Email, Password)
			.then((auth) => console.log(auth))
			.catch((error) => alert(error.message));

		if (auth) {
			history.push('/');
		}
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="AmazonLogo"
				/>
			</Link>

			<div className="login__container">
				<h1> Accedi</h1>

				<form>
					<h5> Email</h5>
					<input
						type="text"
						value={Email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={Password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className="login__signInButton"
						type="submit"
						onClick={signIn}
					>
						{' '}
						Continua
					</button>
				</form>
				<p>Questa è una copia di AMAZON. </p>
				<button onClick={register} className="login__registerButton">
					{' '}
					Crea il tuo account Amazon
				</button>
			</div>
		</div>
	);
}

export default Login;
