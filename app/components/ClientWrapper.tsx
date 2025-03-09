'use client';

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('./Home'), { ssr: false });

export default function ClientWrapper() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    let tg: any = null;

    const initTelegram = async () => {
      const TelegramWebApp = (await import('@twa-dev/sdk')).default;

      tg = TelegramWebApp;

      if (tg?.ready) {
        tg.ready();
        tg.expand();

        const userData = tg.initDataUnsafe?.user;
        setUser(userData);

        tg.MainButton.setParams({
          text: 'Submit Order',
          color: '#0b7285',
          text_color: '#ffffff',
        });

        tg.MainButton.show();

        tg.MainButton.onClick(() => {
          console.log('MainButton clicked!');
          tg.sendData(JSON.stringify({ message: 'Order Submitted!' }));
        });
      }
    };

    if (typeof window !== 'undefined') {
      initTelegram();
    }

    // Optional: Clean up
    return () => {
      if (tg?.MainButton) {
        tg.MainButton.hide();
      }
    };
  }, []);

  return (
    <Provider store={store}>
      <Home user={user} />
    </Provider>
  );
}
