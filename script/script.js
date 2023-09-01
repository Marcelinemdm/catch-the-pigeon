const noBox = document.getElementById("noBox");

const generateButtonPosition = (dimension) => {
  let newDimension;
  do {
    newDimension =  Math.random() * (window[`inner${dimension}`]);
  } while (newDimension >= window[`inner${dimension}`] - 100)
  return newDimension;
}

noBox.addEventListener("mouseover", () => {
  setTimeout(() => {
    const newX = generateButtonPosition('Width');
    const newY = generateButtonPosition('Height');
    noBox.style.position = 'absolute';
    noBox.style.left = `${newX}px`;
    noBox.style.top = `${newY}px`;
  },141);
});