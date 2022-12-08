import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
	return (
		<header>
			<a href="/">
				<img src="/src/assets/icons/asteriaLogo.svg" alt="Asteria" />
			</a>
			<div className="nav-input">
				<Link to="/">Accueil</Link>
				<Link to="/quizz">
					Quizz <i className="fa-solid fa-chevron-down" />
				</Link>
				<Link to="news">Actualités</Link>
				{/* 				<a href="">Vidéos</a>
				<a href="">
					Gallerie <i className="fa-solid fa-chevron-down" />
				</a>
				<a href="">
					Magasin <i className="fa-solid fa-chevron-down" />
				</a> */}
			</div>
			<div className="authentification-wrapper">
				<button className="sign-up">Sign Up</button>
				<button className="sign-in">Sign In</button>
			</div>
		</header>
	);
};

export default Header;
