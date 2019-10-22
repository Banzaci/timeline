import React from 'react';
import { Wrapper } from './style';

type TimelineProps = {
  timeline:object[],
}

const Nav: React.FC<TimelineProps> = ({ timeline }: TimelineProps) => {

  console.log('Nav props', timeline)

  return (
    <Wrapper>
      Nav
    </Wrapper>
  );
}

export default Nav;
// TL example: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/
// https://github.com/bexic/react-without-redux/tree/master/src