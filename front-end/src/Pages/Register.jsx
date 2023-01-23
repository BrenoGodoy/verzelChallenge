import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import MyContext from "../Context/Create.Context";
import requestLogin from "../Services/requestLogin";

function Register() {
  const { setIsLogged } = useContext(MyContext);
  const [isDisable, setIsDisable] = useState(true);
  const [isError, setIsError] = useState(false); // setIsError será adicionado também
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
    role: ''
  });
  const navigate = useNavigate();

  const emailRegex = /[\w\-._]+@[\w\-._]+\.\w{2,10}/;
  const minPasswordLength = 5;
  const minEmailLength = 11;

  const buttonValidate = () => {
    const { email, password } = user;
    const status = email.length > minEmailLength
    && emailRegex.test(email) && password.length > minPasswordLength;
    setIsDisable(!status);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value)
    setUser({ ...user, [name]: value });
  };

  const saveUser = (email, token) => {
    localStorage.setItem('user', JSON.stringify({
      email,
      token,
    }));
  };

  const handleClick = () => {
      // Chama a api, se tudo ok, registra, loga e recebe token JWT que será salvo no localStorage para ser usado posteriormente no CRUD de carros.
      const { email, password } = user; // password será usado depois também

      requestLogin(email, password)
      .then(({ data }) => {
        saveUser(data);
        setIsLogged(true);
        navigate('/');
      })
    .catch((error) => {
      setIsError(false);
      setIsError(false);
      setIsError(true);
      setErrorMessage(error.response.data.message);
    });
    saveUser(email, 'tokenTeste')
    setIsLogged(true);
    navigate('/');
  }

  useEffect(() => {
    buttonValidate();
  });

  return (
    <div className="bg-gray-800 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div className="w-full bg-gray-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                      Registrar
            </h1>
            <form>
              <div className="my-3">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 hover:bg-gray-50" placeholder="email@email.com"  
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
                <input onChange={handleChange} type="password" name="password" id="password" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 hover:bg-gray-50" placeholder="Sua senha"  
                />
              </div>
              <div className="my-3">
                <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">Repetir Senha</label>
                <input type="repeat-password" name="repeat-password" id="repeat-password" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 hover:bg-gray-50" placeholder="Sua senha"  
                />
              </div>
              <h3 className="mb-4 my-5 font-semibold text-black">Função na Página:</h3>
              <ul className="w-48 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                      <input onChange={handleChange} id="list-radio-license" type="radio" value="User" name="role" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Usuário Comum </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-800">
                <div className="flex items-center pl-3">
                    <input onChange={handleChange} id="list-radio-license1" type="radio" value="Admin" name="role" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label htmlFor="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Administrador</label>
                </div>
              </li>
              </ul>
              <button disabled={ isDisable } onClick={(e) => handleClick(e.target)} type="button" className="my-10 w-full text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50">Registrar</button>
              {isError && <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Erro!
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{errorMessage}</p>
                </div>
              </div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
