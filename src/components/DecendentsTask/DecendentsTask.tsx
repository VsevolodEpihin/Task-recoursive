import { TasksDto } from '../../types/TasksDtoApi';
import Task from '../Task/Task';

interface DecendentsTaskProps {
  tasks: TasksDto[]
}

const DecendentsTask = ({ tasks }: DecendentsTaskProps) => {
  return(
    <>
      {tasks.map((task, i) => (
        <Task key={i} text={task.text} tasks={task.tasks} />     
      ))}
    </>
  )
}

export default DecendentsTask;
