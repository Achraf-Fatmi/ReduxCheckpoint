import React,{useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {useDispatch} from 'react-redux';

function  AddTask() {
    const dispatch =useDispatch()
    const [newTask,setNewTask]=useState('')
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const AddFunc=()=>{
        if (newTask.trim()){
            dispatch({type:'add', payload:newTask})
            handleClose()
        }
    }
    return (
      <>
      <div style={{display:'flex' , justifyContent:'center'}}>
        <Button  variant="primary" onClick={handleShow}>
          Add task
        </Button>
        </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>New task</Form.Label>
    <Form.Control type="text" placeholder="add task here"  onChange={e=>setNewTask(e.target.value)}/>
  </Form.Group>

</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={AddFunc}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default AddTask;
