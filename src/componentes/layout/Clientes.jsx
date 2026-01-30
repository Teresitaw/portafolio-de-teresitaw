import "./Clientes.css";

const Clientes = () => {
	return (
		<>
			<section className="clientes">
				<div className="encabezado">
					<h3 className="titulo">Mis clientes</h3>
					<p className="subtitulo">Estos son los clientes que han confiado en mis servicios como freelance</p>
				</div>
				<div className="logos">
					<img src="./assets/logos/Recharge.svg" alt="Logo de Recharge" className="logo" />
					<img src="./assets/logos/Umbrella.svg" alt="Logo de Umbrella" className="logo" />
					<img src="./assets/logos/Vision.svg" alt="Logo de Vision" className="logo" />
					<img src="./assets/logos/Volume.svg" alt="Logo de Volume" className="logo" />
					<img src="./assets/logos/Waveless.svg" alt="Logo de Waveless" className="logo" />
				</div>
			</section>
		</>
	);
};

export default Clientes;
