import React from 'react';
import { Wrapper } from './style';

type TimeLineProps = {
  task: any,
  id: number
}

type TaskCompletedProps = {
  timeline:TimeLineProps[],
  tasks:number[],
}

const allTasksCompleted = (tasks:number[], timeline:TimeLineProps[]) => {
  if (!tasks.length) return false;
  const numOfTasks = timeline.reduce((acc, current) => {
    const { task, id } = current;
    if (task && task.completed === 0) {
      console.log(tasks, id)
      return { ...acc, ...{
        ...current,
        task: {
          completed: 1
        }
      }}
    }
    return acc
  }, {});

  console.log(numOfTasks)
  return true;
}

const TaskCompleted: React.FC<TaskCompletedProps> = ({ timeline, tasks }: TaskCompletedProps) => {
  const completed = allTasksCompleted(tasks, timeline);
   return (
    <Wrapper>
      { completed && <h1>Completed</h1> }
    </Wrapper>
  );
}

export default TaskCompleted;




// https://www.apollographql.com/docs/react/data/mutations/
// TL example: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/
// https://github.com/bexic/react-without-redux/tree/master/src