function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  body.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.scroll-animate').forEach(card => {
  observer.observe(card);
});

// Typing animation for subtitle
document.addEventListener('DOMContentLoaded', function() {
  const subtitle = document.querySelector('.hero p');
  subtitle.classList.add('animated-subtitle');
  subtitle.innerHTML = '<span class="typed-text"></span><span class="cursor">|</span>';

  const typedText = document.querySelector('.typed-text');
  const cursor = document.querySelector('.cursor');

  const words = ["Teknisi Jaringan ", "Fresh Graduate ", "Freelancer "];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  function typeWriter() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typedText.textContent = currentWord.substring(0, charIndex--);
    } else {
      typedText.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeWriter, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeWriter, 500);
    } else {
      setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }
  }

  typeWriter();
});