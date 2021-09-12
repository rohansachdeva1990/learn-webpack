import Heading from './components/heading/heading.js';
import LuffyImage from './components/luffy-image/luffy-image.js';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('luffy, king of the pirates!'));

const luffyImage = new LuffyImage();
luffyImage.render();
