fetch('navigation.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading header:', error);
  });

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = location.pathname.split("/").pop(); // e.g. "about.html"
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
