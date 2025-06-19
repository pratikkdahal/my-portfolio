document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-btn');

  hamburger.addEventListener('click', function () {
    sidebar.classList.add('active');
  });

  closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('active');
  });
});
