import React,{useState} from 'react';
import './App.css';
im
function App() {
  const [notes,setNotes]=useState<Note[]>([{
   id:(new Date).toString(),
   title:"Meetings",
   text:"Scheduling meeting with UI/UX Team is most important",
   color:'#dfdfdf',
   date:(new Date).toString()
  }]);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
