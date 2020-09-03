import React from 'react'

import { ResultCard } from './ResultCard'

export class Add extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      results: [],
    }
  }

  onChange = (event) => {
    event.preventDefault()
    const { value } = event.target
    this.setState({
      query: value,
    })
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          this.setState({
            results: data.results,
          })
        } else {
          this.setState({
            results: [],
          })
        }
      })
  }
  render() {
    const { results } = this.state
    return (
      <div className='add-page'>
        <div className='container'>
          <div className='add-content'>
            <div className='input-wrapper'>
              <input
                type='text'
                placeholder='Search for a movie'
                value={this.state.query}
                onChange={this.onChange}
              />
            </div>
            {results.length > 0 && (
              <ul className='results'>
                {results.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
