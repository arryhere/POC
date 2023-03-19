import React, { useEffect } from 'react';
import { db } from '../../config/firebase.config';
import { collection, getDocs } from 'firebase/firestore';

export default function Test() {
  async function getData() {
    try {
      const response = await getDocs(collection(db, 'users'));
      const data = response.docs.map((e) => ({ id: e.id, ...e.data() }));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>test</div>
    </>
  );
}
