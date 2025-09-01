/**
 * pagination-redirect.js
 * 
 * This script ensures that bookmarked posts on paginated pages
 * (with ?page=N in the URL) always redirect to the correct post
 * if it has moved to a different page.
 * 
 * Usage:
 * 1. Include this script on your paginated post list pages.
 * 2. All post links must have the class "post-link".
 */

document.addEventListener("DOMContentLoaded", function() {

  // --- Only run redirect logic if we are on a paginated page ---
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get("page"); // e.g., ?page=1
  if (!page) return; // Not a paginated page, exit early

  // --- Collect all post links on the current page ---
  // Make sure each post link in your list has class="post-link"
  const postsOnPage = Array.from(document.querySelectorAll(".post-link"))
                           .map(a => a.getAttribute("href"));

  // --- Determine current bookmarked post URL path ---
  const bookmarkedPost = window.location.pathname; 
  // e.g., "/parchment/posts/welcome.html"

  // --- If the bookmarked post is not on this page, redirect to its permalink ---
  if (!postsOnPage.includes(bookmarkedPost)) {
    window.location.href = bookmarkedPost;
  }

});
