// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {clickedStatus: true}

  onClickButton = () => {
    this.setState(prevState => ({
      clickedStatus: !prevState.clickedStatus,
    }))
  }

  getButtonText = () => {
    const {clickedStatus} = this.state

    return clickedStatus === true ? 'Light mode' : 'Dark Mode'
  }

  changeBackground = () => {
    const {clickedStatus} = this.state

    return clickedStatus ? 'darkMode' : 'lightMode'
  }

  render() {
    const {clickedStatus} = this.state
    const buttonText = this.getButtonText()
    const backgroundMode = this.changeBackground()

    console.log(clickedStatus)
    return (
      <div className="bgContainer">
        <div className={backgroundMode}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
