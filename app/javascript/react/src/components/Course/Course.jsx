import React, {useState, useEffect, Fragment, useRef} from "react";
import {useParams} from 'react-router-dom'; 
import Header from './Header';
import axios from 'axios';
import styled from 'styled-components'; 
import ReviewForm from "./ReviewForm";
import Review from './Review'; 

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
    const [review, setReview] = useState({ title: '', description: '', score1: 0 })
    const [reviews, setReviews] = useState([])
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

    //console.log("testing reviews",  course.attributes); 
    let reviewArr; 
    if ( loaded && course.included){
        reviewArr = course.included.map((item, index) => {
            return(
              <Review
              key = {index}
              attributes = {item.attributes} 
              />
            )
        
          }) 

    }

    // const handleChange = (e, name) =>{
    //     e.preventDefault()
    //     if (name === 'title') {
    //         setReview({...review, title: e.target.value})
    //     } else if (name === 'description') {
    //         setReview({...review, description: e.target.value})
    //     }
    // }

    // const handleSubmit = (e) =>{
    //     e.preventDefault()

    //     // const csrfToken = document.querySelector('[name=csrf-token').content
    //     // axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    //     // const course_id = course.data.id
    //     // axios.post('/api/v1/reviews', {review, course_id})
    //     // .then(
    //     //     resp =>{
    //     //         debugger
    //     //     }
    //     // )
    //     // .catch(resp => {})
    // }

    // const setRating = (score, e) => {
    //     e.preventDefault();// prolly not needed as per the vid
    //     //set a debugger 
    //     debugger;
    //     console.log(score)
    //     console.log("setting the score in backend")
    //     setReview({...review, score})

    // }

    return (
    <Wrapper> 
        {
            loaded && 
            <Fragment>
            <Column>
                <Main>
                    <Header 
                        attributes={course.data.attributes}
                        reviews={course.included}
                    />
                    {reviewArr}
                </Main>
            </Column>
            <Column>
                <ReviewForm
                    // handleChange = {handleChange}
                    // handleSubmit = {handleSubmit}
                    //setRating = {setRating}
                    attributes = {course.data}
                    setReview = {setReview}
                    setReviews = {setReviews}
                    review = {review}
                />
            </Column>
            </Fragment>
        }
    </Wrapper>

    )
}

export default Course
