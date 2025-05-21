const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('change', function () {
      if (this.checked) {
        mobileMenu.classList.remove('max-h-0');
        mobileMenu.classList.add('max-h-64');
      } else {
        mobileMenu.classList.add('max-h-0');
        mobileMenu.classList.remove('max-h-64');
      }
    });

    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.checked = false;
        mobileMenu.classList.add('max-h-0');
        mobileMenu.classList.remove('max-h-64');
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      const skillsSection = document.getElementById('skills');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      if (skillsSection) {
        observer.observe(skillsSection);
      }
    });

    document.addEventListener('DOMContentLoaded', function () {
      const text = "Hi there!";
      const element = document.getElementById('typewriter');
      const container = document.getElementById('typewriter-container');
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;

      function typeWriter() {
        if (isDeleting) {
          element.textContent = text.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
        } else {
          element.textContent = text.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100;
        }

        if (element.textContent.length > 0) {
          element.style.animation = 'blink-caret 0.75s step-end infinite';
          element.style.borderRight = '2px solid rgba(255, 255, 255, 0.75)';
        } else {
          element.style.animation = 'none';
          element.style.borderRight = 'none';
        }

        if (!isDeleting && charIndex === text.length) {
          typingSpeed = 2500;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          typingSpeed = 500;
        }

        setTimeout(typeWriter, typingSpeed);
      }

      setTimeout(typeWriter, 1000);
    });  

  document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      once: true,
      duration: 800, 
      easing: 'ease-out-quad',
      offset: 100 
    });

    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        navbar.classList.remove('scrolled');
        return;
      }
      
      if (currentScroll > lastScroll) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  });
    