// === FUNKCJA MRUGANIA OCZU ===
function blinkRandomly() {
  const blink = document.querySelector('.blink-img');
  if (!blink) return; // sprawdź czy element istnieje
  
  function triggerBlink() {
    blink.style.opacity = '1';
    setTimeout(() => {
      blink.style.opacity = '0';
    }, 120); // czas mrugania
    
    // Losowy czas do następnego mrugania (3-9 sekund)
    const nextBlink = Math.random() * 6000 + 3000;
    setTimeout(triggerBlink, nextBlink);
  }
  triggerBlink();
}

// === HAMBURGER MENU ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  // Po kliknięciu w hamburger - pokaż/ukryj menu
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
  });
  
  // Po kliknięciu w dowolny link - schowaj menu
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    });
  });
}

// === CHOWANIE NAWIGACJI PRZY SCROLL ===
let lastScrollTop = 0;
const nav = document.querySelector('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // przewijanie w dół - ukryj nawigację
      nav.style.top = '-100px';
    } else {
      // przewijanie w górę - pokaż nawigację
      nav.style.top = '0';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// Uruchom funkcję mrugania po załadowaniu strony
blinkRandomly();


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('[data-reveal]').forEach(el => {
    observer.observe(el);
});

// NOWY KOD - Pozwala scrollować po filmiku na telefonie
// NOWY KOD - Pozwala scrollować po filmiku na telefonie
// NOWY KOD - Pozwala scrollować po filmiku na telefonie
// LAZY LOADING OBRAZKÓW
// AUTOMATYCZNY LAZY LOADING - bez zmiany HTML




//--------------------------

 function createCarousel(selector) {
  var flkty = new Flickity(selector, {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false
  });
  
  var autoSlide = setInterval(function() {
    flkty.next();
  }, 3000);
  
  function stopAutoSlide() {
    clearInterval(autoSlide);
  }
  
  flkty.on('pointerDown', stopAutoSlide);
  flkty.on('dragStart', stopAutoSlide);
  flkty.on('staticClick', stopAutoSlide);
}

// Użycie:
createCarousel('.carousel-1');
createCarousel('.carousel-2');