'use client';

import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

export default function MainButton() {
  useEffect(() => {
    WebApp.MainButton.setText('Click Me!');
    WebApp.MainButton.show();

    const handleClick = () => {
      WebApp.sendData('Hello from the Mini App!');
    };

    WebApp.MainButton.onClick(handleClick);

    return () => {
      WebApp.MainButton.offClick(handleClick);
    };
  }, []);

  return null;
}
