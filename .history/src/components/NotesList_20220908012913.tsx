import * as React from 'react';
impo
interface INotesListProps {
    notes:Note[]
}

const NotesList: React.FC<INotesListProps> = ({notes}) => {
  return (
    <>
    <h2 className="mt-3">Notes</h2>
    </>
  )
};

export default NotesList;
