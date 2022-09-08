import * as React from 'react';
import {Card} from 'react-bootstrap'
import {Note} from '../modals/note.model'
interface INotesProps {
    note:Note
}

const Notes: React.FunctionComponent<INotesProps> = ({note}) => {
  return (
<div className="mb-3">
     <Card>
        <Card.Title>
            {note.title}
        </Card.Title>
        <Card.text>
            {note.text}
        </Card.text>
        <Card.s
     </Card>

</div>
  );
};

export default Notes;
