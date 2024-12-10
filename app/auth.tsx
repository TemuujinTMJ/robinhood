'use client'
import { useEffect } from 'react';
import Cookies from 'js-cookie';

import { useAppDispatch, useAppSelector } from '@/services/hooks';
import { fetchUser } from '@/services/modules/auth/user.service';
import { usePathname, useRouter } from 'next/navigation';

export default function Auth ({ children }: {
  children: React.ReactNode;
}) {
  const token = Cookies.get('token');
  const router = useRouter();
  const pathname = usePathname()
  const dispatch = useAppDispatch();
  const { loadingUser, user } = useAppSelector((state) => state.FetchUser);

  useEffect(() => {
    console.log('jh')
     if (!token || user === null) {
      dispatch(fetchUser()).then(() => {
        if(pathname === '/login') {
          router.replace(`/`);
        }
      });
    }
  }, [dispatch]);

  if (loadingUser) return <>loading...</>;
  return <>{children}</>;
}
