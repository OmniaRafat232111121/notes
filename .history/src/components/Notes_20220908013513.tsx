import * as React from 'react';
import Note from '../modals/note.model'
interface INotesProps {
    note:Note
}

const Notes: React.FunctionComponent<INotesProps> = ({n}) => {
  return (
  <div>Note Card</div>
  );
};

export default Notes;
