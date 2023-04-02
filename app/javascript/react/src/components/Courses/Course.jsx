import React from "react";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff
`
const CourseName = styled.div`
    padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a{
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 40px;
        border: 1 px solid #000;
        text-decoration: none;
        width: 100%;
    }
`

const Course = (props) => {
    return(
        <Card>
            <CourseName>{props.attributes.name}</CourseName>
            <div className="course-rating">{props.attributes.avg_score}</div>
            <LinkWrapper>
                <Link to={`/courses/${props.attributes.slug}`}> View Course </Link>
            </LinkWrapper>
        </Card>
    )
}

export default Course