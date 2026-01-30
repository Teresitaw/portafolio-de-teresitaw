import "./Header.css";
import DarkModeSwitch from "../DarkModeSwitch";

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="logo">
					<h2 className="titulo">Teresitaw</h2>
					<p className="subtitulo">Desarrolladora web & Freelance</p>
				</div>
				<nav className="navbar">
					<a href="#trabajos">Trabajos</a>
					<a href="#acerca-de">Acerca de</a>
					<a href="#contacto">Contacto</a>
				</nav>
				<DarkModeSwitch />
			</header>
		</>
	);
};

export default Header;
