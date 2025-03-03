window.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll("h1, h2, p, ul li, .carousel-item");
    
    fadeInElements.forEach(element => {
      element.classList.add("fade");
    });
  });
  
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
      document.body.style.backgroundColor = "#333";
    });
    anchor.addEventListener('mouseout', () => {
      document.body.style.backgroundColor = "#111";
    });
  });
  