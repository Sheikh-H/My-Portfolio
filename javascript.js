/**
 * File: javascript.js
 * Description: Main JavaScript for the website
 * Author: Sheikh Hussain (GitHub: Sheikh-H)
 * Date: 2025-10-25
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ===== Scroll animations =====
  const animatedElements = document.querySelectorAll(
    ".slide-in-left, .slide-in-right, .slide-in-up, .fade-in"
  );

  const handleScrollAnimation = () => {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation(); // Run initially in case elements are already in view

  // ===== Mobile/tablet redirect =====
  const redirectToMobilePage = () => {
    if (window.innerWidth < 1024) {
      window.location.href = "mobile.html";
    }
  };

  // Run once on page load
  redirectToMobilePage();
});
