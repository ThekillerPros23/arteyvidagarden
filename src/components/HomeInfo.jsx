import img from "../assets/arteyvidafondo.svg";

function HomeInfo() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-6"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Bienvenido a <span className="text-green-400">Arte y Vida Garden</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
          Transformamos tus espacios verdes con <span className="text-green-300 font-medium">poda profesional</span> 
          y mejoramos la calidad de tus plantas. Haz de tu jardín un lugar lleno de vida con nuestros servicios especializados.
        </p>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg sm:text-xl font-medium shadow-lg transform hover:scale-105 transition-transform duration-300"
          aria-label="Contáctanos"
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
}

export default HomeInfo;
