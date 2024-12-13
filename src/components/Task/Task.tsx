import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { TasksDto } from '../../types/TasksDtoApi';
import DecendentsTask from '../DecendentsTask/DecendentsTask';

import styles from './Task.module.css';

interface TitleProps {
  text: string;
  tasks: TasksDto[] | undefined;
}

const Task = ({ text, tasks }: TitleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const taskCount = tasks ? ` (+${tasks.length})`  : '';

  return (
    <div className={styles.titleContainer}>
      <div className={styles.titleText} onClick={handleClick}>
        {text}
        {!isOpen && taskCount}
      </div>
      {tasks && (
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames={{
            enter: styles.fadeEnter,
            enterActive: styles.fadeEnterActive,
            exit: styles.fadeExit,
            exitActive: styles.fadeExitActive,
          }}
          unmountOnExit
        >
          <div className={styles.tasksContainer}>
            <DecendentsTask tasks={tasks} />
          </div>
        </CSSTransition>
      )}
    </div>
  );
};

export default Task;
