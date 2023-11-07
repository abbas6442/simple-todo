import Form from "./components/Form"
import './App.css'
import Card from "./components/Card"
import { useState } from "react"

function App() {
  const [list,setList]=useState([])
  const addList =(text)=>{
    if (!text=='') {
      setList([...list,text])
console.log(list);
    }
  }
  const deleteList =(key)=>{
    let newList = [...list]
    newList.splice(key,1)
    setList([...newList])
  }


  return (
    <>
<Form addList={addList}/>
{list.map((item,i)=>{
  return(
    <Card key={i} item={item} deleteList={deleteList}/>
  )

})}

    </>
  )
}

export default App
