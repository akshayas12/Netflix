import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constant/constant'
import './banner.css'
import axios from '../../axios'
function Banner() {
  const [movies, setMovies] = useState([]); 
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(()=>{
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results);
    setMovies(response.data.results)
  });
  },[]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [movies]);
  
  const currentMovie = movies.length ? movies[currentMovieIndex] : null;
  return (
    <div
    style={{ backgroundImage: `url(${currentMovie ? imageUrl + currentMovie.backdrop_path : ""})` }}

    className='banner'> 
      <div className='content'>
      <h1 className='title'>{currentMovie ? currentMovie.title || currentMovie.name : ""}</h1>        <div className='banner-buttons'>
        <button className='button'>play</button>
        <button className='button'>My List</button>
        </div>
        <h1 className='description'>{currentMovie ? currentMovie.overview : ""}</h1>
        </div>
      <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner
