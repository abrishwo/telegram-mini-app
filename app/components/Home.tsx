'use client';

import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setTheme } from '../../store/slices/themeSlices';
import { setUser } from '../../store/slices/userSlice';
import MainButton from './MainButton';

interface HomeProps {
  user?: any;
}
const Home: React.FC<HomeProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);
//   const user = useAppSelector((state) => state.user);

  useEffect(() => {
    WebApp.ready();

    const themeParams = WebApp.themeParams;

    dispatch(
      setTheme({
        bgColor: themeParams.bg_color || '#ffffff',
        textColor: themeParams.text_color || '#000000',
      })
    );

    const tgUser = WebApp.initDataUnsafe?.user;

    if (tgUser) {
      dispatch(
        setUser({
          firstName: tgUser.first_name || '',
          lastName: tgUser.last_name || '',
        })
      );
    }
  }, [dispatch]);
  
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundColor: theme.bgColor,
        color: theme.textColor,
      }}
    >
      <h1 className="text-4xl font-bold mb-4">Hello {user.firstName}!</h1>
      <p className="text-lg mb-4">Welcome to your Telegram Mini App 🚀</p>
      <h1>Welcome {user?.first_name || 'Guest'}!</h1>
      <MainButton />
    </div>
  );
}

export default Home;
