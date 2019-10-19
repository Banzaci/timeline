import styled from 'styled-components';
import { COLOR_GREY } from './colors';
import { PADDING_NORMAL } from './style';

export const Date = styled.time`
  margin-bottom: 6px;
  font-size: .8em;
  color: ${COLOR_GREY}
`;

export const Paragraph = styled.p`
  margin-top: ${PADDING_NORMAL};
  font-size: .9em;
`;