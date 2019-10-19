import React, { useEffect, useState } from 'react';
import TimeLine, { IItem } from '../timeline';
import useTimeline from '../../hooks/timeline';
import Header from '../header'
import { Container, Wrapper } from './style'

const getTimeLineData = (data:any) => ((data || {}).timeline) || [];
const getBookingDateData = (data:any) => ((data || {}).booked) || {};
const getDepartureDateData = (data:any) => ((data || {}).departure) || {};

const App: React.FC = () => {
  const { data, fetchItems } = useTimeline();

  useEffect(() => {
    fetchItems()
  }, []);

  const onTaskHandler = (id:number) => {
    console.log(id)
  }

  const booked = getBookingDateData(data[0]);
  const departure = getDepartureDateData(data[0]);

  return (
    <Wrapper>
      { booked && <Header { ...booked }/> }
      <Container>
      {
        getTimeLineData(data[0])
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