import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

// intial state
const initialState = {
  watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
}

// Context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state])

  //   actions
  function addMoviesToWatchlist(movie) {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
  }

  function removeMovieFromWatchlist(id) {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id })
  }

  function addMovieToWatched(movie) {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie })
  }

  function removeMovieFromWatched(id) {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHED', payload: id })
  }

  function addMovieBackToWatchlist(movie) {
    dispatch({ type: 'ADD_MOVIE_BACK_TO_WATCHLIST', payload: movie })
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovies: addMoviesToWatchlist,
        removeMovie: removeMovieFromWatchlist,
        addWatchedMovie: addMovieToWatched,
        removeMovieWatched: removeMovieFromWatched,
        addBackToWatchlist: addMovieBackToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
