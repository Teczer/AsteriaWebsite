import Article from "./components/article/Article";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Routes, Route, useLocation } from "react-router-dom";
import "./scss/app.scss";
import Notfound from "./components/notfound/Notfound";
import Homepage from "./components/homepage/Homepage";
import Quizzcontroller from "./components/quizzcontroller/Quizzcontroller";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App() {
	const location = useLocation();
	const isQuizzControllerScreen = location.pathname.includes("quizzcontroller");
	const isLoginScreen = location.pathname.includes("login");
	const isSignUpScreen = location.pathname.includes("signup");
	return (
		<>
			{/* rome-ignore lint/complexity/useSimplifiedLogicExpression: <explanation> */}
			{!isQuizzControllerScreen && !isLoginScreen && !isSignUpScreen && (
				<Header />
			)}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<Notfound />} />
				<Route path="/quizz" element={<Main />} />
				<Route path="/news" element={<Article />} />
				<Route
					path="/quizzcontroller/:quizzType/:quizzProgression"
					element={<Quizzcontroller />}
				/>
			</Routes>
		</>
	);
}

export default App;
