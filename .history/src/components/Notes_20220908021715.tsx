import * as React from 'react';
i
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
     </Card>

</div>
  );
};

export default Notes;
