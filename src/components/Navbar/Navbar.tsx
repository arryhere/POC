import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function Navbar() {
  const navigate = useNavigate();
  async function signout() {
    try {
      await signOut(auth);
      localStorage.removeItem('auth');
      toast.success('Logout successful');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  const navbarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (navbarRef.current) {
      localStorage.setItem('navbar-height', JSON.stringify(navbarRef.current.offsetHeight));
    }
  }, [navbarRef]);

  return (
    <>
      <header ref={navbarRef}>
        <nav className="bg-white border-gray-200 p-3 dark:bg-gray-800">
          <div className="flex flex-wrap justify-start items-center">
            <Link to='/' className="flex justify-center items-center hover:bg-gray-700 rounded-lg px-4 py-2.5">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">POC</span>
            </Link>

            <div className=' ml-2 flex flex-row justify-center items-center'>
              <Link
                to="/"
                className="text-white font-medium rounded-lg text-base px-4 py-2.5 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
              >
                Home
              </Link>
              <Link
                to="/test"
                className="text-white font-medium rounded-lg text-base px-4 py-2.5 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
              >
                Test
              </Link>
            </div>

            <div className=" ml-auto flex flex-row justify-center items-center">
              <Link
                to="/login"
                className="text-white font-medium rounded-lg text-sm px-4 py-2.5 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="text-white font-medium rounded-lg text-sm px-4 py-2.5 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
              >
                Sign up
              </Link>
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
