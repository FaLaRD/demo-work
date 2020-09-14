'use strict';

document.addEventListener('DOMContentLoaded', function () {
  /* ------------ Modal Wins ------------ */
  document.addEventListener('click', function (e) {
    let target = e.target;

    if (!target.hasAttribute('data-modal-win-trigger')) return;

    let winId = target.dataset.modalWinTrigger;

    /* If wide */
    let cls = "";
    if (target.closest('.product__view-btn')) {
      cls = 'modal-win__main--wide';
    }
    /* If wide */

    let instance = new Modal({
      content: document.querySelector('[data-modal-win="' + winId + '"]'),
      className: cls,
    });

    instance.open();

    e.preventDefault();
  });
  /* ------------ Modal Wins ------------ */
});

svg4everybody({});

/* ------------ Lazy Load Video From YouTube ------------ */
function init() {
  const vidDefer = document.getElementsByTagName('iframe');

  for (let i = 0; i < vidDefer.length; i++) {
    if (vidDefer[i].getAttribute('data-src')) {
      vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
    }
  }
}

window.onload = init;
/* ------------ Lazy Load Video From YouTube ------------ */