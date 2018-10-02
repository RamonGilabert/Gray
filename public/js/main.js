// JavaScript of the main content of gilabert.design.

// MARK: - General values

const displaying = '1.6s transform cubic-bezier(0.5, 0.15, 0.15, 1)';
const leaving = '0.7s transform cubic-bezier(0.5, 0.15, 0.15, 1)';

const load = new Load();

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
  }
}
