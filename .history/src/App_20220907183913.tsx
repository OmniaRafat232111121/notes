import React from 'react';
import './App.css';
function App() {
  const [notes,setNotes]=useState<{
    id:string,
    title:string,
    text:string,
    color:string,
    date:string,
  }[]>([{
   id:(new Date).toString(),
   title:"Meetings",
   te
  }]);
  return (
    <div className="App">
       app
       {name}
    </div>
  );
}

export default App;
