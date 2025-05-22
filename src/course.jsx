import React from "react";
import PropTypes from "prop-types";
class CourseCard extends React.Component
{
   
    render()
    {
        return(
            <div>
                <p>{title}</p>
                <p>{duration}</p>
                <p>{instructor}</p>
            </div>

        );
    }
      CourseCard.propTypes={
        title:PropTypes.string.isRequired,
        duration:PropTypes.number.isRequired,
        instructor:PropTypes.string.isRequired
    };
}
export default CourseCard;