import "./App.css";
import Product from "./components/Product";
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MultiForm from "./components/MultiStepForm/MultiForm";
// import Cart from "./components/Cart/Cart";
// import Form from "./components/Search/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
      <header className="App-header">
       <Header/>
      </header>
      {/* <Form/> */}
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/multistepform" element={<MultiForm/>} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
        <Footer/>
      </div>
      </BrowserRouter>
  );
}
export default App;
