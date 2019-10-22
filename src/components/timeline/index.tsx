import React, { useState, useEffect } from 'react';
import { TweenLite, Linear } from 'gsap';

import { MainLink, CompleteButton } from '../../shared/buttons';

import 'moment/locale/sv'

import { TimelineItem, TimelineItemContent, Circle, Title } from './style';
import { Date, Paragraph } from '../../shared/elements';

export interface IItem {
  id: number,
  index: number,
  key: number,
  name: string,
  desc: string,
  link?: any,
  task?: any,
  date?: Date,
  onTaskHandler: (id:number) => void
}

const LINK_STYLE: any = { marginTop: '12px'};

const getTask = (task:any) => task && task.completed;
const renderLink = ({ href, text }: { href:string, text:string }) => <MainLink href={ href } style={ LINK_STYLE }>{ text }</MainLink>

const Item: React.FC<IItem> = ({ id, name, desc, link, date, task, onTaskHandler, index }:IItem) => {

  const [ completed, setCompleted ] = useState( getTask(task) );

  const card = React.createRef<HTMLDivElement>();

  const onClick = () => {
    setCompleted(1)
    onTaskHandler(id);
    TweenLite.to( card.current, .3, { rotationX: '+=360', ease: Linear.ease} );
  }

  useEffect(() => {
    TweenLite.delayedCall( .2 + (index * .2) * .5, () => {
      TweenLite.to( card.current, .8, { opacity: '1', ease: Linear.ease } );
    });
  }, [])

  return (
    <TimelineItem>
      <TimelineItemContent completed={ completed } ref={ card }>
        { !completed && <CompleteButton onClick={ () => onClick() }>Fixat</CompleteButton> }
        { date && <Date>{date}</Date> }
        <Title>{ name }</Title>
        <Paragraph>{ desc }</Paragraph>
        { link && renderLink(link)}
      </TimelineItemContent>
      <Circle />
    </TimelineItem>
  );
}

export default Item;
