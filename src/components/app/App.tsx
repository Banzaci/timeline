import React from 'react';
import TimeLine from "../timeline";
import useTimeline from '../../hooks/timeline'

let a = true
const App: React.FC = () => {
  const { timeline, fetchItems } = useTimeline();
  if(a) {
    const v = fetchItems()
    console.log(v)
    a = false
  }
  console.log('timeline', timeline)
  return (
    <TimeLine />
  );
}

export default App;
