import React, { useEffect, useState } from 'react';
import { auth } from '../../config/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AuthGuard() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (e) => {
      if (e) {
        setUser(e);
      } else {
        toast('User not authenticated')
        navigate('/login');
      }
    });
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}
