import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./quizzresult.scss";

function QuizzResult({ CorrectAns }) {
	const params = useParams();
	function saveProgression() {
		const currentProgression = localStorage.getItem(params.quizzType);
		localStorage.setItem(params.quizzType, Number(params.quizzProgression) + 1);
	}
	useEffect(() => {
		saveProgression();
	}, []);
	return (
		<div className="quizzresult-container">
			<div className="total-result-wrapper">
				<h1>{CorrectAns} / 3</h1>
				<h2>bonnes réponses</h2>
			</div>
			<div className="button-to-home">
				<Link to="/">Retourner à l'accueil</Link>
			</div>
			<div className="button-to-home">
				<a
					href={`/quizzcontroller/${params.quizzType}/${
						Number(params.quizzProgression) + 1
					}`}
				>
					Niveau suivant
				</a>
			</div>
		</div>
	);
}

export default QuizzResult;
