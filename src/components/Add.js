import React from 'react'

export class Add extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
    }
  }

  onChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }
  render() {
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
                name='query'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
