import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.svg`
  cursor: pointer;
width: 20vw;
max-width: 90px;
  margin-right: 15px;
  & circle:last-child {
    opacity: 0;
  }

    & circle:last-child:hover {
    opacity: 0.75;

    }
  }
`;

const ImdbButton = ({ clickMe }) => (
  <Button viewBox="0 0 90 90" preserveAspectRatio="xMidYMid meet">
    <title>{'Untitled-2'}</title>
    <g data-name="Bio section">
      <circle cx={45} cy={45} r={45} fill="#f0f" />
      <path
        d="M22.287 56.697h-5.479V34.336h5.48zm20.319 0h-4.677V44.145l-2.262 12.552h-3.384L29.96 44.145v12.552h-4.935V34.336h7.05l1.834 10.549 1.27-10.549h7.426zm2.892 0V34.336h6.13c3.65 0 4.537.361 5.58 1.084a3.773 3.773 0 011.564 3.329v13.535a3.917 3.917 0 01-1.463 3.252c-.974.774-2.147 1.161-5.65 1.161zm7.393-4.691V38.892c0-1.09-1.183-.988-2.119-.988v15.019c.936 0 2.119.14 2.119-.917zm12.89 3.525c-.384-.166-.728 1.166-.728 1.166h-4.525V34.336h5.605v5.12a5.287 5.287 0 013.667-1.552c1.528.07 3.525 1.199 3.384 3.075v13.005a2.473 2.473 0 01-1.204 2.167 5.656 5.656 0 01-2.533.367 11.454 11.454 0 01-3.666-.987zm1.891-2.697l.004-11.264q0-.826-.764-.826a.696.696 0 00-.779.795l-.004 11.295c0 .551.26.934.78.934.51 0 .764-.383.764-.934z"
        fill="#fff"
      />
    </g>

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

ImdbButton.props = {
  clickMe: PropTypes.func,
};

export default ImdbButton;
