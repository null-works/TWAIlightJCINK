/**
 * TWAILIGHT - Core JavaScript
 * Theme toggle, mobile navigation, and Jcink utilities
 */

(function() {
  'use strict';

  /* ==========================================================================
     Theme Toggle
     ========================================================================== */

  var THEME_KEY = 'tw-theme';

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // localStorage not available
    }
  }

  function getCurrentTheme() {
    return document.documentElement.classList.contains('lightMode') ? 'light' : 'dark';
  }

  function setTheme(theme) {
    if (theme === 'light') {
      document.documentElement.classList.remove('darkMode');
      document.documentElement.classList.add('lightMode');
    } else {
      document.documentElement.classList.remove('lightMode');
      document.documentElement.classList.add('darkMode');
    }
    setStoredTheme(theme);

    // Update meta theme-color for mobile browsers
    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'light' ? '#fafafc' : '#1a1a1e');
    }
  }

  function toggleTheme() {
    var current = getCurrentTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  function initThemeToggle() {
    var toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        toggleTheme();
      });

      // Keyboard support
      toggleBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      });
    }

    // Apply stored theme on load (backup for inline script)
    var stored = getStoredTheme();
    if (stored) {
      setTheme(stored);
    }
  }

  /* ==========================================================================
     Mobile Navigation
     ========================================================================== */

  function initMobileNav() {
    var hamburger = document.getElementById('mobileMenuToggle');
    var mobileNav = document.getElementById('mobileNav');

    if (!hamburger || !mobileNav) return;

    function toggleMenu() {
      var isOpen = mobileNav.classList.contains('is-open');

      if (isOpen) {
        mobileNav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      } else {
        mobileNav.classList.add('is-open');
        hamburger.setAttribute('aria-expanded', 'true');
      }
    }

    function closeMenu() {
      mobileNav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      toggleMenu();
    });

    // Keyboard support
    hamburger.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });

    // Close menu on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        closeMenu();
        hamburger.focus();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (mobileNav.classList.contains('is-open')) {
        if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
          closeMenu();
        }
      }
    });

    // Close menu on resize to desktop
    var mediaQuery = window.matchMedia('(min-width: 769px)');
    function handleResize(e) {
      if (e.matches) {
        closeMenu();
      }
    }
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleResize);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleResize);
    }
  }

  /* ==========================================================================
     Dropdown Menus
     ========================================================================== */

  function initDropdowns() {
    var dropdowns = document.querySelectorAll('.tw-userbar-dropdown');

    dropdowns.forEach(function(dropdown) {
      var trigger = dropdown.querySelector('button, a');
      var content = dropdown.querySelector('.tw-userbar-dropdown-content');

      if (!trigger || !content) return;

      // Keyboard navigation
      trigger.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          var firstLink = content.querySelector('a');
          if (firstLink) firstLink.focus();
        }
      });

      // Allow tab navigation through dropdown
      var links = content.querySelectorAll('a');
      links.forEach(function(link, index) {
        link.addEventListener('keydown', function(e) {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            var next = links[index + 1];
            if (next) next.focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            var prev = links[index - 1];
            if (prev) {
              prev.focus();
            } else {
              trigger.focus();
            }
          } else if (e.key === 'Escape') {
            trigger.focus();
          }
        });
      });
    });
  }

  /* ==========================================================================
     Smooth Scroll for Anchors
     ========================================================================== */

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update focus for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    });
  }

  /* ==========================================================================
     Jcink Utilities
     ========================================================================== */

  function initJcinkUtils() {
    // Fix external links to open in new tab
    document.querySelectorAll('a[href^="http"]').forEach(function(link) {
      if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });

    // Add loading states to forms
    document.querySelectorAll('form').forEach(function(form) {
      form.addEventListener('submit', function() {
        var submitBtn = form.querySelector('input[type="submit"], button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.style.opacity = '0.7';
        }
      });
    });
  }

  /* ==========================================================================
     Initialize
     ========================================================================== */

  function init() {
    initThemeToggle();
    initMobileNav();
    initDropdowns();
    initSmoothScroll();
    initJcinkUtils();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose theme toggle globally for custom buttons
  window.twailight = {
    toggleTheme: toggleTheme,
    setTheme: setTheme,
    getCurrentTheme: getCurrentTheme
  };

})();
