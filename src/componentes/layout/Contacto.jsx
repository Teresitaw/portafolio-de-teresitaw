import { useState } from "react";
import "./Contacto.css";

const Contacto = () => {
	const [nombre, setNombre] = useState("");
	const [correo, setCorreo] = useState("");
	const [mensaje, setMensaje] = useState("");
	const [error, setError] = useState(null);

	const regEX = {
		nombre: /^[a-zA-Z\s-]{2,}$/,
		correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		mensaje: /^.{1,}$/,
	};

	// para el valor del imput, puede ser el valor que tu quieres, pero lo normal es ponerle handleImput
	const handleImput = (e, input) => {
		//evento ocurrido, nombre con el que quiera identificar el sitio que va a cambiar de valor con el evento
		if (input === "nombre") {
			setNombre(e.target.value);
		}
		if (input === "correo") {
			setCorreo(e.target.value);
		}
		if (input === "mensaje") {
			setMensaje(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const nombreValido = regEX.nombre.test(nombre);
		//test método utilizado sobre expresiones regulares para comprobar si el nombre es válido
		const correoValido = regEX.correo.test(correo);
		const mensajeValido = regEX.mensaje.test(mensaje);

		if (!nombreValido) {
			setError("Por favor ingresa un nombre válido");
			return; //si el nombre no es válido, regresas y cortas la ejecución del código
		}

		if (!correoValido) {
			setError("Por favor ingresa un correo válido");
			return;
		}

		if (!mensajeValido) {
			setError("Por favor ingresa un mensaje válido");
			return; //este no estoy segura si es necesario
		}

		if (nombreValido && correoValido && mensajeValido) {
			setError(null);

			e.target.submit();
		}
	};

	return (
		<>
			<section className="contacto" id="contacto">
				<div className="encabezado">
					<h3 className="titulo">Construyamos tu proyecto</h3>
					<p className="subtitulo">Escríbeme para hacer realidad las ideas que tengas para tu proyecto</p>
				</div>
				<form action="https://formspree.io/f/xykjpgqy" method="post" className="formulario" onSubmit={handleSubmit}>
					<div className="grupo-formulario">
						<label htmlFor="nombre">Nombre</label>
						<input
							type="text"
							name="nombre"
							id="nombre"
							placeholder="Escribe tu nombre"
							value={nombre}
							onChange={(e) => handleImput(e, "nombre")}
						/>
					</div>
					<div className="grupo-formulario">
						<label htmlFor="correo">Correo</label>
						<input
							type="email"
							name="correo"
							id="correo"
							placeholder="correo@correo.com"
							value={correo}
							onChange={(e) => handleImput(e, "correo")}
						/>
					</div>
					<div className="grupo-formulario mensaje">
						<label htmlFor="mensaje">Mensaje</label>
						<textarea
							type="text"
							name="mensaje"
							id="mensaje"
							placeholder="Escribe tu mensaje"
							value={mensaje}
							onChange={(e) => handleImput(e, "mensaje")}
						></textarea>
					</div>
					{error && (
						<div className="grupo-formulario error">
							<p>{error}</p>
						</div>
					)}

					<div className="grupo-formulario enviar">
						<div className="btn">
							<button type="submit" className="boton">
								Mandar mensaje
								<div className="icono">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
									</svg>
								</div>
							</button>
						</div>
					</div>
				</form>
			</section>
		</>
	);
};

export default Contacto;
