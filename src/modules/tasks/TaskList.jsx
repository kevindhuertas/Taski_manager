import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskCard from './TaskCard'


function TaskList() {
  const {tasks} = useContext(TaskContext)
  if (tasks.lenght === 0) {
    return <h1>Todavia no hay tareas</h1>;
  }
  return (
    <div className='grid grid-cols-1 gap-2'>
      {tasks.map((task) => (
       <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default TaskList;
