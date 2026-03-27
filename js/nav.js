// Navigation — Figma node 166:901
// Train = home + portfolio reviewer. Make = make hub. Hire / Talk / About stay hidden until launch.

(function () {
    'use strict';

    var BOOKING_URL =
        'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2ngDjDjEkZRYRdnUWGRnEp_bHH0pHWHMoQcC44yyCx0xWg_OhgtikV1RYxwUQ8_6A964BAnH5z?gv=true';

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

    function getActiveNavKey() {
        var path = window.location.pathname
            .replace(/\/index\.html?$/i, '')
            .replace(/\/$/, '') || '/';
        var segments = path.split('/').filter(Boolean);
        if (segments.length === 0) return 'train';
        var first = segments[0];
        if (first === 'make') return 'make';
        if (first === 'portfolioreviewer') return 'train';
        if (first === 'hire') return 'hire';
        if (first === 'talk') return 'talk';
        if (first === 'about') return 'about';
        return null;
    }

    function linkAttrs(key, activeKey) {
        var cls = 'navbar-link';
        if (activeKey === key) cls += ' navbar-link--active';
        var attrs = 'class="' + cls + '"';
        if (activeKey === key) attrs += ' aria-current="page"';
        return attrs;
    }

    function generateNav() {
        var prefix = getPathPrefix();
        var homeLink = prefix ? prefix + 'index.html' : 'index.html';
        var makeLink = prefix + 'make/';
        var hireLink = prefix + 'hire/';
        var talkLink = prefix + 'talk/';
        var aboutLink = prefix + 'about/';
        var imgPath = prefix + 'img/ArrowUpRight.svg';
        var active = getActiveNavKey();

        return (
            '<nav class="navbar" aria-label="Main">' +
            '  <div class="navbar-container">' +
            '    <a href="' +
            homeLink +
            '" class="navbar-brand">design with chip</a>' +
            '    <ul class="navbar-nav">' +
            '      <li><a href="' +
            homeLink +
            '" ' +
            linkAttrs('train', active) +
            ' data-nav="train">Train</a></li>' +
            '      <li class="navbar-nav-item--hidden" aria-hidden="true"><a href="' +
            hireLink +
            '" ' +
            linkAttrs('hire', active) +
            ' data-nav="hire" tabindex="-1">Hire</a></li>' +
            '      <li><a href="' +
            makeLink +
            '" ' +
            linkAttrs('make', active) +
            ' data-nav="make">Make</a></li>' +
            '      <li class="navbar-nav-item--hidden" aria-hidden="true"><a href="' +
            talkLink +
            '" ' +
            linkAttrs('talk', active) +
            ' data-nav="talk" tabindex="-1">Talk</a></li>' +
            '      <li class="navbar-nav-item--hidden" aria-hidden="true"><a href="' +
            aboutLink +
            '" ' +
            linkAttrs('about', active) +
            ' data-nav="about" tabindex="-1">About</a></li>' +
            '      <li><a href="https://www.linkedin.com/in/chip-rian/" target="_blank" rel="noopener noreferrer" class="navbar-link navbar-link--external">Contact <img src="' +
            imgPath +
            '" alt="" class="navbar-link-icon" width="20" height="20"></a></li>' +
            '    </ul>' +
            '    <div class="navbar-cta-wrap">' +
            '      <a href="' +
            BOOKING_URL +
            '" class="navbar-book-btn">Book a coaching call</a>' +
            '    </div>' +
            '  </div>' +
            '</nav>'
        );
    }

    function initNav() {
        var navPlaceholder = document.getElementById('nav-placeholder');
        if (navPlaceholder) {
            navPlaceholder.innerHTML = generateNav();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNav);
    } else {
        initNav();
    }
})();
