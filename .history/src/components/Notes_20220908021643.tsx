import * as React from 'react';
import {Note} from '../modals/note.model'
interface INotesProps {
    note:Note
}

const Notes: React.FunctionComponent<INotesProps> = ({note}) => {
  return (
<div className="mb-3">
     <Card>
        <Card
     </Card>

</div>
  );
};

export default Notes;
