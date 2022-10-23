import React from 'react';
import './components.css';

function AddTodo({onReset, onAdd, onSub}) {
  return (
   <div className="buttons" >
   <button
     onClick={onAdd}
     className="addbutton"
   >
     +
   </button>
   <button onClick={onReset} className="resetbutton">
     Reset
   </button>
   <button
     onClick={onSub}
     className="subbutton"
   >
     -
   </button>
 </div>
  )
}

export default AddTodo