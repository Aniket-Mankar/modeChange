import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {buttonStatus: true}

  onChangeBg = () => {
    this.setState(prevStatus => ({buttonStatus: !prevStatus.buttonStatus}))
  }

  render() {
    const {buttonStatus} = this.state
    const changeText = buttonStatus ? 'Light Mode' : 'Dark Mode'
    const changeBg = buttonStatus ? 'bg-dark' : 'bg-light'
    return (
      <div className="main-container">
        <div className={`card-container ${changeBg}`}>
          <h1 className="head">Click to Change Mode</h1>
          <div>
            <button type="button" onClick={this.onChangeBg} className="button">
              {changeText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
