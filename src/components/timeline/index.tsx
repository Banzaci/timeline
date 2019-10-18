import React from 'react';
import moment from 'moment';

import { TimelineItem, TimelineItemContent, Circle, Title, Paragraph, Href, Date } from './style';

export interface IItem {
  id:number,
  key:number,
  name:string,
  desc: string,
  link?: any,
  date?: Date
}

const Item: React.FC<IItem> = ({ id, name, desc, link, date }:IItem) => {
  return (
    <TimelineItem>
      <TimelineItemContent>
        { date && <Date>{ date }</Date> }
        <Title>{ name }</Title>
        <Paragraph>{ desc }</Paragraph>
        { link && <Href href={ link.href }>{ link.text }</Href> }
        <Circle />
      </TimelineItemContent>
    </TimelineItem>
  );
}

export default Item;
