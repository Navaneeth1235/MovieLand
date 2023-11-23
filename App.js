import React, { useState } from 'react';
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard.jsx'

//85699bcb


const movie={
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}
const API_URL=' http://www.omdbapi.com?apikey=85699bcb'
const App=()=>{
  const[movies,setMovies]=useState([]);
  const[searchTerm, setSearchTerm]=useState([])
  
  const searchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();

    setMovies(data.Search);

  }

  useEffect(()=>{
    searchMovies();

    },[]);
  return(
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />

        <img
        src={SearchIcon}
        alt="search"
        onClick={()=>searchMovies(searchTerm)}
        />

      </div>

      
       { movies?.length >0
        ?(
          <div className="container">
            {movies.map((movie)=> (
              <MovieCard movie={movie} />
            ))}
            <MovieCard movie={movie} />
            </div>
        ):(
        <div>
          <h2>No Movies Found</h2>
        </div>
        )}

      <div className='container'>
        

        

      </div>

    </div>
    


  );
}
export default App;
