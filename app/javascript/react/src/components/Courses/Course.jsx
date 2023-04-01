import React from "react";
import {BrowserRouter as Router,Link} from 'react-router-dom';

const Course = (props) => {
    return(
        <div className="card">
            <div className="course-name">{props.attributes.name}</div>
            <div className="course-rating">{props.attributes.avg_score}</div>
            <div className="course-link">
                <Link to={`/courses/${props.attributes.slug}`}> View Course </Link>
            </div>
        </div>
    )
}

export default Course