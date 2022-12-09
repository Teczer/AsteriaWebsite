import "./quizzcontroller.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionCard from "./questionCard/QuestionCard";
import QuestionAnswerCard from "./questionAnswerCard/QuestionAnswerCard";
import ReactCardFlip from "react-card-flip";

function Quizzcontroller() {
	class App extends React.Component {
		constructor() {
			super();
			this.state = {
				isFlipped: false,
			};
			this.handleClick = this.handleClick.bind(this);
		}

		handleClick(e) {
			e.preventDefault();
			this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
		}
	}

	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3000/quizzSystemesolaire01")
			.then((res) => {
				console.log(res);
				setPosts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	let test = 0;
	let test2 = 1;
	return (
		<div className="quizzcontroller">
			<div className="question-answer-container" style={{ display: "flex" }}>
				{/* rome-ignore lint/complexity/useOptionalChain: <explanation> */}
				{posts &&
					posts.slice(test, test2).map((post, index) => (
						<>
							<QuestionAnswerCard
								// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								photoAnswer={post.photoAnswer}
								answerName={post.answerName}
								answerExplanation={post.answerExplanation}
							/>
						</>
					))}
			</div>
			<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
				<YOUR_FRONT_CCOMPONENT>
					<div className="question-container">
						{/* rome-ignore lint/complexity/useOptionalChain: <explanation> */}
						{posts &&
							posts.slice(test, test2).map((post, index) => (
								<>
									<QuestionCard
										// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={index}
										photoQuestion={post.photoQuestion}
										questionValue={post.questionValue}
										questionOption1={post.questionOptions[0].questionAnswer}
										questionOption2={post.questionOptions[1].questionAnswer}
										questionOption3={post.questionOptions[2].questionAnswer}
										questionOption4={post.questionOptions[3].questionAnswer}
									/>
								</>
							))}
					</div>
					<button onClick={this.handleClick}>Click to flip</button>
				</YOUR_FRONT_CCOMPONENT>

				<YOUR_BACK_COMPONENT>
					<div
						className="question-answer-container"
						style={{ display: "flex" }}
					>
						{/* rome-ignore lint/complexity/useOptionalChain: <explanation> */}
						{posts &&
							posts.slice(test, test2).map((post, index) => (
								<>
									<QuestionAnswerCard
										// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={index}
										photoAnswer={post.photoAnswer}
										answerName={post.answerName}
										answerExplanation={post.answerExplanation}
									/>
								</>
							))}
					</div>
					<button onClick={this.handleClick}>Click to flip</button>
				</YOUR_BACK_COMPONENT>
			</ReactCardFlip>
		</div>
	);
}

export default Quizzcontroller;
