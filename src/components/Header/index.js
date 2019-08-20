import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Phone from './images/telephone_icon.png';

// const bg_image = require('../../components/Header/images/Asset1.png');
const Head = styled.header`
  position: fixed;
  width: 100%;
  top:0;
  left:0;
  height: 176px;
  z-index: 10000;
  display: flex;
  align-items: center;
  background-color: rgba(255, 205, 0, 0.8);
`;

const Table = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 40px;
  width: calc(100% - 70px);
  max-width: 1024px;

  ${breakpoint('md')`
  padding-left:60px;
  padding-right:80px;
  width:calc(100% - 140px);}`}
`;

const TableCol = styled.div`
  //border:1px solid red;
  flex-grow: 1;
  color: #000;
  & p {
    padding: 0;
    margin: 0;
  }
`;

const PhoneCol = styled(TableCol)`
  width: 30px;
  flex-grow: 0;
  padding-right: 10px;
  padding-top: 3px;
  //opacity:0.5
`;

const AddressCol = styled(TableCol)`
  & p{
  line-height: 120%;
    color:#000;
  }
  & p:first-child{
  text-transform:uppercase;
  font-size: 1.4rem;
  letter-spacing: 0.1px;
  }
  
   & p:nth-child(2){
  font-size: 1.4rem;
  letter-spacing: 0.1px;
  color:#666;
      line-height: 150%;
  }  
   & p:nth-child(3){
  font-size: 1rem;
  letter-spacing: 0.1px;
    line-height: 140%;
  }
  
  ${breakpoint('xs', 'sm')`
   & p:nth-child(3){
   display:none;
  }
  `};
}
`;

const AboutCol = styled(TableCol)`
  align-self: center;
  text-align: right;
  font-size: 1.4rem;
  font-weight: bold;
  flex-grow: 2.5;
  cursor: pointer;

  ${breakpoint('xs', 'sm')`
  display:none;
  `};
`;

const ReelCol = styled(TableCol)`
  align-self: center;
  text-align: right;
  font-size: 1.54rem;
  font-weight: bold;
  padding-left: 1em;
  cursor: pointer;

  ${breakpoint('xs', 'sm')`
  display:none;
  `};
`;

const Icon = styled.img``;

const PhoneLink = styled.a`
  text-decoration: inherit;
  color: inherit;
`;
const SpanStyled = styled.span`
  font-size: 1.54rem;
  font-weight: bold;
  padding-right: 1em;
  cursor: pointer;

`;

const SectionStyled = styled.section`
  //text-transform: uppercase;
  transform: translate(0,15px);
  display:none;
  
  ${breakpoint('xs', 'sm')`
  display:block;
  `};
`

class Header extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  handleReelClick = () => {
    console.log('handleReelClick');
  };

  handleAboutClick = () => {
    console.log('handleAboutClick');
  };

  handlePhoneClick = () => {
    console.log('handlePhoneClick');
  };

  render() {
    return (
      <Head className="section">
        <Table>
          <PhoneCol>
            <Icon src={Phone} alt="" />
          </PhoneCol>
          <AddressCol>
            <p>Brian Goldberg</p>
            <p onClick={this.handlePhoneClick}>
              <PhoneLink href="tel:+1-310-659-9965">
                +1 (310) 659-9965
              </PhoneLink>
            </p>
            <p>
              WPA | Worldwide Production Agency <br /> 144 North
              Robertson Blvd, Suite A <br />
              West Hollywood, CA 90048
            </p>
            <SectionStyled>
              <SpanStyled onClick={this.handleAboutClick}>about</SpanStyled>
              <SpanStyled onClick={this.handleReelClick}>reel</SpanStyled>
            </SectionStyled>
          </AddressCol>
          <AboutCol onClick={this.handleAboutClick}>
            <p>about</p>
          </AboutCol>
          <ReelCol onClick={this.handleReelClick}>
            <p>reel</p>
          </ReelCol>
        </Table>
      </Head>
    );
  }
}

export default Header;
