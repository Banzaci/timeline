import React, { useState, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import TimeLine, { IItem } from '../timeline';
import Header from '../header'
import { Container, Wrapper, Loader, Error } from './style';
import { TIMELINE } from './query';
import TaskCompleted from '../task-completed';
import TodayDate from '../today-date';
// const [getTimeline, { loading, data }] = useLazyQuery(TIMELINE); //Load on button click
// refetch
// if (networkStatus === 4) return <p>Refetching!</p>;

const App: React.FC = () => {
  const { loading, error, data } = useQuery(TIMELINE, { notifyOnNetworkStatusChange: true });

  const [ tasks, setTasks ] = useState<number[]>([]);

  if (loading) return <Loader>...loading</Loader>;
  if (error) return <Error>{ error.message }</Error>;
  
  const { timeLineById } = data;
  const { booked, departure, today } = timeLineById;
  const { timeline } =  timeLineById;

  const onTaskHandler = (id:number) => {
    setTasks([
      ...tasks,
      id
    ])
  }

  const appendTodayDate = (props:IItem, today: Date) => {
    const { date } = props;
    if (date && today < date) {
      console.log(date, today)
      return (<TodayDate />)
    }
    return null;
  }

  const renderTimeLineItems = () => timeline// { appendTodayDate(props, today) }
    .map((props:IItem, index:number) =>
      <Fragment key={ index }>
        {/* { appendTodayDate(props, today) } */}
        <TimeLine
          { ...props }
          index={ index }
          onTaskHandler={ onTaskHandler }
        />
      </Fragment>
    )

  return (
    <Wrapper>
      <TaskCompleted
        tasks={ tasks }
        timeline={ timeline }
      />
      { booked && <Header { ...booked } marginAnimation/> }
      <Container>{ renderTimeLineItems() }
      </Container>
      { departure && <Header { ...departure } delay="800" /> }
    </Wrapper>
  );
}

export default App;