import React from 'react';
import { render } from "react-dom";

import Tabs from './Tabs';

require('./styles.css');

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After &apos;while, <em>Crocodile</em>!
        </div>
        
      </Tabs>
    </div>
  );
}

const container = document.createElement('div');
document.body.appendChild(container);
render(<App />, container);