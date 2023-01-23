import React from "react";
import AdminHeader from "../Components/AdminHeader";
import AdminList from "../Components/AdminList";

function Admin() {
  return(
    <div className="bg-gray-800">
      <AdminHeader />
      <AdminList />
    </div>
  )
}

export default Admin;
