import React from "react";
import { Camo1, Camo2, Dirty1, Dirty2, Dots } from "../parts/Textures";

interface TextureProps {
  type: number;
}

const Texture: React.FC<TextureProps> = (props) => {
  const types: { [key: string]: React.FC } = {
    Camo1,
    Camo2,
    Dirty1,
    Dirty2,
    Dots,
  };

  const typeKeys = Object.keys(types);
  const selectedTypeKey = typeKeys[props.type];
  const Type = types[selectedTypeKey];

  return (
    <g id="texture_part" transform="translate(-10, 25) scale(1.3)">
      <Type />
    </g>
  );
};

export default Texture;
