import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'; 
import LoginSignUp from './LoginSignUp';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Courses from './Courses/Courses';
import Course from './Course/Course';

const Welcome = () => {
    return (
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<Course />} />
        {/* the below line is for testing purpose */}
        <Route path="/test" element={<div onClick={() => console.log('Path:', '/test')}>Test</div>} />
      </Routes>
      )
}


// document.addEventListener('DOMContentLoaded', () => {

//     ReactDOM.render(
//     <BrowserRouter>
//       <Welcome/>
//     </BrowserRouter>
//     , document.getElementById('welcome'))

// })

const root = createRoot(document.getElementById('welcome')); 
root.render(
  <BrowserRouter>
    <Welcome/>
  </BrowserRouter>
);

export default Welcome