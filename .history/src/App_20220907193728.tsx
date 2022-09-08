import React,{useState} from 'react';
import './App.css';
import {Note} from "./modals/note.model"
function App() {
  const [notes,setNotes]=useState<Note[]>([{
   id:(new Date).toString(),
   title:"Meetings",
   text:"Scheduling meeting with UI/UX Team is most important",
   color:'#dfdfdf',
   date:(new Date).toString()
  }]);
  
  return (
   <>
   <
   </>
  );
}

export default App;
