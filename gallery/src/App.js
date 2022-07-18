import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Form from './Form';
import Gallery from './Gallery';

const Default = () => <Link to="1">Open page 1</Link>;

function App() {
  const handleSearch = query => {
    console.log('handleSearch', query);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header className="p-5 mb-5 row position-sticky justify-content-center bg-black">
          <div className="col-3">
            <img
              className="w-100 color-invert"
              src="https://www.salt.study/_next/static/media/saltlogo-dark.015d7a3f.svg"
              alt="Stupid logo" />
          </div>
        </header>
        <div className="container">
          <Form handleSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/:page" element={<Gallery />} />
          </Routes>
        </div>
        <footer className="row bg-black justify-content-center p-5">
          <div className="col-4">
            <a className="text-white" href="https://github.com/alexandersopov">Github</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
