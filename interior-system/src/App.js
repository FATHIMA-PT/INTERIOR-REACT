import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './Components/HOME_PAGE/Home';
import Header from './Components/COMMON/HEADER/Header';
import Footer from './Components/COMMON/FOOTER/Footer';

import Auth from './Components/Auth';
import Home from './Components/Home';
import Home_page from './Components/HOME_PAGE/Home_page';
import Gallery from './Components/GALLERY/Gallery';
import Contact from './Components/COMMON/Contact-Us/Contact';
import About from './Components/COMMON/About-Us/About';
import Products from './Components/COMMON/Products/Products';
import Cart from './Components/COMMON/Cart';
import Wishlist from './Components/COMMON/Wishlist';
import DiningRoom from './Components/DINING_ROOM/DiningRoom';
import HomeCategory from './Components/HOME_CATEGORY/HomeCategory';
import Office from './Components/OFFICE/Office';
import Office_category from './Components/OFFICE_CATEGORY/Office_category';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home-page' element={<Home_page />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        {/* <Route path='/diningroom/:id' element={<DiningRoom/>} /> */}
        <Route path='/homecategory/:id' element={<HomeCategory/>} />
        <Route path='/office' element={<Office/>} />
        <Route path='/officecategory/:id' element={<Office_category/>} />
      </Routes>
      <Footer />


    </>
  );
}

export default App;
