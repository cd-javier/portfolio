function copyContent(e) {
  const toCopy = e.target.textContent
  navigator.clipboard.writeText(toCopy);
  e.target.textContent = 'copied!';
  setTimeout(function () {
    e.target.textContent = toCopy;
  }, 1000);
}

document.getElementById('copy-email').addEventListener('click', copyContent);
