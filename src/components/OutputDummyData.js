import React from 'react'
import classes from './OutputDummyData.module.css'

const OutputDummyData = (props) => {
  return (
    <React.Fragment>
        <li className={classes.movie}>
            <h2>{props.title}</h2>
            <h3>{props.movieText}</h3>
            <p>{props.releaseDate}</p>
        </li>
           
    </React.Fragment>
  )
}

export default OutputDummyData