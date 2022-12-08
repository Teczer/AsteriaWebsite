import "./cardQuizz.scss";

function CardQuizz({ src, label }) {
	return (
		<article>
			<img src={src} alt="soleil" />
			<div className="depliage">
				<p>Détails</p>
				<i className="fa-solid fa-chevron-down" />
			</div>
		</article>
	);
}

export default CardQuizz;
