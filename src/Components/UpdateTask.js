import React,{useState} from 'react'
import {Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
const UpdateTask = ({task}) => {
    
    const [show, setShow] = useState(false);
    const [name,setName]=useState(task.name)
    const dispatch=useDispatch();
    const Update=(id, name)=>{
        if(name.trim())  {
          dispatch({type :"update", payload : {name,id}})}
          handleClose()
      }
      const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            
            <Button style={{margin : 5}} variant="primary" onClick={handleShow}>Update</Button>{' '}
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Updating task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Update task</Form.Label>
    <Form.Control type="text" value={name}  onChange={e=>setName(e.target.value)}  />
  </Form.Group>

</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>Update(task.id,name)}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
}

export default UpdateTask;

