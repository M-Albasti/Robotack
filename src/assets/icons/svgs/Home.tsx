//* packages import
import React from "react";
import Svg, { Path } from "react-native-svg";

//* constants import
import colors from "@/constants/colors";

const Home = ({ width = 23, height = 26, color = colors.newGray }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 23 26" fill="none">
      <Path
        d="M1.24585 9.39852L11.6503 1.30701L22.0548 9.39852V22.1123C22.0548 22.7255 21.8111 23.3136 21.3774 23.7472C20.9438 24.1809 20.3556 24.4245 19.7422 24.4245H3.55841C2.94508 24.4245 2.35687 24.1809 1.92318 23.7472C1.48949 23.3136 1.24585 22.7255 1.24585 22.1123L1.24585 9.39852Z"
        stroke={color}
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.18262 24.4265V12.8657H15.1193V24.4265"
        stroke={color}
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Home;
