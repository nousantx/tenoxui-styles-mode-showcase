/**
 * sidebar.js
 *
 * Simplest way to deal with styles state using tenoxui
 */

// initial sidebar state: hidden
let sidebar = false;

// sidebar toggler
function toggleSidebar() {
  sidebar = !sidebar;
  // show sidebar
  makeStyle(".sidebar", sidebar ? "l-0" : "l--100%");
}
