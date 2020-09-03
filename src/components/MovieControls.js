import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalstate'

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovie,
    addWatchedMovie,
    removeMovieWatched,
    addBackToWatchlist,
  } = useContext(GlobalContext)
  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button className='ctrl-btn' onClick={() => addWatchedMovie(movie)}>
            <i className='fa-fw far fa-eye'></i>
          </button>
          <button className='ctrl-btn' onClick={() => removeMovie(movie.id)}>
            <i className='fas fa-times'></i>
          </button>
        </>
      )}
      {type === 'watched' && (
        <>
          <button
            className='ctrl-btn'
            onClick={() => addBackToWatchlist(movie)}
          >
            <i className='fa-fw far fa-eye-slash'></i>
          </button>
          <button
            className='ctrl-btn'
            onClick={() => removeMovieWatched(movie.id)}
          >
            <i className='fas fa-times'></i>
          </button>
        </>
      )}
    </div>
  )
}
