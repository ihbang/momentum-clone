// import all images from src/img directory, choose random one, and then export it
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
const image = images[Math.floor(Math.random() * images.length)];

export default image;
