import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import UpdateTask from "./UpdateTask";
import { Toast, Button } from "react-bootstrap";
import './ListTask.css'
const ListTask = () => {
    
   
    const dispatch=useDispatch();
    const tasks = useSelector(state => state.reducer.tasks)
    const funcDel =(id)=>{
        dispatch({type:'delete',payload:id})

    }
    
    const [state, setState] = useState('All')
    return (
        <div>
        <div style={{margin:10,display:'flex', justifyContent:'center'}}>
              <Button onClick={()=>setState("All")} style={{margin:5}} variant="outline-primary">All</Button>{' '}
              <Button onClick={()=>setState("Not Done")} style={{margin:5}} variant="outline-secondary">Not Done</Button>{' '}
              <Button onClick={()=>setState("Done")} style={{margin:5}} variant="outline-success">Done</Button>{' '}
        </div>
        <h2 style={{fontStyle:'oblique', display:'flex', justifyContent:'center'}}>{state}</h2>
        <div className="task-card">
            {
            (state=="Done"?tasks.filter(task=>task.isDone==true):
            state=="Not Done"?tasks.filter(task=>task.isDone==false):tasks).map((task, i)=>{
                return(
            
                    <div className="Task" key={i}>
            
                        <>
         <Toast style={{width:600}}>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Task Description:</strong>

                <UpdateTask task={task}/>
                <Button style={{margin : 5}} variant="danger" onClick={()=>funcDel(task.id)}>Delete</Button>
            </Toast.Header>
            <Toast.Body style={task.isDone?{backgroundColor:'green',color:'white'}:{}} onClick={()=>dispatch({type:'taskStatus', payload:task.id})}> {task.name} </Toast.Body>
            
          </Toast>
          
                        
                        </>
                    </div>
                )
            })}
            
        </div>
        </div>
    )
}

export default ListTask



// {<input type="text" value={name} onChange={(e)=>setName(e.target.value)}