import styled from 'styled-components';
import { PADDING_NORMAL } from '../../shared/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10px auto 40px;
  max-width: 900px;
  padding: 0 ${PADDING_NORMAL};

  &:after {
    background-color: #0074ab;
    content: '';
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
  }
`;
