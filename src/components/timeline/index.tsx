import React from 'react';
import moment from 'moment';
import { MainLink } from '../../shared/buttons';

import 'moment/locale/sv'

import { TimelineItem, TimelineItemContent, Circle, Title, Paragraph, Date } from './style';

export interface IItem {
  id: number,
  key: number,
  name: string,
  desc: string,
  link?: any,
  task?: any,
  date?: Date
}

const DATE_FORMAT: string = 'DD MMMM YYYY';
const LINK_STYLE: any = { marginTop: '12px'};

const isTask = (task: any) => (task instanceof Object || false)
const renderTask = () => <div>Task to do</div>
const renderDate = (date: Date) => <Date>{ moment(date).format(DATE_FORMAT) }</Date>
const renderLink = ({ href, text }: { href:string, text:string }) => <MainLink href={ href } style={ LINK_STYLE }>{ text }</MainLink>

const Item: React.FC<IItem> = ({ name, desc, link, date, task }:IItem) => {
  return (
    <TimelineItem>
      <TimelineItemContent task={ task }>
        { task && !task.completed && renderTask() }
        { date && renderDate(date) }
        <Title>{ name }</Title>
        <Paragraph>{ desc }</Paragraph>
        { link && renderLink(link)}
        <Circle />
      </TimelineItemContent>
    </TimelineItem>
  );
}

export default Item;
