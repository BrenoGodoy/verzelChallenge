import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Car from './Pages/Car';
import Admin from './Pages/Admin';
import AdminAdd from './Components/AdminAdd';
import AdminEdit from './Components/AdminEdit';
import AdminRemove from './Components/AdminRemove';
import Register from './Pages/Register';

function App() {
  return (
  <div className='h-screen bg-gray-800'>
    <Header />
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/car/:id' element={<Car />}/>
      <Route path="/admin" element= {<Admin />}/>
      <Route path="/admin/add" element= {<AdminAdd />}/>
      <Route path="/admin/edit" element= {<AdminEdit />}/>
      <Route path="/admin/remove" element= {<AdminRemove />}/>
    </Routes>
  </div>
  );
}

export default App;
