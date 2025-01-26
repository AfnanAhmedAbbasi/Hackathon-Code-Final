import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Categories from '../pages/categories';
import Forms from '../pages/forms';
import ProceedForm from '../pages/ProceedForm';
import Dashboard from '../pages/Dashboard';

const Approuter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/Categories' element={<Categories />} /> 
                    <Route path='/login' element={<Login />} /> 
                    <Route path='/Forms' element={<Forms />} /> 
                    <Route path='/' element={<Home />} /> 
                    <Route path='/ProceedForm' element={<ProceedForm />} /> 
                    <Route path='/Dashboard' element={<Dashboard />} /> 
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Approuter;
