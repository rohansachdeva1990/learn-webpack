import Luffy from './onepc.jpg';
import altText from './altText.txt';

function addImage() {
  const img = document.createElement('img');
  img.alt = altText;
  img.width = 300;
  img.src = Luffy;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
