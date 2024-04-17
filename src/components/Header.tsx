import React from 'react';
import { Col, Row } from 'antd';
import styled from '@emotion/styled';
import { Flex } from "antd";
import { Image } from "antd";
import GmailIcon from '../assets/icons8-gmail-48.png';
import GithubIcon from '../assets/github-mark-white.png';
import { Typography } from "antd";

const HeaderContainer = styled.div`
padding-top: 6rem;
`;

const IconContainer = styled.div`
width: 50px;
height: 50px;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Row>
        <Col span={3} offset={21} xs={6} md={4}>
          <Flex justify={'space-around'}>
            <IconContainer>
              <a href="mailto:raggmagm@gmail.com" title='' target='_blank' rel="noreferrer">
                <Image src={GmailIcon} preview={false} />
              </a>
            </IconContainer>
            <IconContainer>
              <a href="https://github.com/Ragomez33" title='' target='_blank' rel="noreferrer">
                <Image src={GithubIcon} preview={false} />
              </a>
            </IconContainer>
          </Flex>
        </Col>
        <Col>
          <Typography.Title
            style={{
              color: '#d1d1d1',
              fontSize: '60px',
            }}>
            Welcome.
          </Typography.Title>
        </Col>
      </Row>
    </HeaderContainer>
  );
}