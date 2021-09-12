import Luffy from './luffy-image.png';
import './luffy-image.scss';

class LuffyImage {
  render() {
    const img = document.createElement('img');
    img.src = Luffy;
    img.alt = 'Luffy';
    img.classList.add('luffy-image');

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default LuffyImage;
