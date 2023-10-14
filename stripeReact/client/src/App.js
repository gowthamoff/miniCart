import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import Success from './components/Success';
import Cancel from './components/Cancel';
import Refund from './components/Refund';

function App() {
  return (
    <>
     <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/success' element={<Success />}/>
      <Route  path='/cancel' element={<Cancel />}/>
      <Route  path='/refund' element={<Refund />}/>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
