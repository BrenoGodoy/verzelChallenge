import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import MyContext from "../Context/Create.Context";

function Header() {
  const { isLogged, setIsLogged, setRole } = useContext(MyContext);
  const { role } = useContext(MyContext);
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const handleClick = () => {
    setIsLogged(false);
    setRole('');
    localStorage.clear();
  };

  useEffect(() =>{
    console.log('Header useEffect', isLogged, role);
  });

  return(
  <header>
    <nav className="bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link to="/" className="text-red-600 self-center text-xl font-semibold whitespace-nowrap">
          Verzel Carshop
        </Link>
        <div className="flex items-center lg:order-2">
          {isLogged && <button onClick={ handleClick } className="bg-red-600 text-white hover:bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
            Sair
          </button>}
          {isLogged ? (role === 'Admin' ? <Link to="/Admin" className="bg-red-600 text-white hover:bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Página do Administrador
          </Link> : <button to="/Admin" className="bg-red-600 text-white hover:bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
            {user.email}
          </button>) : 
          <Link to="/login" className="bg-red-600 text-white hover:bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Login
          </Link> 
          }
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header;
