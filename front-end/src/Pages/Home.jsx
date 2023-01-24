import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import axios from "axios";

function Home() {
  const  [data, setData] = useState([]);

  const apiCall = async () => {
    const req = await axios.get('http://localhost:5024/Car');
    setData(req.data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return(
    <div className="bg-gray-800 h-screen">
      <div className="bg-gray-800">
        <h1 className="text-5xl my-5 mx-3 title-font text-white tracking-widest">Nossos Veículos: </h1>
      </div>
      <Cards data={data}/>
    </div>
  )
}

export default Home;
