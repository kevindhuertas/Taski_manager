import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskCard from './TaskCard'


function TaskList() {
  const {tasks} = useContext(TaskContext)
  console.log(tasks)

  if (tasks.lenght === 0) {
    return <h1>Todavia no hay tareas</h1>;
  }

  return (
    <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
      {tasks.map((task) => (
       <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default TaskList;
