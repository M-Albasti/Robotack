//* packages import
import React from "react";
import Svg, { Path } from "react-native-svg";

//* constants import
import colors from "@/constants/colors";

const Transactions = ({ width = 24, height = 24, color = colors.newGray }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.4822 8.97258V19.3398C10.4822 20.3615 11.3106 21.1898 12.3326 21.1898H12.5116C13.5336 21.1898 14.362 20.3615 14.362 19.3398V8.97258C14.362 7.95081 13.5336 7.12251 12.5116 7.12251H12.3326C11.3106 7.12251 10.4822 7.95081 10.4822 8.97258Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.918 4.28347V19.3398C17.918 20.3615 18.7464 21.1898 19.7684 21.1898H19.9474C20.9694 21.1898 21.7978 20.3615 21.7978 19.3398V4.28347C21.7978 3.26171 20.9694 2.43341 19.9474 2.43341H19.7684C18.7464 2.43341 17.918 3.26171 17.918 4.28347Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.04663 14.6336L3.04663 19.3398C3.04663 20.3615 3.87508 21.1898 4.89702 21.1898H5.07609C6.09803 21.1898 6.92648 20.3615 6.92648 19.3398V14.6336C6.92648 13.6118 6.09803 12.7835 5.07609 12.7835H4.89702C3.87508 12.7835 3.04663 13.6118 3.04663 14.6336Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Transactions;
