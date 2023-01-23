import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import axios from "axios";

function Home() {
  const  [data, setData] = useState([]);

  const apiCall = async () => {
    const req = await axios.get('http://localhost:5024/Car');
    console.log(req);
    setData(req.data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return(
    <div className="bg-gray-800 h-screen">
      <div className="bg-gray-800">
        <input className="w-full my-3 bg-gray-100 text-gray-900 p-2.5 hover:bg-gray-50" type="text" placeholder="Busque por marca, modelo, ano..."/>
      </div>
      <Cards data={data}/>
    </div>
  )
}

export default Home;
