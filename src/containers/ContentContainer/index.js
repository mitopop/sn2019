import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledWrapperOuter = styled.div`
  position: absolute;
  top: 0;
  //border: 1px solid green;
  width: 100%;
  z-index: 100;
`;

const StyledWrapperInner = styled.div`
  position: relative;
  max-width: 1080px;
  width: calc(100% - 30px);
  margin: 0 auto;
`;
const ContentContainer = ({ children }) => {
  return (
    <StyledWrapperOuter>
      <StyledWrapperInner>{children}</StyledWrapperInner>
    </StyledWrapperOuter>
  );
};

export default ContentContainer;
