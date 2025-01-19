
import './App.css'
import DropableForm from './components/DropableForm'
import Form from './components/Form'
import { DndContext } from '@dnd-kit/core'
import TextInput from './components/TextInput'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: ""
  })

  const dragEndHandle = (event) => {
    const { over, active } = event;
    if (over) {
      // alert("Hello world");
      console.log("yay")
    }
  }
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  return (
    <DndContext onDragEnd={dragEndHandle} >
      <div>
        <p className='text-center font-bold text-xl mt-5 border-b-2 border-black pb-5'>Drag and Drop Form Builder</p>
      </div>
      <div className="flex justify-between">
        <div className="draggable h-screen border-r-2 border-black mr-2">
          <p className='font-bold text-center'>Form Elements</p>
          <p className='text-sm text-center border-b-2 pb-4'>Drag the componenets to build form</p>
          <TextInput label="Fullname" name="fullname" type="text" value={formData.fullname} onChange={onChange} id="fullname" />
          <TextInput label="Email" name="email" type="email" value={formData.email} onChange={onChange} id="email" />
        </div>
        <div className="droppable flex-1 mr-5 h-screen">
          <DropableForm id="droppable-form" />
        </div>
      </div>
    </DndContext>
  )
}

export default App
