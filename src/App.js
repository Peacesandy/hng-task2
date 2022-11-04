import Footer from './components/Footer';
import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    < BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


