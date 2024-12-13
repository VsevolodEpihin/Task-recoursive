import { useEffect, useState } from 'react';

import { TasksDto } from '../../types/TasksDtoApi';
import Task from '../../components/Task/Task';

const getTasksResponse = async () => [
  {
      text: 'убрать дом'
  },
  {
      text: 'накормить семью',
      tasks: [
          {
              text: 'cходить в магазин',
              tasks: [
                  {
                      text: 'купить свеклу',
                      tasks:[
                        {
                          text: 'посмотреть срок годности'
                        }
                      ]
                  },
                  {
                      text: 'купить курицу',
                      tasks:[
                        {
                          text: 'посмотреть срок годности'
                        }
                      ]
                  },
                  {
                      text: 'купить сметану',
                      tasks:[
                        {
                          text: 'посмотреть срок годности'
                        }
                      ]
                  }
              ]
          },
          {
              text: 'сварить борщ',
          },
      ]
  },
]

const ListTask = () => {
  const [tasks, setTasks] = useState<TasksDto[] | null>(null);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getTasks= async () => {
      try{
        const response = await getTasksResponse()
        setTasks(response)
      } catch(error) {
        setError(error)
      }
    }

    getTasks()
  }, [])

  return(
    <div>
      {error && <p>{error}</p>}
      {tasks && tasks.map((task) => {
        return(
          <div>
            <Task text={task.text} tasks={task.tasks}/>
          </div>
        )
      })}
    </div>
  )
}

export default ListTask;
