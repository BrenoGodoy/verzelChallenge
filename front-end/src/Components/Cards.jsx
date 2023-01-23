import React from "react";
import noImg from "../Images/sem-foto.jpg"
import { Link } from 'react-router-dom'

function Cards({ data }) {

  return (
    <section className="my-5 flex flex-wrap justify-evenly bg-gray-800">
      {data.map((car) => {
        return (
          <div key={car.id} className="w-full my-3 max-w-sm bg-gray-200 rounded-lg shadow-md">
            <Link to={`/car/${car.id}`}>
              {!car.image ? 
                <img className="p-8 rounded-t-lg" src={noImg} alt="CARRO/" /> : 
                <img className="p-8 rounded-t-lg" src={car.image} alt="CARRO" />
              }
            </Link>
            <div className="px-5 pb-5">
              <Link to={`/car/${car.id}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">{car.name}</h5>
              </Link>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900">{car.model}</h5>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{`R$ ${car.value}`}</span>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Cards;
