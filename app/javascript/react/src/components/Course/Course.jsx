import React, {useState, useEffect, Fragment} from "react";
import {useParams} from 'react-router-dom'; 
import Header from './Header';
import axios from 'axios';
import styled from 'styled-components'; 
import ReviewForm from "./ReviewForm";

const Course = () => {


const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
`

const Column = styled.div`
    background: #fff; 
    max-width: 100%;
    width: 100%;
    float: left; 
    height: 100vh;
    overflow-x: scroll;
    overflow-y: scroll; 
    overflow: scroll;
    &::-webkit-scrollbar {
    display: none;
    }
    &:last-child {
    background: black;
    border-top: 1px solid rgba(255,255,255,0.5);
    }
`

const Main = styled.div`
    padding-left: 60px;`




    const [course, setCourse] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)


    const {slug} = useParams()

    useEffect(() =>{

       
        
        const url = `/api/v1/courses/${slug}`

        axios.get(url)
        .then(resp => {
            setCourse(resp.data)
            setLoaded(true)
        })
        .catch(resp => console.log(resp))





    },[])

    const handleChange = (e) =>{
        e.preventDefault()
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }


    return (
    <Wrapper> 
        {
            loaded && 
            <Fragment>
            <Column>
                <Main>

                    <Header attributes={course.data.attributes}
                        reviews={course.included}
                    />
                    
                
                
                    <div className="reviews"></div>
                </Main>
            </Column>
            <Column>
                <ReviewForm
                    handleChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    attributes = {course.data.attributes}
                    review = {review}
                />
            </Column>
            </Fragment>
        }
    </Wrapper>

    )
}

export default Course