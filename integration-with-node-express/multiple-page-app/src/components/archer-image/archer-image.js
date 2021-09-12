import Archer from './archer-image.png';
import './archer-image.scss';

class ArcherImage {
  render() {
    const img = document.createElement('img');
    img.src = Archer;
    img.alt = 'Archer';
    img.classList.add('archer-image');

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default ArcherImage;
