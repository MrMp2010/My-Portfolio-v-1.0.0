// index.js
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './component/App/App';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);