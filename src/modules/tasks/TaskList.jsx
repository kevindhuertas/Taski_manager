import TaskCard from './TaskCard'
import {useSelector} from 'react-redux';
import { useParams } from 'react-router';


function TaskList() {
  //Get data from task store
  const params = useParams()
  let tasksState = [];
  if(params){
    tasksState = useSelector(state => state.tasks.filter(task=> task.proyectId == params.id ))
  }
  

  


  // const {tasks} = useContext(TaskContext)
  if (tasksState.lenght === 0) {
    return <h1>Todavia no hay tareas</h1>;
  }
  return (
    <div className='grid grid-cols-1 gap-2'>
      {tasksState.map((task) => (
       <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default TaskList;
