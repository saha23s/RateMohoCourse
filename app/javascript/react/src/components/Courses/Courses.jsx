import React, {useState, useEffect, Fragment} from "react";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import axios from 'axios';
import Course from "./Course";
import styled from "styled-components";

const Home = styled.div`
    text-align: center;
    max-width:1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
padding:100px 100px 10px 100px;

h1{
    font-size:42px;
}

`
const Subheader = styled.div`
font-weight: 300;
font-size: 26px;
`
const Grid = styled.div`
 display: grid;
 grid-template-columns: repeat(4,1fr);
 grid-gap: 20px;
 width: 100%;
 padding: 20px;
`

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() =>{
        // Get all of out courses from api
        // update courses in our state
        axios.get('/api/v1/courses.json')
        .then(resp => {
            setCourses(resp.data.data)
        })
        .catch(resp => console.log(resp.data))
    }, [courses.lengh])

    const grid = courses.map( item => {
        return (
        
        <Course 
            key = {item.attributes.name} 
            attributes = {item.attributes} 
        />)
    })

    return (
    <Home>
        <Header>
            <h1>RateMoho</h1>
            <Subheader> Rate current courses! </Subheader>
        </Header>
    <Grid> 
    {grid}
    </Grid>
    </Home>
    )
}

export default Courses