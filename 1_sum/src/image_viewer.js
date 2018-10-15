import './image_viewer.css';  // All non js should have the file extension

const image = document.createElement('img');
image.src = 'http://placekitten.com/200/300';

console.log(document);
console.log(document.body);
document.body.appendChild(image);