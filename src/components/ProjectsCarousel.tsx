import React from 'react';
import { Carousel } from 'antd';
import styled from '@emotion/styled';
import { SlideContent } from './SlideContent';
import { PROJECTS } from '../constants';

const CarouselContainer = styled.div`
    -webkit-box-shadow: -1px 10px 22px -7px rgba(0,0,0,1);
    -moz-box-shadow: -1px 10px 22px -7px rgba(0,0,0,1);
    box-shadow: -1px 10px 22px -7px rgba(0,0,0,1);
    border-radius: 5px;
    border: 1px solid #1D1D20;
    width: 75vw;
    margin-bottom: 3rem;
    margin-top: 3rem;
    height: auto;
    @media (max-width: 413px) {
    width: 90vw;
    }
`;

export const ProjectsCarousel: React.FC = () => {

  return (
    <CarouselContainer>
      <Carousel>
        {PROJECTS.map((item) => (
          <SlideContent
            title={item.title}
            description={item.description}
            tools={item.tools}
            position={item.position}
            images={item.images}
            url={item.url}
          />
        ))}
      </Carousel>
    </CarouselContainer>
  );
}