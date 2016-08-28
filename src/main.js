/**
 * Created by UCHATNU on 7/4/2016.
 */

import React from 'react';
import ReactDOM,{render} from 'react-dom';
import App from './components/App';


let div1 = React.createElement('h1',null,'I am h1');
let div2 = React.createElement('h2',null,'I am h2');
let rootDiv = React.createElement('div',null,div1,div2);

render(
    rootDiv,
    document.getElementById('app')
);

