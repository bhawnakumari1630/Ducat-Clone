import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/Home';
import CorporateTraining from './pages/Corporate Training/CorporateTraining';
import Placements from './pages/Placements/Placements';
import Others from './pages/Others/Others';
import CareerGuidance from './pages/Career guidance/CareerGuidance';
import Blog from './pages/Blog/Blog';
import Courses from './pages/Courses/Courses';
import About_Us from './pages/AboutUs/About_Us';
import OnlineRegistration from './pages/OnlineRegistration/OnlineRegistration';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<About_Us />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/courses/:id' element={<Courses />}/>
        <Route path='/corporate-training' element={<CorporateTraining />}/>
        <Route path='/placement' element={<Placements />}/>
        {/* <Route path='/blog' element={<Blog />}/> */}
        <Route path='/online-registration' element={<OnlineRegistration />} />
        <Route path='/others' element={<Others />}/>
      </Route>
        <Route path='/career-guidance' element={<CareerGuidance />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App;
