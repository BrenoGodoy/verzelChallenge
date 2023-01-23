import React from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
  return(
    <div>
      <ul className="flex bg-red-600">
        <li className="flex-1 mr-2">
          <Link className="text-center block border border-red-600 rounded py-2 px-4 bg-red-600 hover:bg-red-800 text-white" to="/admin">Listar Veículos</Link>
        </li>
        <li className="flex-1 mr-2">
          <Link className="text-center block border border-red-600 rounded py-2 px-4 bg-red-600 hover:bg-red-800 text-white" to="/admin/add">Adicionar Veículos</Link>
        </li>
        <li className="text-center flex-1">
          <Link className="text-center block border border-red-600 rounded py-2 px-4 bg-red-600 hover:bg-red-800 text-white" to="/admin/edit">Editar Veículos</Link>
        </li>
        <li className="text-center flex-1">
          <Link className="text-center block border border-red-600 rounded py-2 px-4 bg-red-600 hover:bg-red-800 text-white" to="/admin/remove">Remover Veículos</Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminHeader;
