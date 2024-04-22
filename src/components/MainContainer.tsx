import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 75%;
 @media (max-width: 413px){
  width: 90%;
  }
`;

type MainContainerProps = {
  children: ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <Container>
      <InnerContainer>
        {children}
      </InnerContainer>
    </ Container >
  )
}