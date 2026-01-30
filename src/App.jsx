import Header from "./componentes/layout/Header";
import Hero from "./componentes/layout/Hero";
import Clientes from "./componentes/layout/Clientes";
import Trabajos from "./componentes/layout/Trabajos";
import AcercaDe from "./componentes/layout/AcercaDe";
import Contacto from "./componentes/layout/Contacto";
import Footer from "./componentes/layout/Footer";

function App() {
	return (
		<>
			<div className="contenedor">
				<Header />
				<Hero />
				<Clientes />
				<Trabajos />
				<AcercaDe />
				<Contacto />
				<Footer />
			</div>
		</>
	);
}

export default App;
