// ==========================================
// IMAGE DATA
// ==========================================
var heroImages = [
  { url: 'assets/fc2a791862967d64352ac61d61311de8694e06e3.png', title: 'Modern Architecture Excellence' },
  { url: 'assets/33425c2c134616e74d310b955141ac10f8769eee.png', title: 'Timeless Building Design' },
  { url: 'assets/ae7affa937863bf3704450512b42bb14c9314e1f.png', title: 'Minimal Design Philosophy' },
  { url: 'assets/9d209a68bbb9cae2c276304d14e0580399d4aa3e.png', title: 'Mountain Modern Living' },
  { url: 'assets/1a1dfa76e72e2a2dab3caf8dd4a999cfa9534a49.png', title: 'Craftsman Style Heritage' },
  { url: 'assets/ceccbc4036d452a86562810473f02640857018c5.png', title: 'Indoor-Outdoor Integration' },
  { url: 'assets/5e64d38177b6ce9ababfc25cd1140131831817ff.png', title: 'Mountain Estate Design' },
  { url: 'assets/4f84ead1ea28b50cca9d7dbee61bb18f3b9eedf9.png', title: 'Timeless Architecture' },
  { url: 'assets/c2aef657a79ff99a95da3dacc2ab3e10d4fde780.png', title: 'Elegant Home Design' },
  { url: 'assets/6b0c279b28fd46db57894e832c322e851659afb5.png', title: 'Custom Residential' },
  { url: 'assets/256b3fc19be446ca62b5ebf8c5a2edfdb6f9be4a.png', title: 'Architectural Innovation' },
  { url: 'assets/3f84bd3fa83956b8cec82ce4a6e5f3e48ca4c571.png', title: 'Luxury Living' }
];

var portfolioImages = [
  { url: 'assets/1768db79a3fd3a464a63f3066990f9bc3457703a.png', title: 'Custom Residential Estates - Utah Architect Design' },
  { url: 'assets/1f984f3f45d00005607cf93c53594c6a6b4a2dde.png', title: 'Lakeside Mountain Home Design Utah' },
  { url: 'assets/32fd5716257922eb8f0d69ec520b9e4cfa48cf32.png', title: 'Timeless Estate Home - Salt Lake City Architect' },
  { url: 'assets/7314b7655cd3a0b64939005512a25458e772dc38.png', title: 'Custom Home Design Portfolio Utah' },
  { url: 'assets/ac66924e60420f0f294b72f2f2e25d1e41e342c5.png', title: 'Multi-Family Residence Design Utah' },
  { url: 'assets/5ca2a0ece19a8370b188ca985e01efa3146e2476.png', title: 'Tudor Style Custom Home Utah' },
  { url: 'assets/865d60a027195ed0b8aa32de7dd39100519cddc0.png', title: 'Luxury Pool Estate - Custom Home Design' },
  { url: 'assets/b47867737693d79261208b2383012353d29f903e.png', title: 'Craftsman Home Collection Salt Lake City' },
  { url: 'assets/9ee7f93b5c63ad76aa9bee401e920c8896887744.png', title: 'Traditional Custom Home Design Utah' },
  { url: 'assets/1842f6dece412003c3950de338b96210ad746ef6.png', title: 'Country Residence - Utah Custom Home' },
  { url: 'assets/8e248a0409d21e7b73995f7c6204c08101dbb327.png', title: 'Modern Custom Homes Salt Lake City' },
  { url: 'assets/3f7c51dd10b9735896468347537c52fa51ab53c8.png', title: 'Mountain Lodge Estate - Park City Architect' },
  { url: 'assets/0841dd518688e9449e17143a72da6d39a6f0af9e.png', title: 'Craftsman Style Custom Home Utah' },
  { url: 'assets/2cc071e98c236bb20af6c939bcaeaf4286a0489d.png', title: 'Residential Architecture Projects Utah' },
  { url: 'assets/594c724f176ec62060df36ba590eb4b0e5d8f390.png', title: 'Multi-Unit Development - Utah Architect' },
  { url: 'assets/9e813b8e7b6157aaf816048ffb2bcd732934496e.png', title: 'Classic Prairie Home Design Utah' },
  { url: 'assets/37361dd3817ad2505fbfaab132c44825a278ff7c.png', title: 'Timeless Home Designs Salt Lake City' },
  { url: 'assets/1ad4a110fa4520d41c6cc87ed652e97cd7bffb16.png', title: 'Adobe Style Custom Home Utah' },
  { url: 'assets/da85c4934aeefcc6021759d8c4c891d576843181.png', title: 'Victorian Estate - Custom Home Design' },
  { url: 'assets/f11c0a1ff68a9c16cf34518c5d4ad865e2b4e334.png', title: 'Traditional Family Home - Utah Architect' }
];

var interiorImages = [
  { url: 'assets/11b40452f3a35aa6781df912542d04bb66640f95.png', title: 'Lakeside Living Room with Panoramic Views' },
  { url: 'assets/de379d2b1a1f9125dd2671a81c3c7229d6f30162.png', title: 'Rustic Kitchen with Vaulted Ceilings' },
  { url: 'assets/7b8a718e76cb84a7957c7f7af416f35119aabcf2.png', title: 'Grand Staircase and Entry Hall' },
  { url: 'assets/92e054c136dc3280fcf124fee6a810759e381aa0.png', title: 'Open Concept Great Room' },
  { url: 'assets/6761d87f545368d2f23444630a781d8dc2f207d2.png', title: 'Luxury Master Bathroom with Spa Tub' },
  { url: 'assets/f90806e05e5c409f7390131e72ccfc47996af942.png', title: 'Elegant Dining Area with Custom Woodwork' },
  { url: 'assets/796b994903d134a42cc86176b4b5a6e1dea52659.png', title: 'Timeless Staircase Design' },
  { url: 'assets/602d9d47c1c7197c034377490f4842f3d98658cc.png', title: 'Traditional Living Room with Built-ins' },
  { url: 'assets/b1a765b8dd3be4432e31a744729e92d86652eeb1.png', title: 'Modern Living Space with Garden Views' },
  { url: 'assets/57baa3bdd8ac641a5db7874cb51e0a47a3ab37e1.png', title: 'Yellow Accent Wall Great Room' },
  { url: 'assets/d3d9521552db094e00c4dd237e7b5a3ef7fddc51.png', title: 'Cozy Entertainment Area' },
  { url: 'assets/60ecbfff97b59ef2351bf6403a5442639411985d.png', title: 'Gourmet Kitchen with Island Seating' },
  { url: 'assets/6560cfda5179a00be4c25d577788ab0d5306fe98.png', title: 'Custom Kitchen with Wood Cabinetry' },
  { url: 'assets/e952714327bdda9d855a74452ccb4b37cf4c9b78.png', title: 'Decorative Stairwell Detail' },
  { url: 'assets/c0a76e4751bb64400fa443f5b779b52eeee4950e.png', title: 'Formal Living Room with Piano' },
  { url: 'assets/f1925902c167915f64896208e4421670d1d027ec.png', title: 'Music Room with Grand Piano' },
  { url: 'assets/5210ad001a699ef3ffd83445dc6af4c7dd958d92.png', title: 'Open Kitchen and Breakfast Bar' },
  { url: 'assets/85945f7dc4ecc7009926820b16601640542d1986.png', title: 'Media Room with Custom Cabinetry' },
  { url: 'assets/433c7c629835ebc0f95c2a015f6991119b973327.png', title: 'Luxurious Living Room' },
  { url: 'assets/886d6f90f6df2f780716105cf0e6804ac36c70a5.png', title: 'Master Bedroom Suite' },
  { url: 'assets/5c9b26aad6f9f8ad2e01854abf89973e62615587.png', title: 'Stone Fireplace Feature' },
  { url: 'assets/120683f601fd525216c032504ae487178b61e1ad.png', title: 'Warm Master Bedroom Retreat' },
  { url: 'assets/765f3c7fcf7bdd64d3e2b7bcb8c2c320a592d407.png', title: 'Formal Dining Room' },
  { url: 'assets/bd4f4db15dd85dd87afda18732c4831655a93f7d.png', title: 'Stone Accent Wall Detail' },
  { url: 'assets/cdc573aeb3d4d2d6f3ebcf01efe1c503551068a8.png', title: 'Mediterranean Style Living Room' },
  { url: 'assets/b47988f312e7223a45be7be09ab6854c9d7e57ee.png', title: 'Custom Kitchen Design' },
  { url: 'assets/9d8ae404a169e9ee6c481d9a868cadacb8b6fd05.png', title: "Chef's Kitchen with Professional Appliances" },
  { url: 'assets/fbb4c2451fe9fdafc0d5f08540677dff68862257.png', title: 'Arched Doorway Music Room' },
  { url: 'assets/1a82c849686eb2e98e839451f6d338be0658a407.png', title: 'Grand Entertainment Space' },
  { url: 'assets/a0404a1df4ae6585718e3d8bd3dabcb38b73f2ae.png', title: 'Spanish Colonial Kitchen' },
  { url: 'assets/c65109ae4931d3943b37a27e1bce5e5248399a48.png', title: 'Custom Inlay Flooring Detail' },
  { url: 'assets/f62e810d160bed355047d43822fc6d9246f686e6.png', title: 'Elegant Window Treatment Detail' }
];

// ==========================================
// NAVIGATION
// ==========================================
var menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('nav-menu').classList.toggle('open', menuOpen);
  document.getElementById('menu-icon').style.display = menuOpen ? 'none' : 'block';
  document.getElementById('close-icon').style.display = menuOpen ? 'block' : 'none';
}

function navigateTo(section) {
  menuOpen = false;
  document.getElementById('nav-menu').classList.remove('open');
  document.getElementById('menu-icon').style.display = 'block';
  document.getElementById('close-icon').style.display = 'none';

  var el = document.getElementById(section);
  if (el) {
    var y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// ==========================================
// HERO SLIDESHOW
// ==========================================
var currentSlide = 0;
var slideInterval;

function initHero() {
  var hero = document.getElementById('home');
  var dotsContainer = document.getElementById('hero-dots');

  heroImages.forEach(function(img, i) {
    var slide = document.createElement('div');
    slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = 'url(' + img.url + ')';
    slide.innerHTML = '<div class="hero-overlay"><div class="hero-text">' +
      '<h2>Craig Kitterman</h2>' +
      '<p class="subtitle">&amp; Associates Architects</p>' +
      '<div class="divider"></div>' +
      '<p class="slide-title">' + img.title + '</p>' +
      '</div></div>';
    hero.insertBefore(slide, dotsContainer);

    var dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.onclick = (function(index) {
      return function() { goToSlide(index); };
    })(i);
    dotsContainer.appendChild(dot);
  });

  startSlideshow();
}

function goToSlide(index) {
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.hero-dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  resetSlideshow();
}

function nextSlide() {
  goToSlide((currentSlide + 1) % heroImages.length);
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetSlideshow() {
  clearInterval(slideInterval);
  startSlideshow();
}

// ==========================================
// GALLERY
// ==========================================
var currentGallery = [];
var currentLightboxIndex = 0;

function buildGallery(containerId, images) {
  var container = document.getElementById(containerId);
  images.forEach(function(img, i) {
    var item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = '<img src="' + img.url + '" alt="' + img.title + '" loading="lazy">' +
      '<div class="overlay"><h3>' + img.title + '</h3></div>';
    item.onclick = (function(gallery, index) {
      return function() { openLightbox(gallery, index); };
    })(images, i);
    container.appendChild(item);
  });
}

// ==========================================
// LIGHTBOX
// ==========================================
function openLightbox(gallery, index) {
  currentGallery = gallery;
  currentLightboxIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.classList.remove('no-scroll');
}

function lightboxNav(dir) {
  if (dir === 'prev') {
    currentLightboxIndex = currentLightboxIndex === 0 ? currentGallery.length - 1 : currentLightboxIndex - 1;
  } else {
    currentLightboxIndex = currentLightboxIndex === currentGallery.length - 1 ? 0 : currentLightboxIndex + 1;
  }
  updateLightbox();
}

function updateLightbox() {
  var img = currentGallery[currentLightboxIndex];
  document.getElementById('lightbox-img').src = img.url;
  document.getElementById('lightbox-img').alt = img.title;
  document.getElementById('lightbox-caption').textContent = img.title;
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
  var lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxNav('prev');
  if (e.key === 'ArrowRight') lightboxNav('next');
});

// ==========================================
// CONTACT FORM (Formspree via fetch) — commented out for now
// To re-enable, uncomment this block and the initContactForm() call below
// ==========================================
/*
function initContactForm() {
  var form = document.getElementById('contact-form');
  var msgEl = document.getElementById('form-message');
  var submitBtn = document.getElementById('submit-btn');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var email = form.querySelector('[name="email"]').value;
    if (!email || email.indexOf('@') === -1) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    var formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(function(response) {
      if (response.ok) {
        showMessage('Thank you! Your message has been sent. We\'ll get back to you soon.', 'success');
        form.reset();
      } else {
        return response.json().then(function(data) {
          var errorMsg = (data.errors && data.errors.length)
            ? data.errors.map(function(err) { return err.message; }).join(', ')
            : 'Something went wrong. Please try again or email us directly at kittermanarchitect@gmail.com';
          showMessage(errorMsg, 'error');
        });
      }
    })
    .catch(function() {
      showMessage('Network error. Please check your connection or email us directly at kittermanarchitect@gmail.com', 'error');
    })
    .finally(function() {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    });
  });

  function showMessage(text, type) {
    msgEl.textContent = text;
    msgEl.className = 'form-message ' + type;
    if (type === 'success') {
      setTimeout(function() {
        msgEl.className = 'form-message';
      }, 8000);
    }
  }
}
*/

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  initHero();
  buildGallery('photos-gallery', portfolioImages);
  buildGallery('interiors-gallery', interiorImages);
  // initContactForm(); // Uncomment when re-enabling Formspree form
});
