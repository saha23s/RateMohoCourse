import * as React from 'react'
import * as ReactDOM from 'react-dom'
import LoginSignUp from './LoginSignUp';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Courses from './Courses/Courses';

const Welcome = () => {
    return (
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/courses" element={<Courses />} />
        {/* the below line is for testing purpose */}
        <Route path="/test" element={<div onClick={() => console.log('Path:', '/test')}>Test</div>} />
      </Routes>
      )
}


document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
    <BrowserRouter>
      <Welcome/>
    </BrowserRouter>
    , document.getElementById('welcome'))

})

export default Welcome