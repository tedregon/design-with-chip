document.addEventListener('DOMContentLoaded', function () {
  var STORAGE_KEY = 'chip_portfolio_authed_v1';
  var PASSWORD = 'chip2026';

  var pendingTarget = null;
  var panel = document.getElementById('portfolio-password-panel');
  var form = document.getElementById('portfolio-password-form');
  var input = document.getElementById('portfolio-password-input');
  var error = document.getElementById('portfolio-password-error');
  var cancelBtn = document.getElementById('portfolio-password-cancel');

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

  function openPanel(targetUrl) {
    pendingTarget = targetUrl || null;
    if (!panel) return;
    panel.classList.add('is-visible');
    panel.setAttribute('aria-hidden', 'false');
    if (input) {
      input.value = '';
      input.focus();
    }
    if (error) {
      error.textContent = '';
    }
  }

  function closePanel() {
    if (!panel) return;
    panel.classList.remove('is-visible');
    panel.setAttribute('aria-hidden', 'true');
    pendingTarget = null;
    if (error) {
      error.textContent = '';
    }
  }

  function goToTarget(url) {
    if (!url) return;
    window.open(url, '_blank', 'noopener');
  }

  var cards = Array.prototype.slice.call(
    document.querySelectorAll('.portfolio-card[data-target]')
  );

  function handleActivateCard(card, event) {
    if (event) {
      event.preventDefault();
    }
    var targetUrl = card.getAttribute('data-target');
    if (!targetUrl) return;

    if (isAuthed()) {
      goToTarget(targetUrl);
    } else {
      openPanel(targetUrl);
    }
  }

  cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      handleActivateCard(card, e);
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        handleActivateCard(card, e);
      }
    });
  });

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
        setAuthed();
        var target = pendingTarget;
        closePanel();
        goToTarget(target);
      } else {
        if (error) error.textContent = 'Incorrect password. Please try again.';
        input.focus();
        input.select();
      }
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', function () {
      closePanel();
    });
  }
});

