import Article from "./components/article/Article";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Notfound from "./components/notfound/Notfound";
import Homepage from "./components/homepage/Homepage";
import Quizzcontroller from "./components/quizzcontroller/Quizzcontroller";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="*" element={<Notfound />} />
				<Route path="/quizz" element={<Main />} />
				<Route path="/news" element={<Article />} />
				<Route path="/quizzcontroller" element={<Quizzcontroller />} />
			</Routes>
		</>
	);
}

export default App;
