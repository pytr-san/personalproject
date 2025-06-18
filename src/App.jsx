import React from 'react'
import Navbar from './components/Navbar.jsx';
import Dashboard from './Pages/dashboard.jsx';
import { Routes, Route } from 'react-router-dom';
import Calendar from './Pages/calendar.jsx';
import Team from './Pages/team.jsx';
import Projects from './Pages/projects.jsx';

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
       
        <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/team'element={<Team/>}/>
        <Route path='/projects'element={<Projects/>}/>
        <Route path='/calendar'element={<Calendar/>}/>

      </Routes>
    </> 
  )
}

export default App