import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import NotesList from './components/NotesList';
import {Note} from "./modals/note.model"
import {Container,Row,Col} from 'react-bootstrap';
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
   <Header/>
   <Container className="mt-5">
    <Row>
      <Col>
      <NotesList notes={notes} setNotes={setNotes}/>
      </Col>
    </Row>
   </Container>
   </>
  );
}

export default App;
