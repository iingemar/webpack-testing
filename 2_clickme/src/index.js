const button = document.createElement('button');

button.innerText = 'Click me!';

button.onclick = () => {
    console.log('click');
    // Global js constant
    System.import('./image_viewer').then(module => {
        console.log(module);
    });
};

document.body.appendChild(button);