import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";

function AdminRemove() {
  const [id, setId] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setId(value);
  };

  const handleClick = () => {
    const token = JSON.parse(localStorage.getItem('user'));
    axios.delete(`http://localhost:5024/Car?id=${id}`, {
      headers: {
        'Authorization': token.token 
     }
    });

    console.log(id)
  };

  return (
    <div className="bg-gray-800">
      <AdminHeader />
      <form className="my-5 mx-5 w-full max-w-lg h-screen bg-gray-800">
        <div>
          <h1 className="text-sm title-font text-white tracking-widest">Excluir Veículo</h1>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input onChange={handleChange} type="text" id="name" name="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID do Veículo que será removido</label>
        </div>
        <button onClick={handleClick} type="button" className="my-5 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Remover veículo</button>
      </form>
    </div>
  )
}

export default AdminRemove;
