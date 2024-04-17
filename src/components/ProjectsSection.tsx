import React from 'react';
import { Space, Typography } from 'antd';
import '../css/info-card.css';
import styled from '@emotion/styled';
import { ProjectsCarousel } from './ProjectsCarousel';

type ProjectsSecionProps = {
  display: boolean;
}

const DivStyled = styled.div<{ display: boolean }>(({ display }) => ({
  display: display ? 'block' : 'none'
}));

export const ProjectsSecion: React.FC<ProjectsSecionProps> = ({ display }) => {
  return (
    <DivStyled
      display={display}
      className='fade-in-animation'>
      <Space direction='vertical' size='small'>
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
        <ProjectsCarousel />
      </Space>
    </DivStyled>
  )
}