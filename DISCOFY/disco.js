// Create a div to contain the disco ball
let discoContainer = document.createElement('div');
discoContainer.id = 'disco-container';
discoContainer.style.position = 'fixed';
discoContainer.style.height = '100vh';
discoContainer.style.width = '100vw';
discoContainer.style.top = 0;
discoContainer.style.left = 0;

// Create the disco ball
let discoBall = document.createElement('div');
discoBall.id = 'disco-ball';
discoBall.style.position = 'absolute';
discoBall.style.height = '200px';
discoBall.style.width = '200px';
discoBall.style.borderRadius = '50%';
discoBall.style.background = '#000';
discoBall.style.top = 'calc(50% - 100px)';
discoBall.style.left = 'calc(50% - 100px)';

// Add the disco ball to the container
discoContainer.appendChild(discoBall);

// Add the container to the page
document.body.appendChild(discoContainer);

// Animate the disco ball
let colorIndex = 0;
let colors = ['#f00', '#0f0', '#00f', '#ff0'];

setInterval(function() {
  discoBall.style.background = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 500);
