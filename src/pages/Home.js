import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
	return (
		<div className="home">
			<Navigation />
			<div className="homeContent">
				<div className="content">
					<h1>Jean Scratch</h1>
					<h2>Développeur Front-end</h2>
					<a href="./media/CV.pdf" target="_blank">
						Télécharger CV
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
