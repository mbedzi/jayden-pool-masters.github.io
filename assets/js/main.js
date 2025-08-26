// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
})();

// Year in footer
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();

// Simple lightbox for gallery
(function () {
  var lightbox = document.getElementById('lightbox');
  var imgEl = lightbox ? lightbox.querySelector('img') : null;
  var closeBtn = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  if (!lightbox || !imgEl) return;

  function openLightbox(src, alt) {
    imgEl.src = src;
    imgEl.alt = alt || 'Gallery image';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.hidden = true;
    imgEl.src = '';
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    var target = e.target;
    if (target && target.closest && target.closest('.gallery-item')) {
      e.preventDefault();
      var link = target.closest('.gallery-item');
      if (link && link.getAttribute) {
        openLightbox(link.getAttribute('href'), link.querySelector('img') ? link.querySelector('img').alt : '');
      }
    }
    if (target === lightbox || (target && target.classList && target.classList.contains('lightbox-close'))) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
})();


