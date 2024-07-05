// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Header from './components/Header';
// import Home from './components/Home';
// import About from './components/About';
// import ContactUs from './components/ContactUs';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Header />}>
//         <Route index element={<Home />} />
//         <Route path="home" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<ContactUs />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById('root')
// );
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import Landing from './components/Landing';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/landing/:name/*" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
