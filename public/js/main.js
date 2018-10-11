// JavaScript of the main content of gilabert.design.

// MARK: - General values

const displaying = '1.6s transform cubic-bezier(0.5, 0.15, 0.15, 1)';
const leaving = '0.7s transform cubic-bezier(0.5, 0.15, 0.15, 1)';

const load = new Load();
const color = new Color();
const hover = new Hover();

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
    hover.prepare();
  }
}

function Hover() {

  this.prepare = function() {
    const download = document.class('kit');
    const arrow = document.class('arrow');
    const hovered = '2px';
    const initial = '37px';

    arrow.style.bottom = initial;

    download.addEventListener('mouseover', function(){
      arrow.style.bottom = hovered;
    });

    download.addEventListener('mouseout', function(){
      arrow.style.bottom = initial;
    });
  }
}

function Color() {

  this.prepare = function() {
    self = this;
    const logo = document.class('icon');

    const h2 = document.tag('h2');
    const h3 = document.tags('h3');
    const h4 = document.tags('h4');
    const gray = document.class('gray');
    const download = document.class('download');
    const now = document.class('download-now');
    const gradient = document.class('content');
    const top = document.selector('.rectangles .top');
    const bottom = document.selector('.rectangles .bottom');

    const navigations = document.classes('link');
    const apps = document.classes('app');
    const credits = document.selectors('.credits p');
    const links = document.selectors('.credits a');
    const texts = document.tags('p');
    const kit = document.class('kit');
    const running = document.selectors('p a');

    const array = [].concat(navigations).concat(credits).concat(links).concat(kit)
    .concat(h2).concat(h3).concat(h4).concat(gray).concat(download).concat(gradient)
    .concat(top).concat(bottom).concat(now).concat(apps).concat(texts).concat(running);

    self.theme(array);

    window.setTimeout(function() {
      self.transition(array);
    }, 1);

    // logo.addEventListener('click', function() {
    //   self.theme(array);
    // }, false);
  }

  this.theme = function(array) {
    for (var i = 0; i < array.length; i++) {
      const element = array[i];
      if (element === undefined) { continue; }
      element.classList.toggle('darken');
    }
  }

  this.transition = function(array) {
    for (var i = 0; i < array.length; i++) {
      const element = array[i];
      if (element === undefined) { continue; }
      element.style.transition = 'all 0.2s ease';
    }
  }
}
