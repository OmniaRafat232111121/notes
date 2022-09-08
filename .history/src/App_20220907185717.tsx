import React from 'react';
import './App.css';
interface Note{

}
function App() {
  const [notes,setNotes]=useState<{
    
  }[]>([{
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
