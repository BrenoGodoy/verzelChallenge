import React, {useState} from "react";
import AdminHeader from "./AdminHeader";

function AdminEdit() {
  const [car, setCar] = useState({
    id: '',
    name: '',
    brand: '',
    model: '',
    value: '',
    description: ''
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value)
    setCar({ ...car, [name]: value });
  };

  const handleClick = () => {
    // envia a requisição para a api com CAR nos headers da requisição;
    console.log(car)
  };

  return (
    <div className="bg-gray-800">
      <AdminHeader />
      <form className="my-5 mx-5 w-full max-w-lg h-screen bg-gray-800">
          <div>
            <h1 className="text-sm title-font text-white tracking-widest">Preencha apenas os itens que você quer editar!</h1>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input onChange={handleChange} type="text" id="id" name="id" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
              <label htmlFor="id" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID do Veículo</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input onChange={handleChange} type="text" id="name" name="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
              <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome do Veículo</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input onChange={handleChange} type="text" name="model" id="model" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
              <label htmlFor="model" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Modelo do Veículo</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input onChange={handleChange} type="text" name="brand" id="brand" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
              <label htmlFor="brand" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Marca do Veículo</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input onChange={handleChange} type="text" name="value" id="value" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
              <label htmlFor="value" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Preço do Veículo - ex: 55.250</label>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Descrição do veículo</label>
            <textarea onChange={handleChange} name="description" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escreva sobre o veículo aqui"></textarea>
          </div>
          <button onClick={handleClick} type="button" className="my-5 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Editar veículo</button>
        </form>
    </div>
  )
}

export default AdminEdit;
