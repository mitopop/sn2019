import React from 'react';
import PropTypes from 'prop-types';

const ArrowDown = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="625.4227"
        height="28.0866"
        viewBox="0 0 625.4227 28.0866"
      >
        <g data-name="Resume_section">
          <g>
            <line stroke="#333" y1="1" x2="625.3105" y2="1" />
            <polygon points="609.784 28.087 601.965 14.543 594.146 1 609.784 1 625.423 1 617.604 14.543 609.784 28.087" />
          </g>
        </g>
      </svg>
    </div>
  );
};

ArrowDown.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ArrowDown;
