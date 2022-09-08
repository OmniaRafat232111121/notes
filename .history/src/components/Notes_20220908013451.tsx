import * as React from 'react';
import Note from '../modals/'
interface INotesProps {
    note:Note
}

const Notes: React.FunctionComponent<INotesProps> = (props) => {
  return (
  <div>Note Card</div>
  );
};

export default Notes;
