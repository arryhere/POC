import React, { useEffect } from 'react';
import { db } from '../../config/firebase.config';
import { collection, getDocs } from 'firebase/firestore';

export default function Test() {
  async function getData() {
    try {
      const response = await getDocs(collection(db, 'users'));
      const data = response.docs.map((e) => ({ id: e.id, ...e.data() }));
      console.log('getDocs users', data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <>
        <section className="bg-gray-900">
          <div className=" mx-auto max-w-2xl p-8">
            <h2 className="mb-4 text-xl font-bold text-white">Add a new product</h2>
            <form>
              <div className="relative">
                <input
                  type="text"
                  id="floating_filled"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm bg-gray-700 border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_filled"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Product Name
                </label>
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 mt-4 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-primary-900 hover:bg-gray-600"
              >
                Add product
              </button>
            </form>
          </div>
        </section>
      </>
    </>
  );
}
