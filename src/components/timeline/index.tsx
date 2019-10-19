import React from 'react';
import moment from 'moment';
import { MainLink, MainButton } from '../../shared/buttons';
import { DATE_FORMAT } from '../../shared/misc';

import 'moment/locale/sv'

import { TimelineItem, TimelineItemContent, Circle, Title } from './style';
import { Date, Paragraph } from '../../shared/elements';

export interface IItem {
  id: number,
  key: number,
  name: string,
  desc: string,
  link?: any,
  task?: any,
  date?: Date,
  onTaskHandler: (id:number) => void
}

const LINK_STYLE: any = { marginTop: '12px'};

const renderTask = (onTaskHandler: any, id:number) => <MainButton onClick={ () => onTaskHandler(id) }>Avklarad</MainButton>
const renderDate = (date: Date) => <Date>{ moment(date).format(DATE_FORMAT) }</Date>
const renderLink = ({ href, text }: { href:string, text:string }) => <MainLink href={ href } style={ LINK_STYLE }>{ text }</MainLink>

const Item: React.FC<IItem> = ({ id, name, desc, link, date, task, onTaskHandler }:IItem) => {
  return (
    <TimelineItem>
      <TimelineItemContent task={ task }>
        { task && !task.completed && renderTask(onTaskHandler, id) }
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
