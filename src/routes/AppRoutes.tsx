import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Signup from '../pages/Authentication/Signup';
import _404 from '../pages/Error/_404';
import AuthGuard from '../lib/guards/AuthGuard';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<AuthGuard />}>
          <Route path='/test' element={<>test</>} />
        </Route>
        <Route path='*' element={<_404 />} />
      </Routes>
    </>
  );
}
