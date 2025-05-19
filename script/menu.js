const navToggle = document.getElementById('nav-toggle');
const dropdown = document.getElementById('dropdown');

function toggleDropdown() {
  if (dropdown.style.display === 'flex') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'flex';
  }
}

function closeDropdown(e) {
  if (window.innerWidth >= 768) return;
  const target = e.target.closest('a');
  if (target) {
    dropdown.style.display = 'none';
  }
}

navToggle.addEventListener('click', toggleDropdown);
dropdown.addEventListener('click', closeDropdown);
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    dropdown.style.display = 'flex'; // Ensure nav is visible when switching back to desktop
  } else {
    dropdown.style.display = 'none'; // Keep mobile behavior intact
  }
});
