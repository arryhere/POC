import React, { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase.config';
import GoogleIcon from '../../components/Icons/GoogleIcon';
import { toast } from 'react-toastify';
import { config } from '../../config/config';

interface Signup {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email('Email must be valid').required('Email is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
});

export default function Signup() {
  const navbarHeight = localStorage.getItem('navbar-height') ? localStorage.getItem('navbar-height') : config.app.navbar_height
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Signup>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  async function onSubmit(data: Signup) {
    try {
      setLoading(true);
      const { email, password } = data;
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      localStorage.setItem('auth', JSON.stringify(response));
      toast.success('Signup successful');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      reset();
    }
  }

  async function onError(error: FieldErrors<Signup>) {
    console.log('Form error', error);
  }

  async function signUpWithGoogle() {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      localStorage.setItem('auth', JSON.stringify(response));
      toast.success('Signup successful');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      reset();
    }
  }

  return (
    <>
      <section className={`h-[calc(100vh-${Number(navbarHeight)}px)] bg-gray-50 dark:bg-gray-900 flex justify-center items-center`}>
        <div className="p-4 w-full md:w-8/12 lg:max-w-2xl ">
          <div className=" bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="text"
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

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full text-white bg-primary-600 ring-2 hover:ring-0 hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 
                    dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {loading ? 'loading' : 'Sign up'}
                </button>

                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-600 after:mt-0.5 after:flex-1 after:border-t after:border-gray-600">
                  <p className="mx-4 mb-0 text-center font-normal dark:text-neutral-200">or</p>
                </div>

                <div>
                  <button
                    type='button'
                    onClick={signUpWithGoogle}
                    className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal bg-white hover:bg-slate-200"
                  >
                    <GoogleIcon className='mr-2 h-5 w-5' />
                    Continue with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
