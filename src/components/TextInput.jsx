import React from "react";
import { useDraggable } from "@dnd-kit/core";

const TextInput = React.memo(({ label, name, type, value, error, onChange, id }) => {
    const { attributes, listeners, transform, setNodeRef } = useDraggable({ id });
    // console.log("transform: ", transform);
    console.log(value)
    const style = {
        transform: `translate3d(${transform?.x || 0}px,${transform?.y || 0}px,0)`,
        cursor: "grab",
    }
    return (
        <div className="border border-solid border-gray-700 p-5 m-3 w-60" ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <label htmlFor={name}>{label}</label> <br />
            <input className="border border-solid border-green-500" type={type} name={name} value={value} onChange={onChange} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
})

export default TextInput;