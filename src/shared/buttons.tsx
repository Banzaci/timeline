import React from 'react';
import styled from 'styled-components';
import { COLOR_BLUE } from './colors';

interface ILink {
  className?: string;
  style?: any;
  href: string;
  children: any;
}

interface IButton {
  className?: string;
  style?: any;
  onClick: () => void;
  children: any;
}

const Link = ({ className, href, children, style } : ILink) => (
  <a className={ className } href={ href } style={{ ...style }} >
    { children }
  </a>
)

const Button = ({ className, onClick, children, style } : IButton) => (
  <button className={ className } style={{ ...style }} onClick={ onClick } >
    { children }
  </button>
)

export const MainLink = styled(Link)`
  color: ${ COLOR_BLUE };
`;

export const MainButton = styled(Button)`
  color: ${ COLOR_BLUE };
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;