import Article from "../article/Article";
import CardQuizz from "./cardsQuizz/CardQuizz";
import "./main.scss";
import Header from "../header/Header";

function Main() {
	const cardContent = [
		{
			src: "https://res.cloudinary.com/dw3mwclgk/image/upload/v1670491400/img/collec1-cardFrontImage-1-soleil_nylhpx.jpg",
			label: "Système Solaire",
		},
		{
			src: "https://res.cloudinary.com/dw3mwclgk/image/upload/v1670491401/img/collec2-cardFrontImage-6-voielactee_zwyzsb.jpg",
			label: "Galaxies",
		},
		{
			src: "https://res.cloudinary.com/dw3mwclgk/image/upload/v1670491401/img/collec3-cardFrontImage-12-moon_yiuwnn.jpg",
			label: "Phénomènes Observable",
		},
		{
			src: "https://res.cloudinary.com/dw3mwclgk/image/upload/v1670491401/img/collec2-cardFrontImage-6-voielactee_zwyzsb.jpg",
			label: "Galaxiessss",
		},
	];
	return (
		<>
			<Header />
			<main>
				<h1>
					{" "}
					<i class="fa-solid fa-chevron-left" /> Quizz Espace{" "}
					<i class="fa-solid fa-chevron-right" />
				</h1>
				<ul className="cards-container">
					{cardContent.slice(0, 3).map((value, index) => (
						// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li className="card-container" key={index}>
							<h2>{value.label}</h2>
							<p>Niveau 1 / 5</p>
							<CardQuizz src={value.src} label={value.label} />
						</li>
					))}
				</ul>
				<i id="quizztoright" class="fa-solid fa-chevron-right" />
				<i id="quizztoleft" class="fa-solid fa-chevron-left" />
			</main>
		</>
	);
}

export default Main;
