import React from 'react'
import {
    BrowserRouter as Browser,
    Routes,
    Route,
} from "react-router-dom";
import { Admin } from '../Pages/Admin';
import Detail from '../Pages/Detail';
import Home from '../Pages/Home';
import HomeAdmin from '../Pages/Admin/HomeAdmin';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';
import Result from '../Pages/Result';
import CarAdmin from '../Pages/Admin/CarAdmin';
import CarAddAdmin from '../Pages/Admin/CarAddAdmin';
import CarDetailAdmin from '../Pages/Admin/CarDetailAdmin';
import Invoice from '../Pages/Invoice';

const RouterPages = () => {
  return (
    <div>
        <Browser>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
            
            <Routes>
                <Route path="/admin" element={<HomeAdmin/>}></Route>
            </Routes>

            <Routes>
                <Route path="/admin/car" element={<CarAdmin/>}></Route>
            </Routes>

            <Routes>
                <Route path="/admin/car/:id" element={<CarDetailAdmin/>}></Route>
            </Routes>

            <Routes>
                <Route path="/admin/car/add" element={<CarAddAdmin/>}></Route>
            </Routes>

            <Routes>
                <Route path="/cari" element={<Result/>}></Route>
            </Routes>
            
            <Routes>
                <Route path="cari/detail/:id" element={<Detail/>}></Route>
            </Routes>

            <Routes>
                <Route path="invoice" element={<Invoice/>}></Route>
            </Routes>

            <Routes>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>

            <Routes>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Browser>
    </div>
  )
}

export default RouterPages