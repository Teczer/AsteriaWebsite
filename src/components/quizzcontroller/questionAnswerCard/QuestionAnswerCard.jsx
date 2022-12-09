import React from "react";
import "./questionanswercard.scss";

function QuestionAnswerCard({
	photoAnswer,
	answerName,
	answerExplanation,
	key,
}) {
	return (
		<>
			<h3>RÉPONSE</h3>
			<img src={photoAnswer} alt="" />
			<h4>{answerName}</h4>
			<p>{answerExplanation}</p>
			<div className="button-next-question">Continuer</div>
		</>
	);
}

export default QuestionAnswerCard;
