import React from 'react';
import styled from 'styled-components';
import { COLOR_BLUE } from './colors';

interface ILink {
  className?: string;
  style?: any;
  href: string;
  children: any;
}

const Link = ({ className, href, children, style } : ILink) => (
  <a className={ className } href={ href } style={{ ...style }} >
    { children }
  </a>
)

export const MainLink = styled(Link)`
  color: ${ COLOR_BLUE };
`;