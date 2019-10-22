import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import TimeLine, { IItem } from '../timeline';
import ApolloClient, { gql } from 'apollo-boost';
import useTimeline from '../../hooks/timeline';
import Header from '../header'
import { Container, Wrapper } from './style';

const getTimeLineData = (data:any) => ((data || {}).timeline) || [];
const getBookingDateData = (data:any) => ((data || {}).booked) || {};
const getDepartureDateData = (data:any) => ((data || {}).departure) || {};

const App: React.FC = () => {
  const { data, fetchItems } = useTimeline();
  
  useEffect(() => {
    fetchItems();
  }, []);

  const newData = data[0];
      
  const booked = getBookingDateData(newData);
  const departure = getDepartureDateData(newData);

  const onTaskHandler = (id:number) => {
    console.log(id)
  }

  return (
    <Wrapper>
      { booked && <Header { ...booked }/> }
      <Container>
      {
        getTimeLineData(newData)
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
// TL example: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/
// https://github.com/bexic/react-without-redux/tree/master/src