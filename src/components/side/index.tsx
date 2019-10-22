import React from 'react';
import useTimeline from '../../hooks/timeline';
import { Wrapper } from './style';

const getTimeLineData = (data:any) => ((data || {}).timeline) || [];
const getBookingDateData = (data:any) => ((data || {}).booked) || {};
const getDepartureDateData = (data:any) => ((data || {}).departure) || {};

const Side: React.FC = () => {
  const { data }= useTimeline();

  console.log('Side data', data)

  return (
    <Wrapper>
      Side
    </Wrapper>
  );
}

export default Side;
// TL example: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/
// https://github.com/bexic/react-without-redux/tree/master/src