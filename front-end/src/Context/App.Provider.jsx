import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Create.Context';

function ContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false)
  const [mock, setMock] = useState([]);

  const verifyIsLogged = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    // Aqui vai rolar uma requisição para a api para verificar o token salvo no localStorage
    try {
      if (user.token) {
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const apiCall = async () => {
    const req = await fetch('http://localhost:5256/Car');
    const data = await req.json();
    setMock(data)
  };

  useEffect(() => {
    verifyIsLogged();
    apiCall();
  }, []);

  const context = useMemo(
    () => ({
      mock,
      setMock,
      isLogged,
      setIsLogged
    }),
    [mock, isLogged],
  );

  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;