import Article from "../article/Article";
import CardQuizz from "./cardsQuizz/CardQuizz";
import "./main.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Main() {
	let systemeSolaireProgressionValue =
		localStorage.getItem("quizzSystemesolaire") || 1;
	let galaxiesProgressionValue = localStorage.getItem("quizzGalaxies") || 1;
	let phenomenesObservablesProgressionValue =
		localStorage.getItem("quizzPhenomenesObservables") || 1;
	let astronautesProgressionValue =
		localStorage.getItem("quizzAstronautes") || 1;

	const imagess = [
		[
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675179/images-collections/1-systeme%20solaire/collec1-cardFrontImage-1-soleil_bb36ak.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675181/images-collections/1-systeme%20solaire/collec1-cardFrontImage-2-comet_wnzq4h.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675179/images-collections/1-systeme%20solaire/collec1-cardBackImage-3-neptune_naijmj.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675178/images-collections/1-systeme%20solaire/collec1-cardFrontImage-5-saturn_ncxgiv.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675178/images-collections/1-systeme%20solaire/collec1-cardBackImage-1-soleil_fcgefa.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670677915/images-quizz/PhenomenesObservable/nebuleuse4_3x_hhw3yd.jpg",
		],
		[
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675173/images-collections/2-galaxies/collec2-cardFrontImage-6-voielactee_emeafm.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675171/images-collections/2-galaxies/collec2-cardFrontImage-7-whirlpool_xmk2zn.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675169/images-collections/2-galaxies/collec2-cardFrontImage-8-andromede_gmy2sv.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675170/images-collections/2-galaxies/collec2-cardFrontImage-9-magellan_fawb7z.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675171/images-collections/2-galaxies/collec2-cardFrontImage-10-horsehead_ixzx8i.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670677915/images-quizz/PhenomenesObservable/nebuleuse4_3x_hhw3yd.jpg",
		],
		[
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670677917/images-quizz/PhenomenesObservable/eclipse_w3bgwj.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675177/images-collections/3-phenomenes/collec3-cardBackImage-11-eclipse_hqzlbx.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675177/images-collections/3-phenomenes/collec3-cardBackImage-14-zod-light_txkudi.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675177/images-collections/3-phenomenes/collec3-cardBackImage-13-etoile_jfmy1t.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675175/images-collections/3-phenomenes/collec3-cardFrontImage-12-moon_veahxq.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670677915/images-quizz/PhenomenesObservable/nebuleuse4_3x_hhw3yd.jpg",
		],
		[
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675173/images-collections/4-astronautes/collec4-cardFrontImage-18-leonov_xri8tn.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675177/images-collections/4-astronautes/collec4-cardFrontImage-17-armstrong_zrq05u.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675173/images-collections/4-astronautes/collec4-cardBackImage-17-armstrong_stxghf.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675173/images-collections/4-astronautes/collec4-cardBackImage-20-terechkova_nuti1l.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675174/images-collections/4-astronautes/collec4-cardFrontImage-16-gagarine_nrk3re.jpg",
			"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670677915/images-quizz/PhenomenesObservable/nebuleuse4_3x_hhw3yd.jpg",
		],
	];

	const [niveauSystemesolaire, setNiveauSystemesolaire] = useState(
		`Niveau ${systemeSolaireProgressionValue} / 5`,
	);
	const [niveauGalaxies, setNiveauGalaxies] = useState(
		`Niveau ${galaxiesProgressionValue} / 5`,
	);
	const [niveauPhenomenesObservables, setNiveauPhenomenesObservables] =
		useState(`Niveau ${phenomenesObservablesProgressionValue} / 5`);
	const [niveauAstronautes, setNiveauAstronautes] = useState(
		`Niveau ${astronautesProgressionValue} / 5`,
	);

	const cardContent = [
		{
			src: imagess[0][Number(systemeSolaireProgressionValue) - 1],
			label: "Système Solaire",
			to: `/quizzcontroller/quizzSystemesolaire/${systemeSolaireProgressionValue}`,
			niveau: niveauSystemesolaire,
		},
		{
			src: imagess[1][Number(galaxiesProgressionValue) - 1],
			label: "Galaxies",
			to: "/quizzcontroller/quizzSystemesolaire02",
			niveau: niveauGalaxies,
		},
		{
			src: imagess[2][Number(phenomenesObservablesProgressionValue) - 1],
			label: "Phénomènes Observable",
			to: "/quizzcontroller/systemesolaire",
			niveau: niveauPhenomenesObservables,
		},
		{
			src: imagess[3][Number(astronautesProgressionValue) - 1],
			label: "Astronautes",
			to: "/quizzcontroller/systemesolaire",
			niveau: niveauAstronautes,
		},
	];

	function allSystemeSolaireLevelCompleted() {
		setNiveauSystemesolaire("Vous avez fini !");
	}
	function allGalaxiesLevelCompleted() {
		setNiveauGalaxies("Vous avez fini !");
	}
	function allPhenomenesObservableLevelCompleted() {
		setNiveauPhenomenesObservables("Vous avez fini !");
	}
	function allAstronautesLevelCompleted() {
		setNiveauAstronautes("Vous avez fini !");
	}

	useEffect(() => {
		if (systemeSolaireProgressionValue > 5) {
			allSystemeSolaireLevelCompleted();
		} else {
			setNiveauSystemesolaire(`Niveau ${systemeSolaireProgressionValue} / 5`);
		}
		if (galaxiesProgressionValue > 5) {
			allGalaxiesLevelCompleted();
		} else {
			setNiveauGalaxies(`Niveau ${galaxiesProgressionValue} / 5`);
		}
		if (phenomenesObservablesProgressionValue > 5) {
			allPhenomenesObservableLevelCompleted();
		} else {
			setNiveauPhenomenesObservables(
				`Niveau ${phenomenesObservablesProgressionValue} / 5`,
			);
		}
		if (astronautesProgressionValue > 5) {
			allAstronautesLevelCompleted();
		} else {
			setNiveauAstronautes(`Niveau ${astronautesProgressionValue} / 5`);
		}
	}, []);

	return (
		<>
			<main>
				<h1>
					{" "}
					<i className="fa-solid fa-chevron-left" /> Quizz Espace{" "}
					<i className="fa-solid fa-chevron-right" />
				</h1>
				<ul className="cards-container">
					{cardContent.slice(0, 4).map((value, index) => (
						// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li className="card-container" key={index}>
							<Link to={value.to}>
								<h2>{value.label}</h2>
								<h5>{value.niveau}</h5>
								<CardQuizz src={value.src} label={value.label} />
							</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}

export default Main;
