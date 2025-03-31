

setInterval(() => {
    donationAmount += Math.floor(Math.random() * 100);
    donationElement.textContent = `$${donationAmount.toLocaleString()} Raised`;
}, 3000);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
document.querySelector('.donation-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your donation!');
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.dashboard-nav');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("jobApplicationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let position = document.getElementById("position").value;
        let resume = document.getElementById("resume").files[0];
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || phone === "" || position === "" || !resume || message === "") {
            alert("Please fill in all fields correctly.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Application submitted successfully!");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }
});

// Add interactivity for dropdown and animations
document.addEventListener('DOMContentLoaded', function () {
  const profileBtn = document.querySelector('.profile-btn');
  const dropdownContent = document.querySelector('.dropdown-content');

  profileBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  window.addEventListener('click', (e) => {
    if (!e.target.matches('.profile-btn')) {
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    }
  });
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
});

gsap.from(".hero p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
});

gsap.from(".donate-btn", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    ease: "power2.out",
});

// About Section Animation
gsap.from(".about-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
    },
});

// Mission Section Animation
gsap.from(".mission-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".mission-section",
        start: "top 80%",
    },
});

// CTA Section Animation
gsap.from(".cta-section h2", {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
    },
});

gsap.from(".cta-section p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
    },
});

gsap.from(".cta-buttons", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
    },
});

// Check if the user is logged in
document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const signInPrompt = document.getElementById('signInPrompt');

    if (!loggedInUser) {
        // Show the sign-in prompt if the user is not logged in
        signInPrompt.style.display = 'block';
    } else {
        // Hide the sign-in prompt if the user is logged in
        signInPrompt.style.display = 'none';
    }

    // Optional: Add event listener to the sign-in button
    const signInButton = document.querySelector('.signin-btn');
    if (signInButton) {
        signInButton.addEventListener('click', () => {
            // Redirect to the sign-in page
            window.location.href = 'signin.html';
        });
    }
});

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Website Name",
  "url": "https://yourwebsite.com",
  "logo": "https://yourwebsite.com/logo.png"
}
</script>
