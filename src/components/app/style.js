import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px auto;
  max-width: 900px;
  padding: 0 12px;

  &:after {
    background-color: #0074ab;
    content: '';
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
  }
`;
