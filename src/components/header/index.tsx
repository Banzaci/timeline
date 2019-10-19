import React from 'react';
import moment from 'moment';
import { MainLink } from '../../shared/buttons';
import { DATE_FORMAT } from '../../shared/misc';

import 'moment/locale/sv'

import { Container, Title, CustomParagraph } from './style';
import { Date } from '../../shared/elements';

export interface IHeader {
  id: number,
  key: number,
  name: string,
  desc: string,
  link?: any,
  date: Date,
}

const LINK_STYLE: any = { marginTop: '12px'};

const renderLink = ({ href, text }: { href:string, text:string }) => <MainLink href={ href } style={ LINK_STYLE }>{ text }</MainLink>

const Header: React.FC<IHeader> = ({ id, name, desc, link, date }:IHeader) => {
  return (
    <Container>
      <Date>{ moment(date).format(DATE_FORMAT) }</Date>
      <Title>{ name }</Title>
      <CustomParagraph>{ desc }</CustomParagraph>
      { link && renderLink(link) }
    </Container>
  );
}

export default Header;
