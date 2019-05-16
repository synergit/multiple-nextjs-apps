import React from 'react';
import staticPath from '../helpers/staticPath';

export default () => (
  <div>
    <h1>EXAMPLE APP 3</h1>
    <h2>Basepath:</h2>
    <p>/app3</p>
    <h2>Routes:</h2>
    <ul>
      <li><a href="/app3">/app3 (CURRENT)</a></li>
      <li><a href="/app3/page-app3">/app3/page-app3 </a></li>
    </ul>
    <h2>Static folder:</h2>
    <p>/static/image.png</p>
    <img src={staticPath('/static/image.png')} />
    <h2>Total Apps:</h2>
    <ul>
      <li><a href="/page-app1">App 1</a></li>
      <li><a href="/page-app2">App 2</a> </li>
      <li><a href="/app3">App 3</a> (CURRENT)</li>
    </ul>
  </div>
);
