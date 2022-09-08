import * as React from 'react';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {Note} from '../modals/note.model'
interface INotesProps {
    note:Note
}

const Notes: React.FunctionComponent<INotesProps> = ({note}) => {
  return (
<div className="mb-3">
     <Card>
        <Card.Title>
            {note.ti}
        </Card.Title>
     </Card>

</div>
  );
};

export default Notes;
