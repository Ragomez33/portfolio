import React from 'react';
import { Space, Typography } from 'antd';
import '../css/info-card.css';
import styled from '@emotion/styled';
import { ProjectsCarousel } from './ProjectsCarousel';

type ProjectsSecionProps = {
  display: boolean;
}

const DivStyled = styled.div<{ display: boolean }>(({ display }) => ({
  display: display ? 'block' : 'none',
  marginBottom: 50,
  '@media(max-width: 413px)': {
    width: '90vw',
  }
}));

export const ProjectsSecion: React.FC<ProjectsSecionProps> = ({ display }) => {
  return (
    <DivStyled
      display={display}
      className='fade-in-animation'>
      <Space direction='vertical' size='small'
        style={{
          justifyContent: 'center',
          width: '100%'
        }}>
        <Typography.Title
          style={{
            color: '#d1d1d1',
            fontSize: '60px',
          }}>
          Projects
        </Typography.Title>

        <Typography.Text
          style={{
            fontSize: '18px',
            color: '#d1d1d1',
          }}>
          Some of the projects where I have collaborated:
        </Typography.Text>
        <div style={{
          height: '500px',
        }}>
          <ProjectsCarousel />
        </div>
      </Space>
    </DivStyled>
  )
}