// app/page.tsx or a component file like app/components/CloseButton.tsx
'use client';

import WebApp from '@twa-dev/sdk';

export default function CloseButton() {
  const handleClose = () => {
    WebApp.close();
  };

  return (
    <button
      onClick={handleClose}
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
    >
      Close App
    </button>
  );
}
