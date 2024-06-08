// pages/logout.tsx
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Logout = () => {
    const router = useRouter();

  useEffect(() => {
    // Clear the authentication cookies
    Cookies.remove('token');
    // Redirect to the login page
    router.push('/login');
  }, [router]);


};

export default Logout;
