import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const BG = styled.div`
  position: absolute;
  top: 0;
  width: 1822px;
  height: 4008px;
  //display: none;
  z-index: -1;
  margin-left: calc(50% - 911px);

  ${breakpoint('md')`
     display:block;
  `};
`;
const FG = styled.div`
  position: absolute;
  top: 0;
  width: 1822px;
  height: 4008px;
  //display: none;
  //z-index: 1000;
  margin-left: calc(50% - 911px);
  transform: translate(360px,510px);
  ${breakpoint('md')`
     display:block;
  `};
`;

const Background = props => (
  <>
    <BG {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1821.4892 4007.4703"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="prefix__linear-gradient-14"
            x1={1049.511}
            y1={2580.024}
            x2={1469.923}
            y2={2580.024}
            xlinkHref="#prefix__linear-gradient-10"
          />
          <linearGradient
            id="prefix__linear-gradient-28"
            x1={1312.387}
            y1={2748.459}
            x2={1732.799}
            y2={2748.459}
            xlinkHref="#prefix__linear-gradient-10"
          />
          <linearGradient
            id="prefix__linear-gradient-2"
            x1={-1747.797}
            y1={2553.537}
            x2={-997.69}
            y2={2553.537}
            xlinkHref="#prefix__linear-gradient"
          />
          <linearGradient
            id="prefix__New_Gradient_Swatch_8"
            data-name="New Gradient Swatch 8"
            x1={-90.516}
            y1={1827.396}
            x2={249.338}
            y2={1827.396}
            gradientTransform="rotate(-45 764.799 286.279)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#ff46f2" />
            <stop offset={1} stopColor="#17defe" />
          </linearGradient>
          <linearGradient
            id="prefix__linear-gradient-3"
            x1={282.309}
            y1={62.867}
            x2={727.637}
            y2={62.867}
            xlinkHref="#prefix__linear-gradient"
          />
          <linearGradient
            id="prefix__linear-gradient-4"
            x1={-1955.559}
            y1={2272.307}
            x2={-1510.23}
            y2={2272.307}
            xlinkHref="#prefix__linear-gradient"
          />
          <linearGradient
            id="prefix__linear-gradient-5"
            x1={-512.578}
            y1={2207.952}
            x2={-67.249}
            y2={2207.952}
            xlinkHref="#prefix__linear-gradient"
          />
          <linearGradient
            id="prefix__linear-gradient-6"
            x1={-83.284}
            y1={304.673}
            x2={472.584}
            y2={304.673}
            gradientTransform="rotate(-45 764.799 286.279)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#ff382e" />
            <stop offset={1} stopColor="#ff46f2" />
          </linearGradient>
          <linearGradient
            id="prefix__linear-gradient-7"
            x1={-184.685}
            y1={1378.565}
            x2={120.167}
            y2={1378.565}
            gradientTransform="rotate(-45 764.799 286.279)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#f09b45" />
            <stop offset={1} stopColor="#ff382e" />
          </linearGradient>
          <linearGradient
            id="prefix__linear-gradient-8"
            x1={1094.582}
            y1={662.38}
            x2={1399.435}
            y2={662.38}
            xlinkHref="#prefix__linear-gradient-7"
          />
          <linearGradient
            id="prefix__linear-gradient-9"
            x1={-1331.599}
            y1={2869.754}
            x2={-1026.746}
            y2={2869.754}
            xlinkHref="#prefix__linear-gradient-7"
          />
          <linearGradient
            id="prefix__linear-gradient-10"
            x1={-1339.583}
            y1={2028.807}
            x2={-700.43}
            y2={2028.807}
            gradientTransform="rotate(-45 764.799 286.279)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#f9dc5a" />
            <stop offset={1} stopColor="#f09b45" />
          </linearGradient>
          <linearGradient
            id="prefix__linear-gradient-11"
            x1={1100.267}
            y1={3125.345}
            x2={1520.678}
            y2={3125.345}
            xlinkHref="#prefix__linear-gradient"
          />
          <linearGradient
            id="prefix__New_Gradient_Swatch_8-2"
            x1={281.24}
            y1={1765.54}
            x2={701.65}
            y2={1765.54}
            xlinkHref="#prefix__New_Gradient_Swatch_8"
          />
          <linearGradient
            id="prefix__linear-gradient-12"
            x1={64.387}
            y1={731.459}
            x2={484.799}
            y2={731.459}
            xlinkHref="#prefix__linear-gradient-10"
          />
          <linearGradient
            id="prefix__linear-gradient-13"
            x1={624.928}
            y1={3351.261}
            x2={1045.34}
            y2={3351.261}
            xlinkHref="#prefix__linear-gradient-10"
          />
          <linearGradient
            id="prefix__linear-gradient"
            x1={-853.631}
            y1={849.496}
            x2={-103.523}
            y2={849.496}
            gradientTransform="rotate(-45 764.799 286.279)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#17defe" />
            <stop offset={1} stopColor="#1050ca" />
          </linearGradient>
          <linearGradient
            id="prefix__linear-gradient-15"
            x1={298.311}
            y1={2523.063}
            x2={718.723}
            y2={2523.063}
            xlinkHref="#prefix__linear-gradient-10"
          />
          <linearGradient
            id="prefix__linear-gradient-16"
            x1={739.311}
            y1={2025.563}
            x2={920.723}
            y2={2025.563}
            xlinkHref="#prefix__linear-gradient-10"
          />
          <linearGradient
            id="prefix__linear-gradient-17"
            x1={1121.374}
            y1={2815.552}
            x2={1427.768}
            y2={2815.552}
            xlinkHref="#prefix__linear-gradient-6"
          />
          <linearGradient
            id="prefix__linear-gradient-18"
            x1={1201.902}
            y1={1941.744}
            x2={1508.296}
            y2={1941.744}
            xlinkHref="#prefix__linear-gradient-6"
          />
          <linearGradient
            id="prefix__linear-gradient-19"
            x1={1098.655}
            y1={1522.002}
            x2={1519.064}
            y2={1522.002}
            xlinkHref="#prefix__linear-gradient-6"
          />
          <linearGradient
            id="prefix__linear-gradient-20"
            x1={1305.639}
            y1={1897.147}
            x2={1726.047}
            y2={1897.147}
            xlinkHref="#prefix__linear-gradient-6"
          />
          <linearGradient
            id="prefix__linear-gradient-21"
            x1={1291.625}
            y1={1208.949}
            x2={1504.892}
            y2={1208.949}
            xlinkHref="#prefix__linear-gradient-10"
          />
          <linearGradient
            id="prefix__linear-gradient-22"
            x1={1322.535}
            y1={245.277}
            x2={1742.946}
            y2={245.277}
            xlinkHref="#prefix__linear-gradient"
          />
          <linearGradient
            id="prefix__linear-gradient-23"
            x1={806.949}
            y1={106.135}
            x2={1039.647}
            y2={106.135}
            xlinkHref="#prefix__linear-gradient-10"
          />
          <linearGradient
            id="prefix__New_Gradient_Swatch_8-3"
            x1={1045.531}
            y1={146.046}
            x2={1383.015}
            y2={146.046}
            xlinkHref="#prefix__New_Gradient_Swatch_8"
          />
          <linearGradient
            id="prefix__linear-gradient-24"
            x1={1080.271}
            y1={95.763}
            x2={1292.225}
            y2={95.763}
            xlinkHref="#prefix__linear-gradient"
          />
          <linearGradient
            id="prefix__linear-gradient-25"
            x1={502.07}
            y1={3746.788}
            x2={1023.437}
            y2={3746.788}
            xlinkHref="#prefix__linear-gradient-6"
          />
          <linearGradient
            id="prefix__New_Gradient_Swatch_8-4"
            x1={1174.67}
            y1={3687.278}
            x2={1595.08}
            y2={3687.278}
            xlinkHref="#prefix__New_Gradient_Swatch_8"
          />
          <linearGradient
            id="prefix__linear-gradient-26"
            x1={607.202}
            y1={3778.173}
            x2={997.614}
            y2={3778.173}
            xlinkHref="#prefix__linear-gradient-10"
          />
          <linearGradient
            id="prefix__linear-gradient-27"
            x1={-627.054}
            y1={2613.399}
            x2={-71.186}
            y2={2613.399}
            xlinkHref="#prefix__linear-gradient-6"
          />
          <style>
            {
              '.prefix__cls-30,.prefix__cls-8{fill:#1d2423}.prefix__cls-8,.prefix__cls-9{opacity:.3}.prefix__cls-10{fill:#1b1464}.prefix__cls-27{fill:#ed1c24}.prefix__cls-32{fill:#f0f;opacity:.05}.prefix__cls-42{fill:#fff;opacity:.75}'
            }
          </style>
        </defs>
        <title>{'20190601_SN.com_bg'}</title>
        <g
          id="prefix__Background_elements"
          data-name="Background elements"
        >
          <path
            d="M549.052 1349.132l-479.796 479.79a35.782 35.782 0 01-50.607-50.6l479.796-479.799a35.785 35.785 0 1150.607 50.61z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient)"
            opacity={0.5}
          />
          <path
            d="M1121.714 3186.325l-479.797 479.79a35.782 35.782 0 01-50.607-50.6l479.796-479.8a35.785 35.785 0 0150.608 50.61z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-2)"
            opacity={0.5}
          />
          <path
            d="M1490.033 1791.098l-189.707 189.699a35.784 35.784 0 11-50.607-50.605l189.71-189.703a35.785 35.785 0 1150.604 50.609z"
            transform="translate(-8.166)"
            fill="url(#prefix__New_Gradient_Swatch_8)"
          />
          <path
            d="M580.539 205.192L316.254 469.478a35.785 35.785 0 01-50.604-50.61l264.285-264.285a35.785 35.785 0 0150.605 50.61z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-3)"
            opacity={0.5}
          />
          <path
            d="M560.438 3349.883L296.153 3614.17a35.785 35.785 0 11-50.605-50.61l264.285-264.285a35.785 35.785 0 1150.605 50.61z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-4)"
            opacity={0.5}
          />
          <path
            d="M1535.264 2284.046l-264.285 264.286a35.785 35.785 0 01-50.604-50.61l264.284-264.285a35.785 35.785 0 1150.605 50.61z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-5)"
          />
          <path
            d="M571.173 556.523L228.726 898.968a35.785 35.785 0 01-50.607-50.61l342.447-342.444a35.785 35.785 0 0150.607 50.609z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-6)"
          />
          <path
            className="prefix__cls-8"
            d="M592.593 1868.746l-6.156-6.162-26.212 26.212-26.212-26.212-6.155 6.162 26.208 26.209-26.208 26.208 6.155 6.163 26.212-26.212 26.212 26.212 6.156-6.163-26.209-26.208 26.209-26.209z"
          />
          <g className="prefix__cls-9">
            <path
              className="prefix__cls-10"
              d="M1157.12 3157.432l-57.299-44.898-57.313 44.898-57.328-44.898-57.311 44.898-57.353-44.898-54.044 42.306-6.617-8.451 60.661-47.486 57.349 44.894 57.315-44.898 57.328 44.898 57.313-44.898 57.299 44.898 57.306-44.898 60.626 47.49-6.619 8.451-54.007-42.306-57.306 44.898z"
            />
            <path
              className="prefix__cls-10"
              d="M1157.12 3203.089l-57.299-44.902-57.313 44.902-57.328-44.902-57.311 44.902-57.353-44.902-54.044 42.305-6.617-8.446 60.661-47.495 57.349 44.898 57.315-44.898 57.328 44.898 57.313-44.898 57.299 44.898 57.306-44.898 60.626 47.495-6.619 8.446-54.007-42.305-57.306 44.902z"
            />
          </g>
          <path
            d="M1081.33 1559.854L911.163 1730.02a32.101 32.101 0 01-45.393-45.404l170.167-170.158a32.098 32.098 0 1145.393 45.395z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-7)"
          />
          <path
            d="M1479.484 148.869l-170.169 170.165a32.1 32.1 0 01-45.393-45.398l170.167-170.164a32.1 32.1 0 0145.395 45.397z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-8)"
          />
          <path
            d="M1324.765 3425.256l-170.168 170.164a32.1 32.1 0 01-45.393-45.397l170.166-170.165a32.1 32.1 0 0145.395 45.398z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-9)"
          />
          <path
            d="M960.872 2599.881l-406.553 406.553a32.098 32.098 0 01-45.393-45.396l406.548-406.55a32.1 32.1 0 1145.398 45.393z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-10)"
          />
          <path
            d="M1114.713 3335.549a14.445 14.445 0 01-10.213-24.658l391.516-391.518a14.443 14.443 0 0120.425 20.426l-391.515 391.518a14.384 14.384 0 01-10.213 4.232z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-11)"
          />
          <path
            d="M295.685 1975.746a14.445 14.445 0 01-10.215-24.657l391.522-391.52a14.443 14.443 0 1120.425 20.426L305.9 1971.514a14.426 14.426 0 01-10.215 4.231z"
            transform="translate(-8.166)"
            fill="url(#prefix__New_Gradient_Swatch_8-2)"
          />
          <path
            d="M78.832 941.664a14.445 14.445 0 01-10.213-24.658L460.14 525.482a14.445 14.445 0 0120.426 20.432L89.046 937.432a14.396 14.396 0 01-10.215 4.232z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-12)"
            opacity={0.5}
          />
          <path
            d="M639.372 3561.465a14.445 14.445 0 01-10.213-24.657l391.522-391.524a14.445 14.445 0 0120.425 20.432l-391.52 391.517a14.397 14.397 0 01-10.214 4.232z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-13)"
            opacity={0.5}
          />
          <path
            d="M1063.955 2790.228a14.445 14.445 0 01-10.213-24.657l391.522-391.524a14.445 14.445 0 1120.426 20.432l-391.52 391.517a14.396 14.396 0 01-10.215 4.232z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-14)"
          />
          <path
            d="M312.756 2733.268a14.445 14.445 0 01-10.213-24.658l391.522-391.524a14.445 14.445 0 0120.425 20.432l-391.52 391.518a14.396 14.396 0 01-10.214 4.232z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-15)"
          />
          <path
            d="M753.756 2116.268a14.445 14.445 0 01-10.213-24.658l152.522-152.524a14.445 14.445 0 0120.425 20.432l-152.52 152.518a14.396 14.396 0 01-10.214 4.232z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-16)"
          />
          <path
            d="M1131.9 2969.599a10.465 10.465 0 01-7.443-3.098 10.626 10.626 0 010-14.97l285.34-286.926a10.486 10.486 0 0114.887 0 10.627 10.627 0 010 14.97l-285.34 286.926a10.46 10.46 0 01-7.443 3.098z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-17)"
            opacity={0.5}
          />
          <path
            d="M1212.43 2095.791a10.464 10.464 0 01-7.444-3.098 10.626 10.626 0 010-14.97l285.34-286.926a10.486 10.486 0 0114.886 0 10.627 10.627 0 010 14.97l-285.34 286.926a10.46 10.46 0 01-7.443 3.098z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-18)"
            opacity={0.5}
          />
          <path
            d="M1113.101 1732.206a14.445 14.445 0 01-10.213-24.658l391.514-391.52a14.443 14.443 0 0120.426 20.426l-391.514 391.52a14.385 14.385 0 01-10.213 4.232z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-19)"
          />
          <path
            d="M1320.085 2107.35a14.445 14.445 0 01-10.213-24.658l391.514-391.52a14.443 14.443 0 0120.426 20.426l-391.514 391.52a14.385 14.385 0 01-10.213 4.232z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-20)"
          />
          <path
            d="M1346.35 1315.584a54.723 54.723 0 01-38.695-93.42l103.82-103.823a54.724 54.724 0 0177.387 77.395l-103.814 103.823a54.542 54.542 0 01-38.698 16.025z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-21)"
          />
          <path
            className="prefix__cls-27"
            d="M1373.723 583.585a65.804 65.804 0 01-46.529-112.335l124.84-124.837a65.802 65.802 0 1193.053 93.063l-124.83 124.836a65.594 65.594 0 01-46.534 19.273z"
            transform="translate(-8.166)"
          />
          <path
            d="M1336.981 455.481a14.445 14.445 0 01-10.213-24.657l391.516-391.518a14.443 14.443 0 0120.426 20.426L1347.194 451.25a14.384 14.384 0 01-10.213 4.231z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-22)"
          />
          <path
            className="prefix__cls-27"
            d="M647.66 2159.082a65.804 65.804 0 01-46.529-112.335L725.97 1921.91a65.802 65.802 0 0193.054 93.062L694.193 2139.81a65.594 65.594 0 01-46.533 19.273z"
            transform="translate(-8.166)"
          />
          <g opacity={0.1}>
            <path
              className="prefix__cls-30"
              transform="rotate(-45.029 1257.43 1452.08)"
              d="M1219.975 1437.416h83.077v9.628h-83.077z"
            />
            <path
              className="prefix__cls-30"
              transform="rotate(-45.002 1257.427 1452.087)"
              d="M1256.697 1400.691h9.627v83.077h-9.627z"
            />
          </g>
          <path
            className="prefix__cls-8"
            d="M600.788 1191.162H499.14l50.824-88.034zm-84.972-9.628h68.295l-34.147-59.144zM597.754 3152.949H496.106l50.824-88.034zm-84.971-9.627h68.295l-34.148-59.145z"
            transform="translate(-8.166)"
          />
          <g opacity={0.2}>
            <path
              className="prefix__cls-30"
              d="M1511.619 995.554l-52.64-40.278-52.649 40.278-52.675-40.278-52.654 40.278-52.691-40.278-49.766 38.036-5.85-7.646 55.616-42.512 52.691 40.27 52.654-40.27 52.675 40.27 52.649-40.27 52.64 40.27 52.654-40.27 55.578 42.512-5.85 7.646-49.728-38.036-52.654 40.278z"
            />
            <path
              className="prefix__cls-30"
              d="M1511.619 1036.507l-52.64-40.278-52.649 40.278-52.675-40.278-52.654 40.278-52.691-40.278-49.766 38.036-5.85-7.646 55.616-42.512 52.691 40.27 52.654-40.27 52.675 40.27 52.649-40.27 52.64 40.27 52.654-40.27 55.578 42.512-5.85 7.646-49.728-38.036-52.654 40.278z"
            />
            <path
              className="prefix__cls-30"
              d="M1511.619 1081.447l-52.64-40.278-52.649 40.278-52.675-40.278-52.654 40.278-52.691-40.278-49.766 38.036-5.85-7.646 55.616-42.512 52.691 40.27 52.654-40.27 52.675 40.27 52.649-40.27 52.64 40.27 52.654-40.27 55.578 42.512-5.85 7.646-49.728-38.036-52.654 40.278z"
            />
          </g>
          <g className="prefix__cls-9">
            <path
              className="prefix__cls-30"
              d="M1220.385 2152.402l-52.641-40.278-52.649 40.278-52.674-40.278-52.654 40.278-52.691-40.278-49.766 38.036-5.851-7.646 55.617-42.512 52.691 40.27 52.654-40.27 52.674 40.27 52.649-40.27 52.641 40.27 52.653-40.27 55.579 42.512-5.85 7.646-49.729-38.036-52.653 40.278z"
            />
            <path
              className="prefix__cls-30"
              d="M1220.385 2193.355l-52.641-40.278-52.649 40.278-52.674-40.278-52.654 40.278-52.691-40.278-49.766 38.036-5.851-7.646 55.617-42.513 52.691 40.27 52.654-40.27 52.674 40.27 52.649-40.27 52.641 40.27 52.653-40.27 55.579 42.513-5.85 7.646-49.729-38.036-52.653 40.278z"
            />
            <path
              className="prefix__cls-30"
              d="M1220.385 2238.295l-52.641-40.278-52.649 40.278-52.674-40.278-52.654 40.278-52.691-40.278-49.766 38.035-5.851-7.646 55.617-42.512 52.691 40.27 52.654-40.27 52.674 40.27 52.649-40.27 52.641 40.27 52.653-40.27 55.579 42.512-5.85 7.646-49.729-38.035-52.653 40.278z"
            />
          </g>
          <path
            className="prefix__cls-27"
            d="M354.11 3088.598a65.804 65.804 0 01-46.529-112.335l124.839-124.837a65.802 65.802 0 1193.054 93.062l-124.83 124.837a65.594 65.594 0 01-46.534 19.273z"
            transform="translate(-8.166)"
          />
          <path
            className="prefix__cls-32"
            d="M959.116 2273.352l-45 21.023-45-21.023v-25.227l45 21.023 45-21.023v25.227zM959.287 3091.352l-45 21.023-45-21.023v-25.227l45 21.023 45-21.023v25.227z"
          />
          <path
            d="M998.792 0L811.18 187.612a14.444 14.444 0 1020.428 20.426L1039.648 0z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-23)"
            opacity={0.5}
          />
          <path
            d="M1292.227 0l-237.295 237.294a32.099 32.099 0 0045.393 45.395L1383.015 0z"
            transform="translate(-8.166)"
            fill="url(#prefix__New_Gradient_Swatch_8-3)"
            opacity={0.5}
          />
          <path
            d="M1251.374 0l-166.867 166.868a14.443 14.443 0 0020.425 20.426L1292.225 0z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-24)"
          />
          <path
            d="M1012.955 3547.195l-449.796 449.79a35.782 35.782 0 01-50.607-50.6l449.796-449.799a35.785 35.785 0 0150.607 50.61z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-25)"
          />
          <path
            d="M1189.115 3897.485a14.445 14.445 0 01-10.215-24.658l391.522-391.52a14.443 14.443 0 1120.425 20.426l-391.517 391.52a14.426 14.426 0 01-10.215 4.232z"
            transform="translate(-8.166)"
            fill="url(#prefix__New_Gradient_Swatch_8-4)"
          />
          <path
            d="M621.646 3973.377a14.445 14.445 0 01-10.212-24.658l361.521-361.524a14.445 14.445 0 1120.426 20.432l-361.52 361.518a14.396 14.396 0 01-10.215 4.232z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-26)"
          />
          <path
            d="M1819.173 2573.523l-342.447 342.445a35.785 35.785 0 11-50.607-50.61l342.447-342.444a35.785 35.785 0 0150.607 50.609z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-27)"
          />
          <path
            d="M1326.832 2958.664a14.445 14.445 0 01-10.213-24.658l391.522-391.524a14.445 14.445 0 0120.425 20.432l-391.52 391.518a14.396 14.396 0 01-10.215 4.232z"
            transform="translate(-8.166)"
            fill="url(#prefix__linear-gradient-28)"
            opacity={0.5}
          />
        </g>
        <path
          fill="#f5f5f5"
          opacity={0.9}
          d="M1430.287 1069.425L918.287 790l-512 279.425v2701.247h1024V1069.425z"
          id="prefix__Moving_Background"
          data-name="Moving Background"
        />
        <g id="prefix__Chevrons">
          <path
            className="prefix__cls-32"
            d="M963.287 742.352l-45 21.023-45-21.023v-25.227l45 21.023 45-21.023v25.227zM963.287 1516.352l-45 21.023-45-21.023v-25.227l45 21.023 45-21.023v25.227z"
          />
        </g>
      </svg>
    </BG>
    <FG>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1821.4892 4007.4703"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="prefix__a"
            x1={582.198}
            y1={1070.952}
            x2={1221.352}
            y2={1070.952}
            gradientTransform="rotate(-45 764.799 286.279)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#f9dc5a" />
            <stop offset={1} stopColor="#f09b45" />
          </linearGradient>
          <linearGradient
            id="prefix__b"
            x1={913.824}
            y1={742.304}
            x2={1220.218}
            y2={742.304}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#ff382e" />
            <stop offset={1} stopColor="#ff46f2" />
          </linearGradient>
          <linearGradient
            id="prefix__c"
            data-name="New Gradient Swatch 8"
            x1={372.458}
            y1={912.651}
            x2={792.872}
            y2={912.651}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#ff46f2" />
            <stop offset={1} stopColor="#17defe" />
          </linearGradient>
          <linearGradient
            id="prefix__d"
            x1={1258.299}
            y1={1052.023}
            x2={1678.709}
            y2={1052.023}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#17defe" />
            <stop offset={1} stopColor="#1050ca" />
          </linearGradient>
        </defs>
        <title>{'20190601_SN.com_layout'}</title>
        <path
          d="M1642.464 563.69L1235.91 970.242a32.098 32.098 0 01-45.393-45.395l406.548-406.55a32.1 32.1 0 1145.398 45.393z"
          transform="translate(-372.458 -508.895)"
          fill="url(#prefix__a)"
        />
        <path
          d="M924.351 896.35a10.465 10.465 0 01-7.443-3.097 10.626 10.626 0 010-14.971l285.34-286.925a10.486 10.486 0 0114.886 0 10.627 10.627 0 010 14.97l-285.34 286.926a10.46 10.46 0 01-7.443 3.098z"
          transform="translate(-372.458 -508.895)"
          opacity={0.5}
          fill="url(#prefix__b)"
        />
        <path
          d="M386.903 1122.855a14.445 14.445 0 01-10.213-24.658l391.524-391.52a14.445 14.445 0 0120.426 20.43l-391.522 391.516a14.385 14.385 0 01-10.215 4.232z"
          transform="translate(-372.458 -508.895)"
          fill="url(#prefix__c)"
        />
        <path
          d="M1272.744 1262.228a14.445 14.445 0 01-10.213-24.658l391.516-391.518a14.443 14.443 0 0120.426 20.426l-391.515 391.518a14.384 14.384 0 01-10.214 4.232z"
          transform="translate(-372.458 -508.895)"
          fill="url(#prefix__d)"
        />
      </svg>
    </FG>
  </>
);

export default Background;
