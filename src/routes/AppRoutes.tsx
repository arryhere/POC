import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import _404 from '../pages/Error/_404';
import AuthGuard from '../lib/guards/AuthGuard';
import Signup from '../pages/Authentication/Signup';
import Test from '../pages/Test/Test';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<AuthGuard />}>
          <Route path='/test' element={<Test />} />
        </Route>
        <Route path='*' element={<_404 />} />
      </Routes>
    </>
  );
}
