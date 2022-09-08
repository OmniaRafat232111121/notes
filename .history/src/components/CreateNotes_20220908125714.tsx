import * as React from 'react';
import { Form } from 'react-bootstrap';

interface ICreateNotesProps {
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
  return (
<>
<h2>Create Notes</h2>
<Form className="mt-3 mb-3">
    <Form.Group className="mt-3 mb">
<Form.label>Title</Form.label>
</Form.Group>
</Form>
</>
  );
};

export default CreateNotes;
