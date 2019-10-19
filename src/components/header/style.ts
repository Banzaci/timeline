import styled from 'styled-components';
import { PADDING_NORMAL } from '../../shared/style';
import { Paragraph } from '../../shared/elements';
import { COLOR_BLUE, COLOR_GREY, COLOR_LIGHT_GREEN, COLOR_LIGHT_RED } from '../../shared/colors';

export const Container = styled.div`
  background: white;
  padding: 12px;
  box-shadow: 0 0 3px rgba(0,0,0,.3);
  border-radius: ${PADDING_NORMAL};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 6px 0;
  font-size: 1.2rem;
`;

export const CustomParagraph = styled(Paragraph)`
  max-width: 80%;
  text-align: center;
`;
