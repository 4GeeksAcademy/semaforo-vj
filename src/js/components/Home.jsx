import React, { useState } from "react";




const Home = () => {
	const [colorSeleccionado, setColorSeleccionado] = useState("red")
	return (
		<>
			<div className="palo"></div>
			<div className="contenedor">
				<div
					onClick={() => setColorSeleccionado("red")}
					className={"luz red" + (colorSeleccionado === "red" ? " brillo-rojo" : "")}>
				</div>
				<div
					onClick={() => setColorSeleccionado("yellow")}
					className={"luz yellow" + (colorSeleccionado === "yellow" ? " brillo-amarillo" : "")}>
				</div>
				<div
					onClick={() => setColorSeleccionado("green")}
					className={"luz green" + (colorSeleccionado === "green" ? " brillo-verde" : "")}>
				</div>
			</div>
		</>
	);
};

export default Home;