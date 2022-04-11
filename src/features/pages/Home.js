import React from "react";
import fondo from "../../assests/fondo.jpg";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 pt-16">
        <div
          className="flex h-screen"
          style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
        >
          <div className="m-auto">
            <p className="text-2xl">Mi nombre es:</p>
            <p className="text-2xl mb-10">Alvaro Niño</p>
            <p className="text-2xl">Estudiante de Ingenieria de Sistemas</p>
            <p className="text-2xl mt-10">De la Universidad Distrital FJC</p>
          </div>
        </div>
        <div className="flex h-screen">
          <div className="m-auto">
            <p className="text-2xl mb-10">Mi proyecto consiste en un:</p>
            <p className="text-4xl">
              MODELO DE CLASIFICACIÓN DE IMÁGENES VIOLENTAS BASADO EN UN MODELO
              DE DETECCIÓN DE OBJETOS
            </p>
            <p className="text-2xl mt-10">
              En esta página podran ver el resultado y funcionamiento de este
              proyecto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
