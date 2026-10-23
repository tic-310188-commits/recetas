import React from 'react'
import { Link } from 'react-router-dom';
import './Recetas.css';

function Recetas() {
  return (
    <div className="recetas">
      <h1>Mis Recetas</h1>
      <p>Descubre deliciosas recetas para preparar en casa.</p>

      <div className="contenedor-recetas">

        <div className="tarjeta">
          <img
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400"
            alt="Pasta"
          />
          <h2>Pasta italiana</h2>
          <p>Tiempo: 25 minutos</p>
          <Link to="/receta/pasta" className="ver-receta">
  Ver receta
</Link>
        </div>

        <div className="tarjeta">
          <img
            src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400"
            alt="Hot cakes"
          />
          <h2>Hot cakes</h2>
          <p>Tiempo: 15 minutos</p>
          <Link to="/receta/hotcakes" className="ver-receta">
  Ver receta
</Link>
        </div>

        <div className="tarjeta">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"
            alt="Pastel"
          />
          <h2>Pastel de chocolate</h2>
          <p>Tiempo: 45 minutos</p>
          <Link to="/receta/pastel" className="ver-receta">
  Ver receta
</Link>
        </div>

      </div>
    </div>
  );
}

export default Recetas;

