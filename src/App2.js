import React, { Component } from 'react'

export default class App2 extends Component {
  render() {
    return (
      <div className='dvc'>
<h2>This is Created Using Class Component</h2>
        <p className='fpara'>This IS Done By External CSS</p>
        <p style={{color:"blue"}}>This Is done By inline CSS</p>
      </div>
    )
  }
}