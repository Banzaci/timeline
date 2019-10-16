import React, { useEffect } from 'react';
import TimeLine from "../timeline";
import useTimeline from '../../hooks/timeline'

let a = 0
const App: React.FC = () => {
  const { timeline, fetchItems } = useTimeline();
  useEffect(() => {
    fetchItems()
  }, []);
  
  console.log('timeline', timeline)
  return (
    <TimeLine />
  );
}

export default App;
