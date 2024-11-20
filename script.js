const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");
const logo = document.getElementById("logo");
const header = document.getElementById("header");

hamburgerMenu.addEventListener("click", () => {
  // Toggle the "active" class to show or hide the nav links
  navLinks.classList.toggle("active");

  // Toggle the "hidden" class to hide or show the logo
  logo.classList.toggle("hidden");

  // Toggle the "header-hidden" class to hide or show the header background
  header.classList.toggle("header-hidden");
});


// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Check if the link is a page navigation or an anchor link
    if (href.startsWith('#')) {
      e.preventDefault(); // Prevent default behavior for internal links
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Fade-In Animation on Scroll
const content = document.querySelector('.content');
const options = {
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      content.classList.add('fade-in');
    }
  });
}, options);

observer.observe(content);
// JavaScript for adding smooth scroll animation to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: "start"
      });
  });
});
// Select all anchor links
const links = document.querySelectorAll('a[href^="#"]');

// Add event listener for each link
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();  // Prevent default behavior

    // Get the target element
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Scroll to the target element smoothly
    window.scrollTo({
      top: targetElement.offsetTop, 
      behavior: 'smooth'  // Smooth scrolling effect
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const textArray = ["Avesh Shaikh", "WebDev","Freelancer"];
  const typewriterElement = document.querySelector(".typewriter");
  let index = 0;
  let charIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
    // Determine the current text to show
    if (!isDeleting) {
      currentText = textArray[index].substring(0, charIndex + 1);
      charIndex++;
    } else {
      currentText = textArray[index].substring(0, charIndex - 1);
      charIndex--;
    }

    // Update the displayed text
    typewriterElement.textContent = currentText;

    // Adjust typing and deleting speed
    let typeSpeed = isDeleting ? 50 : 180; // Slower typing and deleting speed

    // If the word is complete, wait before deleting
    if (!isDeleting && charIndex === textArray[index].length) {
      typeSpeed = 1800; // Pause for 1.5 seconds before deleting
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
      typeSpeed = 80; // Pause for 0.8 seconds before typing next word
    }

    // Recursively call the type function
    setTimeout(type, typeSpeed);
  }

  // Start the typing effect
  type();
});

