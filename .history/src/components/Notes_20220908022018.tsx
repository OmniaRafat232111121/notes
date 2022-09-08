import * as React from 'react';
import {Card} from 'react-bootstrap'
import {Note} from '../modals/note.model'
interface INotesProps {
    note:Note
}

const Notes: React.FunctionComponent<INotesProps> = ({note}) => {
  return (
<div className="mb-3 ">
     <Card className="p-">
        <Card.Title >
            {note.title}
        </Card.Title>
        <Card.Text>
            {note.text}
        </Card.Text>
        <Card.Subtitle className="text-muted">
         {note.date}
        </Card.Subtitle>
     </Card>

</div>
  );
};

export default Notes;
