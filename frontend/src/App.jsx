import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Menus from './pages/Menus';
import Reservations from './pages/Reservations';
import News from './pages/News';
import Contact from './pages/Contact';

import bg1 from './assets/img/dessert5.png';
import bg2 from './assets/img/bg18.png';
import bg3 from './assets/img/cafe.png';
import bg4 from './assets/img/dessert16.png';
import bg5 from './assets/img/dessert53.png';
import bg6 from './assets/img/dessert55.png';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path="/" element={<Home bg={bg1} />}></Route>

        <Route path="/about" element={<AboutPage bg={bg2} />} />

        <Route path="/menus" element={<Menus bg={bg5} />} />

        <Route path='/reservations' element={<Reservations bg={bg3} />} />

        <Route path='/news' element={<News bg={bg4} />} />

        <Route path='/news/sweet-symphony' element={<Blog1 />} />

        <Route path='/news/velvet-truffle' element={<Blog2 />} />

        <Route path='/news/brewed-euphoria' element={<Blog3 />} />

        <Route path='/contact' element={<Contact bg={bg6} />} />

      </Routes>
    </>
  )
}

export default App
