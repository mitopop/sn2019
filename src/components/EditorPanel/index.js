import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const SvgWrapper = styled.svg`
width:100%;
max-width: 724px;
//z-index: 10000;
margin-top:12em;
margin-left: -20px;
  //border: 1px solid red;

  ${breakpoint('md')`
margin-left:calc(50% - 380px)

  `
};
  
`;
const EditorPanel = props => (
  <SvgWrapper viewBox="0 0 725 606" {...props}>
    <defs>
      <clipPath id="prefix__clip-path">
        <circle
          cx={304.589}
          cy={305.868}
          r={215.063}
          transform="rotate(-45 304.589 305.868)"
          fill="none"
        />
      </clipPath>
      <style>
        {
          '.prefix__cls-4{fill:#1d2423}.prefix__cls-12{letter-spacing:0}.prefix__cls-18{letter-spacing:.05em}'
        }
      </style>
    </defs>
    <title>{'Asset 1'}</title>
    <g id="prefix__Layer_2" data-name="Layer 2">
      <g id="prefix__Layer_1-2" data-name="Layer 1">
        <g clipPath="url(#prefix__clip-path)" opacity={0.05}>
          <path
            className="prefix__cls-4"
            transform="rotate(-45 444.365 161.437)"
            d="M441.131-63.635h6.468v450.142h-6.468z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 429.475 176.328)"
            d="M426.241-48.743h6.467v450.142h-6.467z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 414.584 191.219)"
            d="M411.35-33.852h6.467V416.29h-6.467z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 399.693 206.11)"
            d="M396.459-18.961h6.467v450.142h-6.467z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 384.802 221)"
            d="M381.568-4.07h6.467v450.142h-6.467z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 369.91 235.891)"
            d="M366.676 10.82h6.467v450.142h-6.467z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 355.02 250.782)"
            d="M351.786 25.711h6.466v450.142h-6.466z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 340.128 265.674)"
            d="M336.894 40.602h6.468v450.142h-6.468z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 325.238 280.565)"
            d="M322.004 55.494h6.467v450.142h-6.467z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 310.347 295.456)"
            d="M307.113 70.386h6.468v450.141h-6.468z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 295.458 310.347)"
            d="M292.223 85.277h6.468v450.139h-6.468z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 280.564 325.238)"
            d="M277.33 100.166h6.468v450.143h-6.468z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 265.675 340.129)"
            d="M262.442 115.059h6.467v450.139h-6.467z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 250.782 355.02)"
            d="M247.549 129.948h6.466V580.09h-6.466z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-44.999 235.893 369.91)"
            d="M232.659 144.841h6.467v450.14h-6.467z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 221 384.802)"
            d="M217.767 159.731h6.467v450.142h-6.467z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 206.111 399.694)"
            d="M202.877 174.624h6.468v450.139h-6.468z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 191.219 414.584)"
            d="M187.985 189.513h6.467v450.142h-6.467z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 176.33 429.475)"
            d="M173.095 204.405h6.468v450.139h-6.468z"
          />
          <path
            className="prefix__cls-4"
            transform="rotate(-45 161.436 444.366)"
            d="M158.203 219.295h6.467v450.142h-6.467z"
          />
        </g>
        <text
          transform="translate(161.39 432.7)"
          fill="#999"
          fontFamily="DIN-Medium,DIN"
          fontWeight={500}
          fontSize={32}
        >
          {'(P'}
          <tspan x={30.271} y={0} letterSpacing="-.032em">
            {'r'}
          </tspan>
          <tspan x={43.288} y={0}>
            {'onoun'}
          </tspan>
          <tspan x={132.183} y={0} letterSpacing="-.017em">
            {'c'}
          </tspan>
          <tspan x={147.155} y={0}>
            {'ed: N-E'}
          </tspan>
          <tspan x={255.506} y={0} letterSpacing="-.01em">
            {'y'}
          </tspan>
          <tspan x={270.16} y={0} letterSpacing={0}>
            {'e)'}
          </tspan>
        </text>
        <text
          transform="translate(481.55 336.488)"
          fontFamily="DIN-Regular,DIN"
          fontSize={32}>
          {'Editor'}
          <tspan x={93.5} y={0} letterSpacing="-.019em">
            {'for'}
          </tspan>

          <tspan x={0} y={32}>
            {'Film & Television'}
          </tspan>
        </text>
        <text
          transform="translate(157.55 257.488)"
          fontSize={120}
          fill="#f0f"
          fontFamily="LTCGlobeGothic-Bold,LTCGlobeGothic Bold"
          fontWeight={700}
          letterSpacing=".056em"
        >
          {'Seagan'}
          <tspan className="prefix__cls-18">
            <tspan x={0} y={125}>
              {'Ngai'}
            </tspan>
          </tspan>
        </text>
      </g>
    </g>
  </SvgWrapper>
);

export default EditorPanel;
