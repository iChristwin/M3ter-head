import React from 'react'
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
  Square2
} from '../Parts/Mouths'

const Mouth = props => {
  const types = {
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
    Square2
  }
  const typeKeys = Object.keys(types)
  const Type = types[typeKeys[props.type]]
  return (
    <g id="mouth_part" transform="translate(52, 124)">
      <Type />
    </g>
  )
}
export default Mouth
