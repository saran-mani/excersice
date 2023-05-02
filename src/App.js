import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Socialmedia from './Pages/SocialMedia/SocialMedia';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/social-media' element={<Socialmedia/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
