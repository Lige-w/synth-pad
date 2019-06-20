import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SynthPad from './SynthPad';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SynthPad />, document.getElementById('root'));

serviceWorker.unregister();
