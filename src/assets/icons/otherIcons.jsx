export const PowerBiIcon = ({ size = 24, color = "#F2C811" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://w3.org"
  >
    <path d="M12 0H8v24h4V0zm6 6h-4v18h4V6zm6 6h-4v12h4V12zM6 12H2v12h4V12z" />
  </svg>
);

export const GoHighLevelIcon = ({ size = 24, color = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Arrow (Yellow) */}
    <path d="M7.5 3L3.5 7H6V19H9V7H11.5L7.5 3Z" fill={color || "#FFC014"} />

    {/* Right Arrow (Green) */}
    <path
      d="M16.5 3L12.5 7H15V19H18V7H20.5L16.5 3Z"
      fill={color || "#41C346"}
    />

    {/* Middle Arrow (Blue) */}
    <path
      d="M12 9L8.5 12.5H10.5V19H13.5V12.5H15.5L12 9Z"
      fill={color || "#2493F4"}
    />
  </svg>
);

// Icons.jsx

export const ClickFunnelsIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://w3.org"
  >
    {/* Main Frame */}
    <path
      d="M3 4C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4H3ZM3 6H21V8H3V6ZM3 10H21V18H3V10Z"
      fill="black"
    />
    {/* Frame Dots */}
    <circle cx="15.5" cy="6" r="0.7" fill="black" />
    <circle cx="18" cy="6" r="0.7" fill="black" />
    <circle cx="20.5" cy="6" r="0.7" fill="black" />

    {/* Blue Gear Section */}
    <path
      d="M7.5 10C5.5 10 4 11.5 4 14C4 16.5 5.5 18 7.5 18C8.5 18 9 17.5 9.5 17.5C10 17.5 10 18 11 18V10C10 10 10 10.5 9.5 10.5C9 10.5 8.5 10 7.5 10Z"
      fill="#1BB4E7"
    />
    <circle cx="11" cy="11" r="0.8" fill="#1BB4E7" />
    <circle cx="11" cy="14" r="0.8" fill="#1BB4E7" />
    <circle cx="11" cy="17" r="0.8" fill="#1BB4E7" />

    {/* Red Gear Section */}
    <path
      d="M16.5 10C18.5 10 20 11.5 20 14C20 16.5 18.5 18 16.5 18C15.5 18 15 17.5 14.5 17.5C14 17.5 14 18 13 18V10C14 10 14 10.5 14.5 10.5C15 10.5 15.5 10 16.5 10Z"
      fill="#F04E23"
    />
    <circle cx="13" cy="12.5" r="0.8" fill="#F04E23" />
    <circle cx="13" cy="15.5" r="0.8" fill="#F04E23" />
  </svg>
);

export const KlaviyoIcon = ({ size = 24, color = "#000000" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://w3.org"
  >
    <path d="M3 4V20H21L16 12L21 4H3Z" fill={color} />
  </svg>
);

// KlaviyoIcon #232428 || #F86353 || #FFFAF3
