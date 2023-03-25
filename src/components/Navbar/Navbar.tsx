import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function Navbar() {
  const navigate = useNavigate();
  async function signout() {
    try {
      await signOut(auth);
      localStorage.removeItem('auth');
      toast('Logout successful');
      navigate('/');
    } catch (error: any) {
      toast(error.message);
    }
  }

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 p-3 dark:bg-gray-800">
          <div className="flex flex-wrap justify-start items-center">
            <button className="flex justify-center items-center hover:bg-gray-700 rounded-lg px-4 py-2.5">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">POC</span>
            </button>

            <div className=' ml-2 flex flex-row justify-center items-center'>
              <NavLink
                to="/"
                className="text-white font-medium rounded-lg text-base px-4 py-2.5 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
              >
                Home
              </NavLink>
              <NavLink
                to="/test"
                className="text-white font-medium rounded-lg text-base px-4 py-2.5 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
              >
                Test
              </NavLink>
            </div>

            <div className=" ml-auto flex flex-row justify-center items-center">
              <NavLink
                to="/login"
                className="text-white font-medium rounded-lg text-sm px-4 py-2.5 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
              >
                Log in
              </NavLink>
              <NavLink
                to="/signup"
                className="text-white font-medium rounded-lg text-sm px-4 py-2.5 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
              >
                Sign up
              </NavLink>
              <button
                onClick={signout}
                className="text-white font-medium rounded-lg text-sm px-4 py-2.5 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
              >
                Log out
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
