// src/components/Circle/pages/Page3.js
import React, { useState } from 'react';

const Page3 = () => {
  const [bgColor, setBgColor] = useState('#ffffff');

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div className="page-container" style={{ backgroundColor: bgColor }}>
      <h1>صفحه سوم</h1>
      <button onClick={() => setBgColor(generateRandomColor())}>
        تغییر رنگ
      </button>
    </div>
  );
};

export default Page3;