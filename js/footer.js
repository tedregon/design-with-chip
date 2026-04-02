// Reusable footer component (injected into #footer-placeholder).
(function () {
  'use strict';

  var ICONS = [
    {
      label: 'LinkedIn',
      filename: 'icon-linkedin.svg',
    },
    {
      label: 'X',
      filename: 'icon-x.svg',
    },
    {
      label: 'Instagram',
      filename: 'icon-instagram.svg',
    },
    {
      label: 'TikTok',
      filename: 'icon-tiktok.svg',
    },
    {
      label: 'Facebook',
      filename: 'icon-facebook.svg',
    },
    {
      label: 'Threads',
      filename: 'icon-threads.svg',
    },
  ];

  function getPathDepth() {
    var path = window.location.pathname;
    var parts = path.replace(/^\/|\/$/g, '').split('/');
    var filtered = parts.filter(function (p) {
      return p && !/\.html$/i.test(p);
    });
    return filtered.length;
  }

  function getPathPrefix() {
    var depth = getPathDepth();
    return depth > 0 ? '../'.repeat(depth) : '';
  }

  function generateFooterHtml() {
    var prefix = getPathPrefix();
    var buttons = ICONS.map(function (icon) {
      return (
        '<button type="button" class="site-footer-social-btn" aria-label="' +
        icon.label +
        '">' +
        '<img src="' +
        prefix +
        'img/footer/' +
        icon.filename +
        '" alt="" aria-hidden="true" loading="lazy">' +
        '</button>'
      );
    }).join('');

    return (
      '<footer class="site-footer" aria-label="Footer">' +
      '<div class="site-footer-inner">' +
      '<div class="site-footer-brand">design with chip</div>' +
      '<nav class="site-footer-social" aria-label="Social links">' +
      buttons +
      '</nav>' +
      '</div>' +
      '</footer>'
    );
  }

  function initFooter() {
    var placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;
    placeholder.innerHTML = generateFooterHtml();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
  } else {
    initFooter();
  }
})();

