import React, { useState, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import TimeLine, { IItem } from '../timeline';
import Header from '../header'
import { Container, Wrapper, Loader, Error } from './style';
import { TIMELINE } from './query';

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

  const renderTimeLineItems = () => timeline
    .map((props:IItem, index:number) =>
      <Fragment key={ index }>
        <TimeLine
          { ...props }
          index={ index }
          onTaskHandler={ onTaskHandler }
        />
      </Fragment>
    )

  return (
    <Wrapper>
      { booked && <Header { ...booked } marginAnimation/> }
      <Container>{ renderTimeLineItems() }
      </Container>
      { departure && <Header { ...departure } delay="800" /> }
    </Wrapper>
  );
}

export default App;