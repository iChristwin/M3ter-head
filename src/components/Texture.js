import React from 'react'
import {Camo1,
  Camo2,
  Dirty1,
  Dirty2,
  Dots
} from '../Parts/Textures'

const Texture = props => {
  const types = {
    None: null,
    Camo1,
    Camo2,
    Dirty1,
    Dirty2,
    Dots
  }
  const typeKeys = Object.keys(types)
  const Type = types[typeKeys[props.type]]
  return <g id="texture_part" transform="translate(-10, 25) scale(1.3)">{Type && <Type />}</g>
}
export default Texture
