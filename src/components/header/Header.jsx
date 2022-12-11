import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
	return (
		<header>
			<a href="/">
				<img
					src="https://res.cloudinary.com/dw3mwclgk/image/upload/v1670528238/asteriaLogo_af3kfh.svg"
					alt="Asteria"
				/>
			</a>
			<div className="nav-input">
				<Link to="/">Accueil</Link>
				<Link to="quizz">
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
				<a href="/login">
					<input type="submit" value="SE DÉCONNECTER" />
				</a>
			</div>
		</header>
	);
};

export default Header;
