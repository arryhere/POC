import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Authentication/Login';
import _404 from '../pages/Error/_404';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<_404 />} />
      </Routes>
    </>
  );
}
