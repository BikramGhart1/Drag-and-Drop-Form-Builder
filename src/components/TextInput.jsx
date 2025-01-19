import React from "react";
import { useDraggable } from "@dnd-kit/core";

const TextInput = React.memo(({type, label, id, isDraggable, value, onChange }) => {
  const { attributes, listeners, transform, setNodeRef } = isDraggable
    ? useDraggable({ id })
    : {};

  const style = isDraggable
    ? {
        transform: `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`,
        cursor: "grab",
      }
    : {};

  return (
    <div
      ref={isDraggable ? setNodeRef : null}
      style={style}
      {...(isDraggable ? { ...attributes, ...listeners } : {})}
    >
      <div className={`p-3 m-3 w-60 ${isDraggable ? "border-dashed border-2 border-gray-700" : "mb-4"}`}>
        <label htmlFor={id}>{label}</label>
        {!isDraggable && (
          <>
            <br />
            <input
              className="border border-solid border-green-500 p-2 mt-2"
              type={type}
              id={id}
              name={id}
              value={value}
              onChange={onChange}
            />
          </>
        )}
      </div>
    </div>
  );
});

export default TextInput;
