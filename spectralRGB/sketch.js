let img;

function preload() {
  img = loadImage('https://nathanmelenbrink.github.io/lab/programming/spectralRGB/spectrum1.png');
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
  loadPixels();
  const d = pixelDensity();

  for (let x = 0; x < width; x++) {
    let r_total = 0; 
    for (let y = 0; y < height; y++) {
      const i = 4 * d*(y * d*width + x);
      const [r, g, b] = [pixels[i], pixels[i + 1], pixels[i + 2]]; // get colors
      r_total += r; 
      //g_total += g; 
      //b_total += b; 

    }
    r_total /= height;
    print(r_total);
    line(x, r_total, x-1, r_total);
  }
  noLoop();
}