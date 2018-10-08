// JavaScript of the main content of gilabert.design.

// MARK: - General values

const displaying = '1.6s transform cubic-bezier(0.5, 0.15, 0.15, 1)';
const leaving = '0.7s transform cubic-bezier(0.5, 0.15, 0.15, 1)';

const load = new Load();
const color = new Color();

document.addEventListener('DOMContentLoaded', function() {
  prepareDocument();
});

window.addEventListener('load', function() {
  load.prepare();
  setupAnalytics();
});

function Load() {

  this.prepare = function() {
    message('email', 'znvygb:pbagnpg@hfrtenl.pbz', 'V unir na vffhr jvgu Tenl');
    message('correu', 'znvygb:cerff@hfrtenl.pbz', 'Uryyb sebz gur cerff');
    
    color.prepare();
  }
}

function Color() {

  this.prepare = function() {
    self = this;
    const logo = document.class('icon');

    const headline = document.tag('h2');
    const gray = document.class('gray');
    const download = document.class('download');
    const now = document.class('download-now');
    const gradient = document.class('gradient');
    const top = document.selector('.rectangles .top');
    const bottom = document.selector('.rectangles .bottom');

    const navigations = document.classes('link');
    const apps = document.classes('app');
    const credits = document.selectors('.credits p');
    const links = document.selectors('.credits a');

    const array = [].concat(navigations).concat(credits).concat(links)
    .concat(headline).concat(gray).concat(download).concat(gradient)
    .concat(top).concat(bottom).concat(now).concat(apps);

    self.transition(array);

    logo.addEventListener('click', function() {
      self.theme(array);
    }, false);
  }

  this.theme = function(array) {
    for (var i = 0; i < array.length; i++) {
      const element = array[i];
      element.classList.toggle('darken');
    }
  }

  this.transition = function(array) {
    for (var i = 0; i < array.length; i++) {
      const element = array[i];
      if (element === undefined) { return; }
      element.style.transition = 'all 0.2s ease';
    }
  }
}
