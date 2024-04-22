import React from 'react';
import styled from '@emotion/styled';
import useMediaQuery from 'use-media-antd-query';
import { Carousel, Col, Image, Row, Space, Typography, Empty } from 'antd';



const SliceContainer = styled.div`
    width: auto;
    padding: 3rem;
     @media (max-width: 413px) {
    padding: 1.5rem;
   }
`;

const InfoContainer = styled.div`
   width: 100%;
   height: 250px;
   @media (max-width: 413px) {
    height: 350px;
   }
`;

const CarouselContainer = styled.div`
    width: 100%;
    height: 300px;
    margin: 1.5rem auto;
    @media (max-width: 413px) {
    height: 250px;
   }
`;


const ImageContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 413px) {
    height: 250px;
   }
`;

type SlideContentProps = {
  title: string;
  description: string;
  tools: string;
  position: string;
  url?: string;
  images: string[];
}
export const SlideContent: React.FC<SlideContentProps> = (
  { title, description, tools, position, images, url }
) => {
  const colSize = useMediaQuery();
  console.log("🚀 ~ colSize:", colSize)
  return (
    <SliceContainer>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <InfoContainer>
            <Space direction='vertical' size={10}>
              <Typography.Text
                style={{
                  fontSize: '24px',
                  color: '#d1d1d1',
                }}>
                {title}
              </Typography.Text>
              <Typography.Text
                style={{
                  fontSize: '18px',
                  color: '#d1d1d1',
                }}>
                {description}
              </Typography.Text>
              <Typography.Text
                style={{
                  fontSize: '16px',
                  color: '#d1d1d1',
                }}>
                Position: {position}
              </Typography.Text>
              <Typography.Text
                style={{
                  fontSize: '12px',
                  color: '#d1d1d1',
                }}>
                Tools: {tools}
              </Typography.Text>
              {url && (
                <a href={url} target='_blank' rel='noreferrer'>
                  <Typography.Text
                    style={{
                      fontSize: '12px',
                      color: '#d1d1d1',
                    }}>
                    Go to: {title}
                  </Typography.Text>
                </a>
              )}
            </Space>
          </InfoContainer>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} >
          <CarouselContainer>
            {images.length ? (
              <Carousel autoplay>
                {images.map((image) => (
                  <ImageContainer>
                    <Image
                      width={'100%'}
                      height={colSize === 'xs' ? 250 : 330}
                      src={image}
                      alt='' 
                      />
                  </ImageContainer>
                ))}
              </Carousel>
            ) : <Empty
              imageStyle={{ height: 200 }}
              description={
                <Typography.Text
                  style={{
                    fontSize: '12px',
                    color: '#d1d1d1',
                  }}>
                  No images to show
                </Typography.Text>
              }
            />}
          </CarouselContainer>
        </Col>
      </Row>
    </SliceContainer >
  )
}