// JavaScript of the main content of gilabert.design.

// MARK: - General values

const displaying = '1.6s transform cubic-bezier(0.5, 0.15, 0.15, 1)';
const leaving = '0.7s transform cubic-bezier(0.5, 0.15, 0.15, 1)';

const load = new Load();
const squircle = new Squircle();

document.addEventListener('DOMContentLoaded', function() {
  prepareDocument();
});

window.addEventListener('load', function() {
  load.prepare();
  setupAnalytics();
});

function Load() {

  this.prepare = function() {
    encryptCorreu('email');
    squircle.calculate();
  }
}

function Squircle() {

  this.calculate = function() {
    const button = document.class('squircle');
    const values = [];

    const squircle = radius => theta => ({
      x: Math.pow(Math.abs(Math.cos(theta)), 2 / radius) * 50 * Math.sign(Math.cos(theta)) + 50,
      y: Math.pow(Math.abs(Math.sin(theta)), 2 / radius) * 50 * Math.sign(Math.sin(theta)) + 50
    });

    function radiants(degree) {
      return degree * Math.PI / 180
    }

    function clean(array) {
      values.push(array.x + '%');
      values.push(array.y + '%');
    }

    (new Array(360))
    .fill(0)
    .map((x, i) => i)
    .map(radiants)
    .map(squircle(16))
    .map(({ x, y }) => ({ x: Math.round(x * 10)/10, y: Math.round(y * 10)/10 }))
    .map(clean);
  }
}
