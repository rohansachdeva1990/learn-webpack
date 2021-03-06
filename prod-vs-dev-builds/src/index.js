import Heading from './components/heading/heading.js';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';

const heading = new Heading();
const heading2 = new Heading();
const heading3 = new Heading();
const helloWorldButton = new HelloWorldButton();

heading.render();
heading2.render();
heading3.render();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}

helloWorldButton.methodThatDoesNotExist();
