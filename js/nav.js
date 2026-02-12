// Navigation Component
// Automatically adjusts paths based on current page location

(function() {
    'use strict';
    
    // Detect if we're in a subfolder (depth from root)
    function getPathDepth() {
        const path = window.location.pathname;
        // Remove leading/trailing slashes and split
        const parts = path.replace(/^\/|\/$/g, '').split('/');
        // Filter out empty strings and 'index.html'
        const filtered = parts.filter(p => p && p !== 'index.html');
        // Return depth (0 for root, 1 for one level deep, etc.)
        // If we have any folder names, that's our depth
        return filtered.length;
    }
    
    // Generate relative path prefix
    function getPathPrefix() {
        const depth = getPathDepth();
        return depth > 0 ? '../'.repeat(depth) : '';
    }
    
    // Generate navigation HTML
    function generateNav() {
        const prefix = getPathPrefix();
        const logoLink = prefix ? prefix + 'index.html' : 'index.html';
        const coachingLink = prefix + 'coaching/';
        const imgPath = prefix + 'img/ArrowUpRight.svg';
        
        return `
    <nav class="navbar">
        <div class="navbar-container">
            <a href="${logoLink}" class="logo">Chip Rian</a>
            <ul class="nav-links">
                <li><a href="${coachingLink}">Coaching</a></li>
                <li><a href="https://www.linkedin.com/in/chip-rian/" target="_blank">Contact <img src="${imgPath}" alt="" class="nav-icon"></a></li>
            </ul>
        </div>
    </nav>`;
    }
    
    // Insert navigation when DOM is ready
    function initNav() {
        const navPlaceholder = document.getElementById('nav-placeholder');
        if (navPlaceholder) {
            navPlaceholder.innerHTML = generateNav();
        }
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNav);
    } else {
        initNav();
    }
})();
