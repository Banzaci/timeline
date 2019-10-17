import React from 'react';
import { Block } from './style'

export interface ITLProps {
  id:number,
  key:number,
  name:string
}

const Timeline: React.FC<ITLProps> = ({ id, name }:ITLProps) => {
  return (
    <Block>
      { name }
    </Block>
  );
}

export default Timeline;
