import React, { useState } from 'react';
import './App.css';
import App1 from "./App1"
import App2 from './App2';
function App(){
  const [fstate,setFstate]=useState(false)
  const [Cstate,setCstate]=useState(false)
  return(
    <>
    <h1 className='header'>Styling Using function and Class Component</h1>
       <div className='button'>
 <button className='btn1' onClick={()=>{setFstate(!fstate)}}>To See Styling functional in Component</button>
 <button className='btn2' onClick={()=>setCstate(!Cstate)}>To See Styling Class in Component</button>
 </div>
 { fstate ? <App1/> : ""}
 { Cstate && <App2/>}
    </>
  )
}

export default App;
