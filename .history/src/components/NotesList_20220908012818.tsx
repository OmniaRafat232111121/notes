import * as React from 'react';

interface INotesListProps {
    notes:N
}

const NotesList: React.FC<INotesListProps> = (props) => {
  return (
    <>
    <h2 className="mt-3">Notes</h2>
    </>
  )
};

export default NotesList;
