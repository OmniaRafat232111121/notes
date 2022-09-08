import * as React from 'react';
import {Note} from "../modals/note.model"
interface INotesListProps {
    notes:Note[]
}

const NotesList: React.FC<INotesListProps> = ({notes}) => {
  return (
    <>
    <h2 className="mt-3">Notes</h2>
    <div>
        {ren}
    </div>
    </>
  )
};

export default NotesList;
