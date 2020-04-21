import React, { Component } from 'react'
import Data from './ratings.json'

export class App extends Component {
  render() {
    return (
      <div className="App">
        { Data.map(post => {
            return(
              <div className="farra" key={post.id}>
                <p>{post.name} | {post.rating} | {post.likes.sport}</p>
              </div>
            )
        })}
      </div>
    )
  }
}

export default App
