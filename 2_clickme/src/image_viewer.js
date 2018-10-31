import './image_viewer.css';  // All non js should have the file extension

export default () => {
    const image = document.createElement('img');
    image.src = small;
    document.body.appendChild(image);
}

