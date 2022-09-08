import * as React from 'react';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap'

interface ICreateNotesProps {
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
  const titleref=React.useRef<HTMLTextAreaElement | null>(null);
  const textref=React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef=React.useRef<HTMLTextAreaElement | null>(null);
  co
  return (
<>
<h2>Create Notes</h2>
<Form className="mt-3 mb-3" onSubmit={()=>handleSubmit(e)}>
    <Form.Group className="mt-3 mb-3" controlId='formBasicTitle'>
     <Form.Label>Title</Form.Label>
     <Form.Control type="text" placeholder='Enter Title for Notes' ref={ titleref }>

     </Form.Control>
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control placeholder="Enter your notes" as="textarea" rows={3} ref={ textref } />
   </Form.Group>

   <Form.Group className="mb-3">
  <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
  <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose your color" ref={colorRef}/>
  </Form.Group>
<Button type="submit" variant="danger">Submit</Button>
</Form>
</>
  );
};

export default CreateNotes;
