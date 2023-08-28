import { useState } from 'react'
import ToDoList from './ToDoList';
import './App.css'
function App() {
  const [inputList, setInputList] = useState('')
  const [Items, setItems] = useState([]);
  const itemEvent = (event)=>{
    setInputList(event.target.value);

  }
  const listOfItem = ()=>{
         setItems((oldItems)=>{
          return [...oldItems, inputList];
         })
         setInputList('')
  }
  const deleteItem = (id)=>{
    console.log("delete")
    setItems((oldItems)=>{
      return oldItems.filter((arrayElem, index)=>{
        return index!==id
      })
    })

  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text"  placeholder='Add a item' onChange={itemEvent} value={inputList} />
          <button onClick={listOfItem}>+</button>
          
          <ol>
          {Items.map((itemVal, index)=>{
           return <ToDoList key={index}
            id={index}
            text = {itemVal}
            onSelect ={deleteItem}
            />
            
          })}
           
            
          </ol>
          
        </div>
      </div>
    </>
  )
}

export default App
