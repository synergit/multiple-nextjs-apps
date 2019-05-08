import React from 'react';

export default () => (
  <div>
    <h1>EXAMPLE APP 2</h1>
    <h2>Basepath:</h2>
    <p>/</p>
    <h2>Routes:</h2>
    <ul>
      <li><a href="/">/</a></li>
      <li><a href="/app2">/app2</a> (CURRENT)</li>
    </ul>
    <h2>Static folder:</h2>
    <p>/static</p>
    <img src="/static/image.png" />
    <h2>Total Apps:</h2>
    <ul>
      <li><a href="/app1">App 1</a></li>
      <li><a href="/app2">App 2 (CURRENT)</a></li>
      <li><a href="/app3">App 3</a></li>
    </ul>
  </div>
);
