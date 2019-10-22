import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import TimeLine, { IItem } from '../timeline';
import Header from '../header'
import { Container, Wrapper, Loader, Error } from './style';
import { TIMELINE } from './query';
// import Nav from '../nav';

const App: React.FC = () => {
  const { loading, error, data } = useQuery(TIMELINE, { notifyOnNetworkStatusChange: true });
  // const [getTimeline, { loading, data }] = useLazyQuery(TIMELINE); //Load on button click
  // refetch
  // if (networkStatus === 4) return <p>Refetching!</p>;

  if (loading) return <Loader>...loading</Loader>;
  if (error) return <Error>{ error.message }</Error>;
  
  const { timeLineById } = data;
  const { booked, departure } = timeLineById;
  const { timeline } =  timeLineById;

  const onTaskHandler = (id:number) => {
    console.log(id)
  }
  console.log(timeline)
  return (
    <Wrapper>
      {/* <Nav timeline={ timeline }/> */}
      { booked && <Header { ...booked }/> }
      <Container>
      {
        timeline
          .map((props:IItem, index:number) =>
            <TimeLine
              { ...props }
              onTaskHandler={ onTaskHandler }
              key={ index }
            />
          )
      }
      </Container>
      { departure && <Header { ...departure }/> }
    </Wrapper>
  );
}

export default App;