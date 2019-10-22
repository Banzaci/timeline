import styled from 'styled-components';
import { PADDING_NORMAL } from '../../shared/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 ${PADDING_NORMAL};
  margin: 20px 0;

  &:after {
    background-color: #0074ab;
    content: '';
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  margin: 10px auto;
  max-width: 900px;
`

export const Loader = styled.div`
  display:none;
`;

export const Error = styled.div`
  margin: 10px auto;
  max-width: 200px;
  text-align: center;
  background-color: white;
`;
