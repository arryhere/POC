import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface Login {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  async function onSubmit(data: Login) {
    console.log(data);
  }

  return (
    <>
      <section className="h-[calc(100vh-60px)] bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
        <div className="p-4 w-full md:w-2/4">
          <div className=" bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                      focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="sample@example.com"
                  />
                  {errors?.email && <p className=" mt-2 text-sm text-red-400">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register('password')}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                      focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors?.password && <p className=" mt-2 text-sm text-red-400">{errors.password.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 
                          dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link to="/forget-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-300">
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 ring-2 hover:ring-0 hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 
                    dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <Link to="/signup" className="ml-2 font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
