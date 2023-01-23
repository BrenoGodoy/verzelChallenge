import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

function AdminList() {
  const  [data, setData] = useState([]);

  const apiCall = async () => {
    const req = await axios.get('http://localhost:5024/Car');
    console.log(req);
    setData(req.data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="h-screen">
      <div>
        <h1 className="text-sm title-font text-white tracking-widest">Listagem de Veículos:</h1>
      </div>
      <Cards data={data} />
    </div>
  )
}

export default AdminList;
