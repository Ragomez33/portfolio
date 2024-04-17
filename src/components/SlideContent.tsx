import styled from '@emotion/styled';
import { Space, Typography } from 'antd';
import React from 'react';


const SliceContainer = styled.div`
    height: 300px;
    width: 600px;
    padding: 3rem;
`;
type SlideContentProps = {
  title: string;
  description: string;
  tools: string;
  position: string;
}
export const SlideContent: React.FC<SlideContentProps> = (
  { title, description, tools, position }
) => {
  return (
    <SliceContainer>
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
    </SliceContainer>
  )
}