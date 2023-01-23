import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import MyContext from "../Context/Create.Context";

function Car() {
  const { mock } = useContext(MyContext);

  const [mockFind, setMockFind] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const teste = mock.find((car) => car.id === parseInt(id));
    setMockFind(teste);
  }, [id, mock])
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-gray-800 h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="CARRO" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={'carSrc'} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-white text-3xl title-font font-medium mb-1">{mockFind.name}</h1>
            <h2 className="text-sm title-font text-white tracking-widest">{mockFind.model}</h2>
            <h5 className="text-sm title-font text-white tracking-widest">{`ID: ${mockFind.id}`}</h5>
            <p className="text-white leading-relaxed">{mockFind.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-white mb-5">
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">{`R$ ${mockFind.value}`}</span>
              <button className="flex ml-auto text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Car;
