import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import Loadable from 'react-loadable';
import LoadingComponent from "./components/loader";
import 'tailwindcss/tailwind.css';
const App = Loadable({
  loader: () => import('./App'),
  loading: LoadingComponent,
});

AOS.init();

const root = ReactDOM.createRoot(
  document.getElementById('root') 
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
