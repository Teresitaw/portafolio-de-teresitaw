import "./Trabajos.css";
import { useState } from "react";

import trabajos from "../data/trabajos";
import Modal from "../Modal";

const Trabajos = () => {
	//sección donde van los estados useState
	const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
	const [trabajosFiltrados, setTrabajosFiltrados] = useState(trabajos);
	//estado para el Modal con Overlay
	const [estadoModal, setEstadoModal] = useState(false);
	//estado para abrir la info de la imagen a la que le di click
	const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(trabajos[0]);

	// Qué quiero hacer? quiero que si le doy click a un radio button quiero obtener su categoría (todos, dis web, ap moviles, etc) guardarla y
	// después ponerla en la función useState de aqui arriba.
	const handleChange = (e) => {
		const categoria = e.target.id;
		setCategoriaSeleccionada(categoria);

		//¿problemas para que te aparezca la categoría "todos"? se resuelve así:
		//antes de hacer el filtrado hay que hacer una condicional que se lea así: si la categoría es igual a todos, entonces establece la función
		//trabajos filtrados a los trabajos sin filtrar
		if (categoria === "todos") {
			setTrabajosFiltrados(trabajos);
		} else {
			//aqui haremos el filtrado según la categoría. Se lee así: accede a la lista de trabajos y has un filtro
			//el filtro es así: por cada trabajo(traba) comprueba si (if) la categoría es igual (===) a la categoría a la que nosotros le dimos click
			//si es así, returna true al arreglo nuevosTrabajos
			const nuevosTrabajos = trabajos.filter((traba) => {
				if (traba.categoria === categoria) {
					return true;
				}
			});
			setTrabajosFiltrados(nuevosTrabajos);
		}
	};

	//funciones para ABRIR y CERRAR el modal (overlay)
	const openModal = (e, id) => {
		e.preventDefault();
		//quiero establecer el estado modal true
		setEstadoModal(true);

		const trabajo = trabajos.find((trabajo) => {
			//Recorre cada elemento del arreglo trabajos y compara los id's.
			//Devuelve un nuevo arreglo con todos los elementos cuyo id sea igual al id seleccionado
			//al hacer click en la imagen.
			if (trabajo.id === id) {
				return true;
			}
		});
		setTrabajoSeleccionado(trabajo);
	};
	const closeModal = () => {
		setEstadoModal(false);
	};

	return (
		<>
			<section className="trabajos" id="trabajos">
				<div className="encabezado">
					<h3 className="titulo">Mis trabajos</h3>
					<p className="subtitulo">
						Esta sección fue creada como espacio de práctica y demostración. Actualmente, el primer proyecto es un
						desarrollo real, mientras que los demás representan proyectos conceptuales. Pronto se incorporarán nuevos
						proyectos desarrollados por mí.
					</p>
				</div>
				<div className="filtros">
					<label htmlFor="todos">
						<input
							type="radio"
							name="categoria"
							id="todos"
							onChange={handleChange}
							checked={categoriaSeleccionada === "todos"}
						/>
						{/* On Change => Cuando lo hayan seleccionado o deseleccionado quiero que ejecutes la función handleChange */}
						<span className="opcion">Todos</span>
					</label>
					<label htmlFor="diseño-web">
						<input
							type="radio"
							name="categoria"
							id="diseño-web"
							onChange={handleChange}
							checked={categoriaSeleccionada === "diseño-web"}
						/>
						<span className="opcion">Diseño web</span>
					</label>
					<label htmlFor="desarrollo-web">
						<input
							type="radio"
							name="categoria"
							id="desarrollo-web"
							onChange={handleChange}
							checked={categoriaSeleccionada === "desarrollo-web"}
						/>
						<span className="opcion">Desarrollo web</span>
					</label>
					<label htmlFor="aplicaciones-moviles">
						<input
							type="radio"
							name="categoria"
							id="aplicaciones-moviles"
							onChange={handleChange}
							checked={categoriaSeleccionada === "aplicaciones-moviles"}
						/>
						<span className="opcion">Aplicaciones moviles</span>
					</label>
					<label htmlFor="desarrollo-software">
						<input
							type="radio"
							name="categoria"
							id="desarrollo-software"
							onChange={handleChange}
							checked={categoriaSeleccionada === "desarrollo-software"}
						/>
						<span className="opcion">Desarrollo software</span>
					</label>
				</div>
				<div className="grid">
					{trabajosFiltrados.map((trabajo, index) => {
						return (
							<div className="trabajo" key={index}>
								{/* tambien puedes poner trabajo.id en lugar de index*/}
								<a href="#" className="thumb" onClick={(e) => openModal(e, trabajo.id)}>
									<img loading="lazy" src={trabajo.thumb.url} alt={trabajo.thumb.alt} />
									{/*Con loading el navegador carga la imagen un poco tarde */}
								</a>
								<div className="info">
									<div className="textos">
										<a href="#" className="nombre" onClick={(e) => openModal(e, trabajo.id)}>
											{trabajo.info.nombre}
										</a>
										<p className="categoria">{trabajo.info.categoria}</p>
									</div>
									<a href="#" className="btn-ir" onClick={(e) => openModal(e, trabajo.id)}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707" />
										</svg>
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			{/* Ventana Modal */}
			{/* Cuando nosotros estemos en el estadoModal, si es verdadero,  quiero cargar el componente Modal
			de otra forma, el código no se ejecuta*/}
			{estadoModal && <Modal closeModal={closeModal} trabajo={trabajoSeleccionado} />}
			{/* Aqui le estamos dando acceso a nuestro archivo Modal.jsx a la función de cerrar que está en este documento */}
		</>
	);
};

export default Trabajos;
