import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import MyContext from '../Context/Create.Context'
import Cards from "./Cards";

function AdminList() {
  const { mock } = useContext(MyContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    // const apiCall = async () => {
    //   // const data = await chamada para api
          // setData(data)
    //
    // }
    setData(mock)
  }, [mock]);

  return (
    <div className="h-screen">
      <div>
        <h1 className="text-sm title-font text-white tracking-widest">Listagem de Veículos:</h1>
      </div>
      <Cards mock={data} />
    </div>
  )
}

export default AdminList;
