import React from "react";
import "./questionanswercard.scss";

function QuestionAnswerCard({
	photoAnswer,
	answerName,
	answerExplanation,
	handleNextOption,
	questionAnswerCardDisplay,
	displayFromAnswerToQuestion,
}) {
	return (
		<div
			className="question-answer-container"
			style={{ display: questionAnswerCardDisplay }}
		>
			<h3>RÉPONSE</h3>
			<img src={photoAnswer} alt="" />
			<h4>{answerName}</h4>
			<p>{answerExplanation}</p>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className="button-next-question"
				onClick={() => {
					handleNextOption();
					displayFromAnswerToQuestion();
				}}
			>
				Continuer
			</div>
		</div>
	);
}

export default QuestionAnswerCard;
