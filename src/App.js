import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import DummyData from './components/DummyData';
import EnterData from './components/EnterData';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const fetchMovieData = useCallback(async()=> {
    setLoading(true);
    setError(null);
    try {

      const response = await fetch('https://section-fifteen-default-rtdb.firebaseio.com/movies.json');
      if(!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json();

      const loadedMovies = [];
      
      for(const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          movieText: data[key].movieText,
          releaseDate: data[key].releaseDate

        })

      }
        
       
       setMovies(loadedMovies);
      }catch (error){
        setError(error.message);
        
      }
      setLoading(false);

      
     
  }, [])

  useEffect(()=> {
    fetchMovieData();
  },[fetchMovieData])

  const addMovieHandler = async(movie)=> {
    const response = await fetch('https://section-fifteen-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = response.json();
    console.log(data);
  }

  let content = <p>No movies found!</p>;
  if(movies.length > 0) {
    content =  <DummyData movies={movies} />
  }
  if(error) {
    content =  <p>{error}</p>
  }
  if(loading) {
    content =  <p>Loading...</p>
  }
    return (
    <React.Fragment>
    <section>
      <EnterData onAddMovie={addMovieHandler}/>
    </section>

    <section>
    <button onClick={fetchMovieData}>Fetch Movie</button>

    </section>

    <section>

       {/* {!loading && movies.length>0 &&<DummyData movies={movies} />}
       {!loading && movies.length===0 && !error && <p>No movies found!</p>}
       {!loading && error && <p>{error}</p> }
       {loading && <p>Loading....</p>} */}
       {content}
    </section>
    </React.Fragment>
  );
}

export default App;
