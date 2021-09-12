import Heading from './components/heading/heading.js';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import React from 'react';

const heading = new Heading();
const helloWorldButton = new HelloWorldButton();

heading.render('hello world');
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}

helloWorldButton.methodThatDoesNotExist();
