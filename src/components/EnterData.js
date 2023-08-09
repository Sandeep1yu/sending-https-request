import React, {useRef} from 'react'
import classes from './EnterData.module.css'



const EnterData = (props) => {
  const titleRef = useRef();
  const movieTextRef = useRef();
  const releaseDateRef = useRef();


  const movieSubmitHandler = (event)=> {
    event.preventDefault();
    

    const movie = {
      title: titleRef.current.value,
      movieText: movieTextRef.current.value,
      releaseDate: releaseDateRef.current.value,

    }
    props.onAddMovie(movie);
  }
  return (
    
    <form  onSubmit={movieSubmitHandler} className={classes.enterData}>
        <div>

            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleRef}/>

            <label htmlFor="movieText">MovieText</label>
            <input type="textarea" id="movieText" ref={movieTextRef}/>

            <label htmlFor="releaseDate">Release Date</label>
            <input type="text" id='releaseDate' ref={releaseDateRef}/>
        
            <button>Add Movies</button>
        </div>

        
        
    </form>
  )
}

export default EnterData