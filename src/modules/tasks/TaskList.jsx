import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskCard from './TaskCard'
import {useSelector} from 'react-redux';


function TaskList() {

  //Get data from task store
  const tasksState = useSelector(state => state.tasks)
  console.log("Desde redux", tasksState)
  


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
