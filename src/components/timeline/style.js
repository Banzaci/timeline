import styled from 'styled-components';

export const TimelineItemContent = styled.div`
  background: white;
  box-shadow: 0 0 3px rgba(0,0,0,.3);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  position: relative;
  width: 380px;
  text-align: right;
  min-height: 80px;

  &:hover {
    box-shadow: 0 0 5px rgba(0,0,0,.3);
  }

  &:after {
    content: ' ';
    background-color: #fff;
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
  }
`;

export const Circle = styled.span`
  background-color: #fff;
  border: 3px solid #e2f3fe;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -78px;
  width: 20px;
  height: 20px;
  z-index: 100;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  color: #092A6B;
`;

export const Href = styled.a`
  margin-top: 12px;
  color: #0074ab;
`;

export const Paragraph = styled.p`
  margin-top: 12px;
`;

export const Date = styled.time`
  margin-top: 12px;
`;

export const TimelineItem = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin: 10px 0;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    
    ${TimelineItemContent} {
      text-align: left;
      align-items: flex-start;
      
      &:after {
        right: auto;
        left: -7.5px;
        box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
      }
    }
    ${Circle} {
      right: auto;
      left: -78px;
    }
  }
`;



