import React from "react";
import {
  Arturito,
  Bite,
  Diagram,
  Grill1,
  Grill2,
  Grill3,
  Robocop,
  Smile1,
  Smile2,
  Square1,
  Square2,
} from "../Parts/Mouths";

interface MouthProps {
  type: number;
}

const Mouth: React.FC<MouthProps> = (props) => {
  const types: { [key: string]: React.FC } = {
    Arturito,
    Bite,
    Diagram,
    Grill1,
    Grill2,
    Grill3,
    Robocop,
    Smile1,
    Smile2,
    Square1,
    Square2,
  };

  const typeKeys = Object.keys(types);
  const selectedTypeKey = typeKeys[props.type];
  const Type = types[selectedTypeKey];

  return (
    <g id="mouth_part" transform="translate(52, 124)">
      <Type />
    </g>
  );
};

export default Mouth;
