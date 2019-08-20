import React from 'react';
import PropTypes from 'prop-types';

const ArrowUp = ({ onClick }) => {
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
            <g>
              <line
                stroke="#333"
                y1="27.0866"
                x2="625.3105"
                y2="27.0866"
              />
              <polygon
                className="cls-2"
                points="609.784 0 601.965 13.543 594.146 27.087 609.784 27.087 625.423 27.087 617.604 13.543 609.784 0"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};


ArrowUp.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ArrowUp;
