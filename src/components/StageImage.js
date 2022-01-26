import React from 'react';
import styled from 'styled-components';
import livingRoom from '../assets/living_room.jpg';

const StageImage = (props) => {
  return (
    <ImageWrapper height='150px'>
      <ImageBackground imagePath={livingRoom} />
      <ImageText></ImageText>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
  width: 100%;
  background-color: #000;
  border-bottom: 2px solid #fff;
`;

const ImageBackground = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  background-position: center;
  opacity: 0.5;
`;

const ImageText = styled.h4`
  position: relative;
  font-size: 2em;
`;

export default StageImage;
