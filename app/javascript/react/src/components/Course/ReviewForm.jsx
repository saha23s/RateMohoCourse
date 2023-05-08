import styled from 'styled-components';
import Gray from './Stars/Gray';
import Selected from './Stars/Selected';
import Hover from './Stars/Hover';

import React, { useState, useEffect, useRef } from "react";
import { Fragment } from "react";
import axios from 'axios';


const ReviewForm = (props) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input type="radio" value={score} name="rating" checked = {props.review.score == score} onChange={() => setRating(score)} id={`rating-${score}`} />
        <label htmlFor={`rating-${score}`} style={{ position: 'relative' }}>
          {score <= (hoverRating || rating) ? <Selected /> : <Gray />}
        </label>
      </Fragment>
    );
  });

  
  const [title, setTitle] = useState(props.review.title);
  const [description, setDescription] = useState(props.review.description);
  const inputRef = useRef(null);

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
   
  //whatever the fuck  
//   setRating = (score) => {
//     e.preventDefault();// prolly not needed as per the vid
//     //set a debugger 
//     console.log(score)
//     console.log("setting the score in backend")
//     setReview({...review, score})

// }
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
      .post('/api/v1/reviews', { title, description, course_id , rating})

      .then((resp) => { //never entering here ??
        console.log('idk man');
        console.log(rating);
        console.log('resp:', resp);
        console.log('props', props);
        console.log('props.included:', props.attributes.relationships.reviews.data);
        const included = [...props.attributes.relationships.reviews.data, resp.data.data];
        const reviews = included.map((item) => {
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
          <input
            ref={inputRef}
            onChange={handleChange}
            value={title || ''}
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            onChange={handleChange}
            value={description || ''}
            type="text"
            name="description"
            placeholder="Description"
          />
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
            <div style={{ marginBottom: '10px' }}>Rate This Course</div>
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
        <button type="submit">Submit your review</button>
      </form>
    </div>
  ); 
};

export default ReviewForm;
