import React, { useEffect } from 'react';
import { TweenLite, Linear } from 'gsap';
import { MainLink } from '../../shared/buttons';

import { Container, Title, CustomParagraph } from './style';
import { Date } from '../../shared/elements';

export interface IHeader {
  id: number,
  key: number,
  name: string,
  desc: string,
  link?: any,
  delay?: number,
  date: Date,
  marginAnimation?: boolean,
}

const LINK_STYLE: any = { marginTop: '12px'};

const renderLink = ({ href, text }: { href:string, text:string }) => <MainLink href={ href } style={ LINK_STYLE }>{ text }</MainLink>

const Header: React.FC<IHeader> = ({ name, desc, link, date, marginAnimation, delay = 200 }:IHeader) => {
  const card = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const { current } = card;
    setTimeout(() => {
      TweenLite.to( current, .5, { opacity: '1', ease: Linear.ease} );
      marginAnimation && TweenLite.to( current, .4, { marginTop: '30px', ease: Linear.ease} );
    }, delay)
  }, [])

  return (
    <Container ref={ card }>
      <Date>{ date }</Date>
      <Title>{ name }</Title>
      <CustomParagraph>{ desc }</CustomParagraph>
      { link && renderLink(link) }
    </Container>
  );
}

export default Header;
