import * as React from 'react';
import Notes from './Notes';
import { Note } from '../modals/note.model';

interface INotesListProps {
    notes: Note[],
    handleDelete:(id:s)


}

const NotesList: React.FC<INotesListProps> = ({ notes}) => {
    const handleDelete=(id:string)=>{

    }
    const renderNotes = ():JSX.Element[] => {
        return notes.map(note => {
            return <Notes key={note.id} note={note} handleDelete={handleDelete} />
        })
    }
    return (
        <>
            <h2 className="mt-3">Notes</h2>
            <div>{ renderNotes() }</div>
        </>
  );
};

export default NotesList;