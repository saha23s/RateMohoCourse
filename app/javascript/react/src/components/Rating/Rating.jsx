import React from 'react'
import styled from 'styled-components'; 

const Wrapper = styled.div`

// for stars to display 
  position: relative;
  display: inline-block;

  .stars {
    color: #fcc201;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  .star-wrapper::before,
  .stars::before {
    font-family: "FontAwesome";
    content: "\f005 \0020 \f005 \0020 \f005 \0020 \f005 \0020 \f005";
  }
`;

const Rating = (props) => {
  const score = (props.score / 5) * 100

  return (
    <Wrapper>
      <span className="stars" style={{ width: score + "%" }}></span>
    </Wrapper>
  )
}

export default Rating