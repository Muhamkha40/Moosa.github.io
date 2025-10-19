function changeCarColor(color) {
  const carImage = document.getElementById('car-image');
  if (!carImage) return;
  if (color === 'black') carImage.src = 'images/cclass-black.jpg';
  else if (color === 'white') carImage.src = 'images/cclass-white.jpg';
  else if (color === 'blue') carImage.src = 'images/cclass-blue.jpg';
}