import React from 'react'
import OutputDummyData from './OutputDummyData'
import classes from './DummyData.module.css';



// const DUMMY_MOVIE = [
//     {id: 'e1',
//     title: 'The first movie',
//     movieText: 'This movie belongs to the my childhod',
//     releaseDate: '2022-12-25'

//     },

//     {id: 'e2',
//     title: 'The second movie',
//     movieText: 'This is also a good movie',
//     releaseDate: '2023-5-11'

//     }
// ]
const DummyData = (props) => {



    const movieRender = props.movies.map((movie)=> (
        <OutputDummyData 
            key={movie.id}
            title={movie.title}
            movieText = {movie.movieText}
            releaseDate = {movie.releaseDate}

        />
    ))



  return (
    <React.Fragment>
        <ul className={classes.dummyCheez}>
            {movieRender}
        </ul>
    </React.Fragment>
  )
}

export default DummyData
        

        

        
        
       
            