import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
import Data from './ratings.json'

//console.log(Data);

let ratingsSum = 0;
let itemsFound = 0;
const len = Data.length;
let item = null;
for (let i = 0; i < len; i++) {
  item = Data[i];
  

  
    ratingsSum = item.rating + ratingsSum;
    console.log("This is", ratingsSum);
    itemsFound = itemsFound + 1;
 
}

const avgCount = ratingsSum / itemsFound;
console.log("Avg count:", avgCount);



class App extends Component {

  constructor() {
    super();
    this.state = {
      average: avgCount,
    };
  }

  render() {
    return (
      <div className="App">
      <div id="avgCount">
        <h4>Average rating: {this.state.average} </h4>
      </div>
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
