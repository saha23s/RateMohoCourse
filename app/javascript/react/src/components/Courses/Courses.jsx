import React, {useState, useEffect, Fragment} from "react";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import axios from 'axios';
import Course from "./Course";

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() =>{
        // Get all of out courses from api
        // update courses in our state
        axios.get('/api/v1/courses.json')
        .then(resp => {
            setCourses(resp.data.data)
        })
        .catch(resp => console.log(resp))
    }, [courses.lengh])

    const grid = courses.map( item => {
        return (
        
        <Course 
            key = {item.attributes.name} 
            attributes = {item.attributes} 
        />)
    })

    return (
    <div className="home">
        <div className="header">
            <h1>RateMoho</h1>
            <div className="subheader"> Rate current courses! </div>
        </div>
    <div className="grid"> 
    <ul>{grid}</ul>
    </div>
    </div>
    )
}

export default Courses