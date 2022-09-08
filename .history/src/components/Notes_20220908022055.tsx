import * as React from 'react';
import {Card} from 'react-bootstrap'
import {Note} from '../modals/note.model'
interface INotesProps {
    note:Note
}

const Notes: React.FunctionComponent<INotesProps> = ({note}) => {
  return (
<div className="mb-3 ">
     <Card className="p-4">
        <Card.Title >
            {note.title}
        </Card.Title>
        <Card.Text>
            {note.text}
        </Card.Text>
        <Card.Subtitle className="text-muted">
         {note.date}
        </Card.Subtitle>
        <Button classame="mb-3">

        </Button>
     </Card>

</div>
  );
};

export default Notes;
