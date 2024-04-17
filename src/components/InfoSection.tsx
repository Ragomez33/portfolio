import React, { useState } from 'react';
import { Flex, Image, Space, Typography, } from "antd";
import Typewriter from 'typewriter-effect';
import styled from '@emotion/styled';
import NodeIcon from '../assets/icons8-nodejs-64.png';
import ReactIcon from '../assets//1174949_js_react js_logo_react_react native_icon.png';
import VueIcon from '../assets/icons8-vue-js-48.png';
import ExpressIcon from '../assets/icons8-express-js-50.png';
import GraphQLIcon from '../assets/icons8-graphql-50.png';
import { ProjectsSecion } from './ProjectsSection';
import '../css/info-card.css';

const IconContainer = styled.div`
width: 100px;
height: 80px;
`;

export const InfoSection: React.FC = () => {
  const [styleState, setStyleState] = useState<boolean>(false);

  const Icons = (
    <div
      className='fade-in-animation'
    >
      <Flex justify='center' wrap="wrap" gap="small">
        <IconContainer>
          <Image src={ReactIcon} alt='React JS' preview={false} />
        </IconContainer>
        <IconContainer>
          <Image src={VueIcon} alt='Vue JS' preview={false} />
        </IconContainer>
        <IconContainer>
          <Image src={NodeIcon} alt='Node JS' preview={false} />
        </IconContainer>
        <IconContainer>
          <Image src={ExpressIcon} alt='Express JS' preview={false} />
        </IconContainer>
        <IconContainer>
          <Image src={GraphQLIcon} alt='GraphQL' preview={false} />
        </IconContainer>
      </Flex>
    </div>
  );

  return (
    <>
      <Space direction='vertical' size='small'>
        <Typography.Text
          style={{
            fontSize: '18px',
            color: '#d1d1d1',
          }}>
          <Typewriter
            options={{
              delay: 20,
              skipAddStyles: true,
              cursor: ''
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Hello my name is Raul Gomez.  ')
                .pauseFor(1500)
                .typeString('Passionate Full Stack JavaScript developer with 5 years of experience building web systems and mobile applications.')
                .start()
            }}
          />
        </Typography.Text>
        <Typography.Text
          style={{
            fontSize: '18px',
            color: '#d1d1d1',
            cursor: ''
          }}>
          <Typewriter
            options={{
              delay: 20,
              skipAddStyles: true,
              cursor: ''
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('I have worked on a variety of projects, mainly management systems, using JavaScript frameworks such as React JS, Vue JS, Node JS, Express JS, and React Native.')
                .start().callFunction(() => {
                  setStyleState(true);
                });
            }}
          />
        </Typography.Text>
      </Space >
      {styleState && (
        Icons
      )}
      <ProjectsSecion display={styleState} />
    </>
  );
}