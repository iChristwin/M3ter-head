import React from "react";

import {
  Arturito,
  Bulging,
  Dizzy,
  Eva,
  Frame1,
  Frame2,
  Glow,
  Hal,
  Happy,
  Hearts,
  Robocop,
  Round,
  RoundFrame1,
  RoundFrame2,
  Sensor,
  Shade,
} from "../parts/Eyes";

interface EyesProps {
  type: number;
}

const Eyes: React.FC<EyesProps> = (props) => {
  const types: { [key: string]: React.FC } = {
    Arturito,
    Bulging,
    Dizzy,
    Eva,
    Frame1,
    Frame2,
    Glow,
    Hal,
    Happy,
    Hearts,
    Robocop,
    Round,
    RoundFrame1,
    RoundFrame2,
    Sensor,
    Shade,
  };

  const typeKeys = Object.keys(types);
  const selectedTypeKey = typeKeys[props.type];
  const Type = types[selectedTypeKey];
  return (
    <g id="eyes_part" transform="translate(38, 76)">
      <Type />
    </g>
  );
};

export default Eyes;
