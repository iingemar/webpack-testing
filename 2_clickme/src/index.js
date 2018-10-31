const button = document.createElement('button');

button.innerText = 'Click me!';

button.onclick = () => {
    console.log('click');
    // Global js constant
    System.import('./image_viewer');
};

document.body.appendChild(button);