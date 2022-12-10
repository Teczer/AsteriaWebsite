import React from "react";
import "./signup.scss";

function Signup() {
	return (
		<main className="login-screen">
			<section className="loginform-container">
				<div id="login">
					<form className="login-form" /* onSubmit={this.onSubmit} */>
						<span className="fa fa-user" />
						<input
							// rome-ignore lint/a11y/noAutofocus: <explanation>
							autoFocus
							maxLength="25"
							/* onChange={this.handleChange.bind(this, "email")} */
							placeholder="Email"
							type="email"
							/* value={this.state.user.email} */
							required
						/>
						<span className="fa fa-lock" />
						<input
							autoComplete="off"
							maxLength="8"
							/* onChange={this.handleChange.bind(this, "password")} */
							placeholder="Mot de passe"
							type="password"
							/* value={this.state.user.password} */
							required
						/>
						<span className="fa fa-lock" />
						<input
							autoComplete="off"
							maxLength="8"
							/* onChange={this.handleChange.bind(this, "password")} */
							placeholder="Confirmer le mot de passe"
							type="password"
							/* value={this.state.user.password} */
							required
						/>
						<input type="submit" value="S'inscrire" />
					</form>
				</div>
				<div className="notmember-container">
					<p>
						Déjà Membre ? <a href="/login">Connexion</a>{" "}
						<span className="fa fa-arrow-right" />
					</p>
				</div>
			</section>
		</main>
	);
}

export default Signup;
