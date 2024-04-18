import React from 'react';
import styled from '@emotion/styled';
import { Carousel, Col, Image, Row, Space, Typography, Empty } from 'antd';

const SliceContainer = styled.div`
    width: auto;
    padding: 3rem;
`;
type SlideContentProps = {
  title: string;
  description: string;
  tools: string;
  position: string;
  images: string[];
}
export const SlideContent: React.FC<SlideContentProps> = (
  { title, description, tools, position, images }
) => {
  return (
    <SliceContainer>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
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
          </Space>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} >
          <div style={{
            width: '100%',
            height: 300,
            margin: '1.5rem auto',
          }}>

            {images.length ? (
              <Carousel autoplay>
                {images.map((image) => (
                  <div style={{
                    width: '100%',

                  }}>
                    <Image style={{}} width='100%' height={300} src={image} alt='' />
                  </div>
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
          </div>
        </Col>
      </Row>
    </SliceContainer >
  )
}