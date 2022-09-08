import * as React from 'react';
import Notes from './Notes';
import { Note } from '../modals/note.model';

interface INotesListProps {
    notes: Note[],

}

const NotesList: React.FC<INotesListProps> = ({ notes}) => {
    co
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