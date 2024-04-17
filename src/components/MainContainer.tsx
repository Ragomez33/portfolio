import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type MainContainerProps = {
  children: ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <Container>
      <div style={{
        width: '75%'
      }}>
        {children}
      </div>
    </ Container >
  )
}