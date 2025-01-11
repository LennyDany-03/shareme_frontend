import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import Contact from './pages/Contact Us/Contact.jsx';
import About from './pages/About Us/About.jsx';
import Nature from './pages/Nature/Nature.jsx'
import Abstract from './pages/Abstract/Abstract.jsx'
import Animal from './pages/Animals/Animals.jsx'
import Cities from './pages/Cities and Architecture/Cities.jsx'
import Space from './pages/Space and Universe/Space.jsx'
import Minimalist from './pages/Minimalist/Minimalist.jsx'
import Art from './pages/Art and Illustration/Art.jsx'
import Technology from './pages/Technology/Technology.jsx'
import Sports from './pages/Sports/Sports.jsx'
import Gaming from './pages/Gaming/Gaming.jsx'
import Anime from './pages/Anime/Anime.jsx'
import Quotes from './pages/Quotes and Typography/Quotes.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path='/nature' element= {<Nature/>}/>
        <Route path='/abstract' element= {<Abstract/>}/> 
        <Route path='/animals' element= {<Animal/>}/>
        <Route path='/cities_architecture' element= {<Cities/>}/>
        <Route path='/space_universe' element= {<Space/>}/>
        <Route path='/minimalist' element= {<Minimalist/>}/>
        <Route path='/art_illustration' element= {<Art/>}/>
        <Route path='/technology' element= {<Technology/>}/>
        <Route path='/sports' element= {<Sports/>}/>
        <Route path='/gaming' element= {<Gaming/>}/>
        <Route path='/anime' element= {<Anime/>}/>
        <Route path='/quotes_typography' element= {<Quotes/>}/>

      </Routes>
    </Router>
  );
};

export default App;
