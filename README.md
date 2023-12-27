# M3ter-head: Unique Avatars for the M3tering Protocol

<p align="center"><img src='./M3ter-head.svg'/></p>
M3ter-Head avatars to infuse a touch of whimsy and individuality into the M3tering Protocol.

Inspired by the charming [Bottts](https://bottts.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley) and adapted fromfrom [magnusson](https://github.com/magnusson/bottts-maker)'s [Bottts Maker 🤖](https://github.com/magnusson/bottts-maker).


## Usage:

**Installation:**

1. Add the `m3ter-head` component to your project using npm:

   ```bash
   npm install m3ter-head --save
   ```

**Import and Render:**

1. Import the M3ter component into your React code:

   ```javascript
   import * as React from 'react';
   import M3ter from 'm3ter-head';
   ```

2. Render the avatar within your component, providing a unique seed string for generation:

   ```jsx
   export default class MyComponent extends React.Component {
     render() {
       return (
         <div>
           Your M3ter:
           <M3ter seed={"m3ter_id_string"} />
         </div>
       );
     }
   }
   ```


**Licensing:**

The `m3ter-head` component is open-source and adheres to the creative commons license, fostering a collaborative and accessible development environment.

