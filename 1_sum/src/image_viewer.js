import './image_viewer.css';  // All non js should have the file extension
import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';

const image = document.createElement('img');
image.src = small;
document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);