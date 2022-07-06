// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  getRandomNumberFun = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(preState => ({count: preState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.getRandomNumberFun}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
