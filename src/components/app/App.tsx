import React, { useEffect } from 'react';
import TimeLine, { IItem } from '../timeline';
import useTimeline from '../../hooks/timeline';
import { Container } from './style'

const renderTimeBox = (data:any) => {
  return ((data || {}).timeline) || []
}

const App: React.FC = () => {
  const { data, fetchItems } = useTimeline();

  useEffect(() => {
    fetchItems()
  }, []);

  return (
    <Container>
      {
        renderTimeBox(data[0])
          .map((props:IItem, index:number) =>
          <TimeLine
            { ...props }
            key={ index }
          />
        )
      }
    </Container>
  );
}

export default App;
// TL example: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/
// https://github.com/bexic/react-without-redux/tree/master/src