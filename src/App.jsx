import './App.css';
import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import DropableForm from './components/DropableForm';
import TextInput from './components/TextInput';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

function App() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [droppedComponents, setDroppedComponents] = useState([]);
  const [errors, setErrors] = useState({});

  const dragEndHandle = (event) => {
    const { over, active } = event;
    if (over && active.id) {
      // Add the component to the dropped list only if not already added
      setDroppedComponents((prev) =>
        prev.includes(active.id) ? prev : [...prev, active.id]
      );
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const formSchema = z.object({
    fullname: z.string().min(1, { message: "Full name can't be empty" }),
    email: z.string().email({ message: "Enter Valid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .regex(/[A-Z]/, { message: "Password must have atleast one capital letter" })
      .regex(/[a-z]/, { message: "Password must have atlease one small letter" })
      .regex(/[0-9]/, { message: "Password must have atleast one numeric value" }),

  })
  const handleSubmit = (e) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const newErrors = {};
      result.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");

    }
  }

  // Generate JSON Schema
  const jsonSchema = zodToJsonSchema(formSchema);

  console.log("Generated JSON Schema:", jsonSchema);
  return (
    <DndContext onDragEnd={dragEndHandle}>
      <div>
        <p className="text-center font-bold text-xl mt-5 border-b-2 border-black pb-5">
          Drag and Drop Form Builder
        </p>
      </div>
      <div className="flex justify-between">
        {/* Draggable Form Elements */}
        <div className="draggable h-screen border-r-2 border-black mr-2">
          <p className="font-bold text-center">Form Elements</p>
          <p className="text-sm text-center border-b-2 pb-4">
            Drag the components to build form
          </p>
          <TextInput type="text" label="Fullname" id="fullname" isDraggable />
          <TextInput type="email" label="Email" id="email" isDraggable />
          <TextInput type="password" label="Password" id="password" isDraggable />
        </div>

        {/* Droppable Form */}
        <div className="droppable flex-1 mr-5 h-screen">
          <DropableForm
            id="droppable-form"
            droppedComponents={droppedComponents}
            formData={formData}
            onChange={onChange}
            errors={errors}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </DndContext>
  );
}

export default App;
