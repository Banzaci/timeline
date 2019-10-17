import React, { useEffect } from 'react';
import TimeLine, { ITLProps } from '../timeline';
import useTimeline from '../../hooks/timeline'

const renderTimeBox = (data:any) => {
  return ((data || {}).timeline) || []
}

const App: React.FC = () => {
  const { data, fetchItems } = useTimeline();

  useEffect(() => {
    fetchItems()
  }, []);

  return (
    <div>
      {
        renderTimeBox(data[0]).map(({ id, name }:ITLProps, index:number) =>
          <TimeLine
            id={ id }
            name={ name }
            key={ index }
          />
        )
      }
    </div>
  );
}

export default App;
// TL example: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/
// https://github.com/bexic/react-without-redux/tree/master/src