import "./AcercaDe.css";

const AcercaDe = () => {
	return (
		<>
			<section className="acerca-de" id="acerca-de">
				<div className="grid">
					<div className="col-1">
						<div className="fotos">
							<img src="./assets/acerca-de-1.jpeg" className="foto" alt="foto de perfil profesional" />
							<img src="./assets/acerca-de-2.png" className="foto" alt="foto de portada de un mundo subrrealista" />
						</div>
					</div>
					<div className="col-2">
						<h4 className="pre-titulo">Acerca de mí</h4>
						<h3 className="titulo">La razón por la que deberías contratarme</h3>
						<div className="resumen">
							<p>
								¡Hola! Soy Teresita Palacios, desarrolladora web y freelancer enfocada en crear soluciones funcionales y
								atractivas. Con una mentalidad curiosa y gran atención al detalle, convierto ideas en sitios claros y
								bien estructurados.
							</p>
							<p>
								Mi compromiso es superar tus expectativas y dar lo mejor en cada proyecto, cuidando cada parte del
								proceso para lograr resultados únicos. Aunque cuento con poca experiencia profesional, estoy lista para
								ayudarte a construir algo que funcione y crezca contigo. ¡Hagámos crecer tus proyectos!
							</p>
						</div>
						<a href="#contacto" className="boton">
							Mándame un mensaje
							<div className="icono">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
									<path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
								</svg>
							</div>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default AcercaDe;
