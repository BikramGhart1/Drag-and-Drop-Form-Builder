import React from "react";
import { useDroppable } from "@dnd-kit/core";
import TextInput from "./TextInput";

export default function DropableForm({ id, droppedComponents, formData, onChange, errors, handleSubmit }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <form
      className="p-8 border border-dashed border-green-500 mt-4 h-4/5"
      ref={setNodeRef}
      onSubmit={handleSubmit}
    >
      <h2>Drag components here</h2>
      {droppedComponents.map((component,index) => (
        <div>
        <TextInput
          type={component}
          key={index}
          id={component}
          label={component.charAt(0).toUpperCase() + component.slice(1)}
          value={formData[component]}
          onChange={onChange}
        />
        {
            errors[component] && (
                <p className="text-red-500">{errors[component]}</p>
            )
        }
        </div>
      ))}
      {
        droppedComponents.length>0 && (
            <input className="p-2 bg-green-700 text-white rounded-lg cursor-pointer" type="submit" value="Submit" />
        )
      }
    </form>
  );
}
