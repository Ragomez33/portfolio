import React from 'react';
import { Col, Row } from 'antd';
import styled from '@emotion/styled';
import { Image } from "antd";
import GmailIcon from '../assets/icons8-gmail-nuevo-50.png';
import GithubIcon from '../assets/github-mark-white.png';
import LinkedinIcon from '../assets/icons8-linkedin-50.png';
import { Typography } from "antd";

const HeaderContainer = styled.div`
padding-top: 6rem;
`;

const IconContainer = styled.div`
width: 50px;
height: 50px;
`;
const IconContainerRadius = styled.div`
width: 42px;
height: 42px;
border-radius: 50px;
border: solid 1px #fff;
background-color: #fff;
padding: 4px;
`;
export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Row justify='end'>
        <Col xs={5} sm={3} md={3} xl={2}>
          <IconContainerRadius>
            <a href="mailto:raggmagm@gmail.com" title='' target='_blank' rel="noreferrer">
              <Image src={GmailIcon} preview={false} />
            </a>
          </IconContainerRadius>
        </Col>
        <Col xs={5} sm={3} md={3} xl={2}>
          <IconContainer>
            <a href="https://github.com/Ragomez33" title='' target='_blank' rel="noreferrer">
              <Image src={GithubIcon} preview={false} />
            </a>
          </IconContainer>
        </Col>
        <Col xs={5} sm={3} md={3} xl={2}>
          <IconContainerRadius>
            <a href="https://github.com/Ragomez33" title='' target='_blank' rel="noreferrer">
              <Image src={LinkedinIcon} preview={false} />
            </a>
          </IconContainerRadius>
        </Col>
        <Col xs={24}>
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