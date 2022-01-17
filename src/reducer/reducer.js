import {v4 as uuidv4} from 'uuid'

const initialState={
    tasks:[
        {id:uuidv4(),name:'first task',isDone:false},
        {id:uuidv4(),name:'second task',isDone:false}
    ]}

const reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case 'add':
            
            return({tasks:[{id: uuidv4(),name:payload, isDone:false},...state.tasks ]})
        case'delete':
        return ({tasks:[...state.tasks].filter(task=>task.id!==payload)})

        case'taskStatus':
        return ({tasks:[...state.tasks].map(task=>task.id==payload?{...task,isDone:!task.isDone}:task)})
    
       
            case 'update':
                return ({tasks :[...state.tasks].map(tasks => tasks.id === payload.id? {...tasks, name : payload.name}: tasks )})
                default:
            return (state);
    }
}

export default reducer;