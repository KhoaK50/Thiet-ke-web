// Scroll effect for navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(0, 150, 136, 0.8)';
      nav.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    } else {
      nav.style.background = 'rgba(255, 255, 255, 0.9)';
      nav.style.boxShadow = 'none';
    }
  });
  function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId); // Tìm phần tử mục tiêu theo ID
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Cuộn đến phần tử
    } else {
        console.error(`Không tìm thấy phần tử với ID: ${sectionId}`);
    }
}

  // Smooth scroll for anchor links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  // Lazy loading for images
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    });
    img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  // Thêm hiệu ứng scroll khi click vào các liên kết trong footer
document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  document.querySelector('a[href="booking2.html"]').addEventListener('click', function(e) {
    window.location.href = 'booking2.html';
});