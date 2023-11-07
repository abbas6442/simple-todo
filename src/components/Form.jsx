import React, { useState } from 'react'
import "./styles/Form.css"

function Form(props) {
  const [input,setInput]=useState("")
  const PressEnter =(e)=>{
    if (e.keyCode==13) {
          props.addList(input)
      setInput("")
    }
  }
  return (
   <div className="input-box">
    <input type="text" placeholder='Type'
    value={input}
     onChange={(e)=>{
      setInput(e.target.value)
    }}
    onKeyDown={PressEnter}/>
    <button onClick={()=>{
      props.addList(input)
      setInput("")
    }}>+</button>
   
   
   </div>
  )
}

export default Form