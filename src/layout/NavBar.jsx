import { Button, Navbar } from "flowbite-react";
import logo from "../assets/arteyvidalogo.svg";
import { useState } from "react";

function NavBar() {
  // Simulamos el estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para manejar el click del botón
  const handleButtonClick = () => {
    if (isAuthenticated) {
      // Lógica para redirigir al dashboard
      window.location.href = "/dashboard";
    } else {
      // Lógica para redirigir a la página de registro
      window.location.href = "/register";
    }
  };

  return (
    <div>
      <Navbar fluid rounded className="bg-green-700">
        {/* Marca y Logo */}
        <Navbar.Brand href="https://www.instagram.com/arteyvidagarden/">
          <img
            src={logo}
            className="mr-3 h-8 sm:h-12"
            alt="Arte y Vida Garden Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Arte y Vida Garden
          </span>
        </Navbar.Brand>

        {/* Botón dinámico y Toggle */}
        <div className="flex md:order-2">
          <Button
            onClick={handleButtonClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 text-sm md:text-base"
          >
            {isAuthenticated ? "Dashboard" : "Registrarse"}
          </Button>
          <Navbar.Toggle />
        </div>

        {/* Menú colapsable */}
        <Navbar.Collapse>
          <Navbar.Link href="#" active className="text-white hover:text-yellow-300">
            Inicio
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white hover:text-yellow-300">
            Nosotros
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white hover:text-yellow-300">
            Servicios
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white hover:text-yellow-300">
            Proyectos
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white hover:text-yellow-300">
            Contacto
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
