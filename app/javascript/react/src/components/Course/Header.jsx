import React from 'react'
import styled from 'styled-components'
// import Rating from '../Rating/Rating'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:30px;
    h1{
        font-size: 30px; 
    }
`



const UserReviewCount = styled.div`
  font-size: 18px;
  padding:10px 0;
`

const ScoreOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
`

const Header = (props) => {
  const { name, avg_score } = props.attributes
  const total = props.reviews.length 

  return (
    <Wrapper>
      <h1>{name}</h1>
      <div>
        <UserReviewCount>
          {/* <span className="review-count">{reviews ? reviews.length : 0}</span> user reviews */}
        </UserReviewCount>
        {/* //creating a new one to follow the video  */}
        <div className="totalReviews">{total} User Reviews </div>
        {/* <Rating score={average} /> */}
        {/* <ScoreOutOf>{average.toFixed(1)} out of 5 stars</ScoreOutOf>        */}
        <div className="totalOutof">{avg_score} out of 5 </div>
      </div>
    </Wrapper> 
  )
}

export default Header