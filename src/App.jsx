import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/index.jsx';
import Home from './Pages/Home/index.jsx';
import ProductListing from './Pages/ProductListing/index.jsx';
import Footer from './components/Footer/index.jsx';
import ProductDetails from './Pages/ProductDetails/index.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/productListing"} exact={true} element={<ProductListing/>}/>
        <Route path={"/product/:id"} exact={true} element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
