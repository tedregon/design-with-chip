document.addEventListener('DOMContentLoaded', function () {
  var STORAGE_KEY = 'chip_portfolio_authed_v1';
  var PASSWORD = 'chip2026';

  var main = document.querySelector('.portfolio-main[data-figma-url]');
  if (!main) return;

  var figmaUrl = main.getAttribute('data-figma-url');
  var panel = document.getElementById('portfolio-password-panel');
  var form = document.getElementById('portfolio-password-form');
  var input = document.getElementById('portfolio-password-input');
  var error = document.getElementById('portfolio-password-error');
  var iframeSection = document.getElementById('portfolio-case-frame');
  var iframe = document.getElementById('portfolio-case-iframe');

  function isAuthed() {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === 'true';
    } catch (e) {
      return false;
    }
  }

  function setAuthed() {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {
      // ignore
    }
  }

  function showIframe() {
    if (!iframeSection || !iframe) return;
    var src = iframe.getAttribute('data-src') || figmaUrl;
    if (src && !iframe.src) {
      iframe.src = src;
    }
    iframeSection.hidden = false;
  }

  function hidePanel() {
    if (!panel) return;
    panel.classList.remove('is-visible');
    panel.setAttribute('aria-hidden', 'true');
  }

  function unlock() {
    setAuthed();
    hidePanel();
    showIframe();
  }

  // If already authed, skip prompt
  if (isAuthed()) {
    unlock();
  } else if (panel) {
    panel.classList.add('is-visible');
    panel.setAttribute('aria-hidden', 'false');
    if (input) {
      input.focus();
    }
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!input) return;
      var value = input.value.trim();
      if (!value) {
        if (error) error.textContent = 'Please enter the password.';
        input.focus();
        return;
      }
      if (value === PASSWORD) {
        if (error) error.textContent = '';
        unlock();
      } else {
        if (error) error.textContent = 'Incorrect password. Please try again.';
        input.focus();
        input.select();
      }
    });
  }
});

