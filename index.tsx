import React from 'react';
import ReactDOM from 'react-dom/client';
// 必须添加 .tsx 扩展名和版本号
import App from './App.tsx?v=final_v2';
import './index.css';

console.log('%c[ZECOOLA] FINAL V2 BOOTING...', 'background: #000; color: #FF6B00; padding: 10px; font-weight: bold;');

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);