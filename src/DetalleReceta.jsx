import React from 'react'

import './App.css';
import { Link, useParams } from 'react-router-dom';

const recetas = {
  pasta: {
    nombre: 'Pasta italiana',
    tiempo: '25 minutos',
    ingredientes: [
      '200 g de pasta',
      'Tomates cherry',
      'Aceite de oliva',
      'Queso parmesano',
      'Albahaca'
    ],
    preparacion:
      'Cuece la pasta en agua hirviendo. Escúrrela y mézclala con los tomates cherry, el aceite de oliva, el queso parmesano y la albahaca.'
  },

  hotcakes: {
    nombre: 'Hot cakes',
    tiempo: '15 minutos',
    ingredientes: [
      '1 taza de harina',
      '1 huevo',
      '3/4 de taza de leche',
      '1 cucharada de azúcar',
      '1 cucharadita de polvo para hornear'
    ],
    preparacion:
      'Mezcla todos los ingredientes. Vierte pequeñas porciones en una sartén caliente y cocina por ambos lados hasta que estén doradas.'
  },

  pastel: {
    nombre: 'Pastel de chocolate',
    tiempo: '45 minutos',
    ingredientes: [
      'Harina',
      'Cacao en polvo',
      'Azúcar',
      'Huevos',
      'Leche',
      'Polvo para hornear'
    ],
    preparacion:
      'Mezcla los ingredientes, vierte la mezcla en un molde engrasado y hornea a 180 °C hasta que el pastel esté cocido.'
  }
};

function DetalleReceta() {
  const { id } = useParams();
  const receta = recetas[id];

  if (!receta) {
    return (
      <main className="detalle-receta">
        <h1>Receta no encontrada</h1>
        <Link to="/">Volver a las recetas</Link>
      </main>
    );
  }

  return (
    <main className="detalle-receta">
      <h1>{receta.nombre}</h1>
      <p className="tiempo-receta">
        Tiempo de preparación: {receta.tiempo}
      </p>

      <section>
        <h2>Ingredientes</h2>
        <ul>
          {receta.ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Preparación</h2>
        <p>{receta.preparacion}</p>
      </section>

      <Link to="/" className="volver-recetas">
        ← Volver a las recetas
      </Link>
    </main>
  );
}

export default DetalleReceta;
