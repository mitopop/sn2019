import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import ResumeButton from './resume_btn';
import LinkedInButton from './linkedin_btn';
import ImdbButton from './imdb_btn';
//src/components/EditorPanel/index.js
const portrait = require('../../assets/portrait.jpg');

const Section = styled.div`
  position: relative;
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  width: calc(100% - 70px);
  font-size: 20px;
  line-height: 26px;
  padding-top: 120px;
`;

const Header = styled.h1`
  font-size: 31px;
  color: #ff00ff;
  font-family: 'ltc-globe-gothic';

  ${breakpoint('xs', 'md')`
  padding:0;  margin:0;
  `}
`;

const Portrait = styled.img`
  width: 30vw;
  max-width: 250px;
  height: 30vw;
  max-height: 250px;
  border: 5px solid #ff00ff;
  border-radius: 125px;
  float: right;
  vertical-align: bottom;
`;

const FirstParagraph = styled.p`
  ${breakpoint('xs', 'md')`
  display:none;
  `}
`;

const PhoneParagraph = styled.p`
  display: none;
  padding-bottom: 30px;

  ${breakpoint('xs', 'md')`
  display:block;
  `}
`;

const SecondParagraph = styled.div`
  width: 100%;
`;

const FlexBox = styled.div`
   {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 30px;
  }
`;

const FlexLeft = styled.div`
  flex-grow: 1;
`;

const ButtonFlexbox = styled.div`
  margin-top: 90px;

  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  
  
  ${breakpoint('xs','md')`
  margin-top: 30px;
  width: 100%;
    justify-content: center;

  `};
`;

const onResumeClick = () => {
  window.open(
    'http://www.seaganngai.com/perch/resources/seaganresumesept2017.pdf'
  );
  // console.log('onResumeClick');
};

const onLinkedInClick = () => {
  // console.log('onLinkedInClick');
  window.open('https://www.linkedin.com/in/seaganngai/');
};

const onImdbClick = () => {
  // console.log('onImdbClick');
  window.open('https://www.imdb.com/name/nm1970626/#editor');
};

const BioPanel = () => (
  <Section>
    <FlexBox>
      <FlexLeft>
        <Header>About Seagan</Header>
        <FirstParagraph>
          Seagan Ngai is a veteran film and elevision editor. She
          has over a dozen seasons with various series.
        </FirstParagraph>
      </FlexLeft>
      <Portrait src={portrait} alt="" />
    </FlexBox>
    <SecondParagraph>
      <PhoneParagraph>
        Seagan Ngai is a veteran film and elevision editor. She has
        over a dozen seasons with various series.
      </PhoneParagraph>
      Her success can be quantifiably measured &#8212;Her network notes
      are often two-thirds less than the other editors on the post
      team for just about every episode for every series. Seagan&#8217;s
      reputationsupercedes her skill since directors who get a
      chance to workwith her often say, &#8216;I&#8217;m so glad I get to work
      with you!&#8217; Seagan has the triple threat, she is
      technologically skilled, has a great senseof taste for
      selecting key performances, and is extremely delightful to
      work with.
    </SecondParagraph>
    <ButtonFlexbox>
      <ImdbButton clickMe={() => onImdbClick()} />
      <LinkedInButton clickMe={() => onLinkedInClick()} />
      <ResumeButton clickMe={() => onResumeClick()} />
    </ButtonFlexbox>
  </Section>
);

export default BioPanel;
