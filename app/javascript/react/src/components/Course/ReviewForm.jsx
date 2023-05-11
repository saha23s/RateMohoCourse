import styled from 'styled-components';
import Gray from './Stars/Gray';
import Selected from './Stars/Selected';
import Hover from './Stars/Hover';

import React, { useState, useEffect, useRef } from "react";
import { Fragment } from "react";
import axios from 'axios';
import Review from './Review'; 

const Field = styled.div`
  border-radius: 4px;

  input {
    width: 96%;
    min-height:50px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
  textarea {
    width: 100%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`
const RatingBoxTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`

const ReviewWrapper = styled.div`
  background:white;
  padding:20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom:80px;
  border-left: 1px solid rgba(0,0,0,0.1);
  height: 100vh;
  padding-top: 100px;
  background: black;
  padding-right: 80px;
`

const ReviewHeadline = styled.div`
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: #fff;
`

const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #71b406;
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`
const ReviewForm = (props) => {
  const [rating, setRating] = useState(props.review.score1);
  const [hoverRating, setHoverRating] = useState(0);
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input
          type="radio"
          value={score}
          name="rating"
          checked={rating === score} // Compare with the current rating state
          onChange={() => setRating(score)}
          id={`rating-${score}`}
        />
        <label htmlFor={`rating-${score}`} style={{ position: 'relative' }}>
          {score <= (hoverRating || rating) ? <Selected /> : <Gray />}
        </label>
      </Fragment>
    );
  });

  
  const [title, setTitle] = useState(props.review.title);
  const [description, setDescription] = useState(props.review.description);
  const inputRef = useRef(null);
  let reviews; 

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    }
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit called');
    console.log('title:', title);
    console.log('description:', description);
    console.log('rating:', rating);
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken
    console.log(props)
    const course_id = props.attributes.id
    console.log('course_id:', course_id)
    //add a debugger here
    debugger; 

    //check the type of the params passed in axios 
    typeof(title); 
    typeof(description); 
    axios
      .post('/api/v1/reviews', { title, description, course_id , score1: rating})

      .then((resp) => { //never entering here ??
        console.log('idk man');
        console.log(rating);
        console.log('resp:', resp);
        console.log('props', props);
        console.log('props.included:', props.attributes.relationships.reviews.data);
        const included = [...props.attributes.relationships.reviews.data, resp.data.data];
        reviews = included.map((item) => {
          // I am not sure if we should include setCourse() state here or not
          
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            //console.log('item:', item)
          );
        });
        
        console.log('reviews in reviewfrom:', reviews);
        props.setReviews(reviews); //checking setReviews state
        setTitle("");
        setDescription("");
        setRating(0);
        debugger
      })
      .catch((error) => {
        console.log("error in axios post request:", error);
      });
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field>
          <input
            ref={inputRef}
            onChange={handleChange}
            value={title || ''}
            type="text"
            name="title"
            placeholder="Title"
          />
          </Field>
          <Field>
          <input
            onChange={handleChange}
            value={description || ''}
            type="text"
            name="description"
            placeholder="Description"
          />
          </Field>
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
            <RatingBoxTitle>Rate This Course</RatingBoxTitle>
            <div
            //make the stars fit in the div
              
              style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center' }}
              onMouseLeave={() => setHoverRating(0)}
            >
              {ratingOptions}
              {hoverRating > 0 && <Hover />}
            </div>
          </div>
        </div>
        <SubmitBtn>Submit your review</SubmitBtn>
        {/* <button type="submit">Submit your review</button> */}
      </form>
    </div>
  ); 
};

export default ReviewForm;
