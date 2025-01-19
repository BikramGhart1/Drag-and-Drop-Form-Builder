import React from 'react'
import { useDraggable, useDroppable } from '@dnd-kit/core'

export default function DropableForm({ id }) {
    const { setNodeRef } = useDroppable({ id });
    return (
        <form className='p-8 border border-dashed border-green-500 mt-4 h-4/5' ref={setNodeRef}>
            <h2>Drag components here</h2>
        </form>
    )
}
