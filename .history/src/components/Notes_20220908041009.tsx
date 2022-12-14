import * as React from 'react';
import {Card,Button} from 'react-bootstrap'
import {Note} from '../modals/note.model'
interface INotesProps {
    note:Note,
    handleDelete: (id: string) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({note}) => {
  return (
    <div className="mb-3">
    <Card style={{backgroundColor: note.color}}>
        <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.text}</Card.Text>
            <Card.Subtitle className="text-muted">{ note.date}</Card.Subtitle>
           
        </Card.Body>
    </Card>
    </div>
  );
};

export default Notes;
