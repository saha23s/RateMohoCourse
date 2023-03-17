import * as React from 'react'
import * as ReactDOM from 'react-dom'
import LoginSignUp from './LoginSignUp';


const Welcome = () => {
    return (
        <div className="App">
          {/* <img src={image} alt='image'></img> */}
          <LoginSignUp />
        </div>
      )
}


document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(<Welcome/>, document.getElementById('welcome'))

})

export default Welcome