import React from "react";
import "./questioncard.scss";

function QuestionCard({
	photoQuestion,
	questionValue,
	questionOption1,
	questionOption2,
	questionOption3,
	questionOption4,
	key,
}) {
	return (
		<>
			<h3>QUESTION</h3>
			<img src={photoQuestion} alt="" />
			<p>{questionValue}</p>
			<div className="button-anwser-container">
				<div className="button-quizz">{questionOption1}</div>
				<div className="button-quizz">{questionOption2}</div>
				<div className="button-quizz">{questionOption3}</div>
				<div className="button-quizz">{questionOption4}</div>
			</div>
		</>
	);
}

export default QuestionCard;
