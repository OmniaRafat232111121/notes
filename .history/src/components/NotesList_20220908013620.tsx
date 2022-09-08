import * as React from 'react';
import {Note} from "../modals/note.model"
import Notes "./Notes";
interface INotesListProps {
    notes:Note[]
}

const NotesList: React.FC<INotesListProps> = ({notes}) => {
   const renderNotes=()=>{
     return notes.map(note=>{
        ret <Notes key={note.id} note={note}/>
    })
   }
    return (
    <>
    <h2 className="mt-3">Notes</h2>
    <div>{renderNotes()}</div>
    </>
  )
};

export default NotesList;
