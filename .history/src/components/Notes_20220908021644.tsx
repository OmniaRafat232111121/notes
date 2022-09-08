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
        <CardHeader.T
     </Card>

</div>
  );
};

export default Notes;
