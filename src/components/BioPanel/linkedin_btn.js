import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.svg`
width: 20vw;
max-width: 90px;
  cursor: pointer;
  margin-right: 15px;
  & circle:last-child {
    opacity: 0;
  }

    & circle:last-child:hover {
    opacity: 0.75;

    }
  }
`;

const LinkedInButton = ({ clickMe }) => (
  <Button
    data-name="Bio section"
    viewBox="0 0 90 90"
    preserveAspectRatio="xMidYMid meet"
  >
    <title>{'Untitled-1'}</title>
    <circle cx={45} cy={45} r={45} fill="#f0f" />
    <path
      d="M59.442 29.43H32.024a2.348 2.348 0 00-2.374 2.318v27.534a2.35 2.35 0 002.375 2.321h27.417a2.354 2.354 0 002.381-2.321V31.748a2.353 2.353 0 00-2.381-2.318zm-20.25 27.416H34.42V41.492h4.772zm-2.385-17.453a2.767 2.767 0 112.765-2.768 2.767 2.767 0 01-2.765 2.768zm20.258 17.453h-4.768v-7.467c0-1.78-.033-4.07-2.48-4.07-2.483 0-2.864 1.939-2.864 3.941v7.596h-4.768V41.492h4.577v2.098h.064a5.014 5.014 0 014.515-2.48c4.832 0 5.724 3.18 5.724 7.314z"
      fill="#fff"
    />
    <circle
      onClick={clickMe}
      cx={45}
      cy={45}
      r={41.408}
      fill="#fff"
      className="prefix__roll_over"
      data-name="roll over"
    />
  </Button>
);

LinkedInButton.props = {
  clickMe: PropTypes.func,
};

export default LinkedInButton;
