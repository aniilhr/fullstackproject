import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Courses from './Courses';
import AboutUs from './AboutUs';
import Assignments from './Assignments';
import Navbar from './Navbar';
import Buy from './Buy';
import Login from './Login';
import Registration from './Registration';
import Certificate from './Certificate';
import Test from './Test';
import Certificate2 from './Certificate2';
import FullStackCourseDetails from './FullStackCourseDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import Explore from './Explore';





export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/assig' element={<Assignments/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
                <Route path='/certificate' element={<Certificate/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/test' element={<Test/>}/>
                <Route path='/certificate2' element={<Certificate2/>}/>
                <Route path='/fullst' element={<FullStackCourseDetails/>}/>
                <Route path='/explore' element={<Explore/>}/>

        
      </Routes>
    </div>
  )
}
export default App;

