import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config/config';

export default function _404() {
  const navbarHeight = localStorage.getItem('navbar-height') ? localStorage.getItem('navbar-height') : config.app.navbar_height

  return (
    <>
      <section className={`h-[calc(100vh-${Number(navbarHeight)}px)] bg-white dark:bg-gray-900 flex flex-col justify-center items-center`}>
        <div className="lg:px-6">
          <div className="text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-gray-700">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-500">
              Sorry, we can't find that page. You'll find lots to explore on the home page.
            </p>
            <Link
              to="/"
              className="inline-flex ring-2 hover:bg-gray-700 hover:ring-0 text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
