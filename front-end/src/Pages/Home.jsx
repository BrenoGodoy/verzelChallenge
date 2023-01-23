import React from "react";
// import { useContext } from "react";
// // import Cards from "../Components/Cards";
// import MyContext from "../Context/Create.context";

function Home() {
  // const { mock } = useContext(MyContext);

  return(
    <div className="bg-gray-800 h-screen">
      <div className="bg-gray-800">
        <input className="w-full my-3 bg-gray-100 text-gray-900 p-2.5 hover:bg-gray-50" type="text" placeholder="Busque por marca, modelo, ano..."/>
      </div>
      {/* <Cards mock={mock}/> */}
    </div>
  )
}

export default Home;
