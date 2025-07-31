export default function CopyLink({ children }) {
  function handleClick(e) {
    const toCopy = e.target.textContent;
    navigator.clipboard.writeText(toCopy);
    e.target.textContent = 'copied!';
    setTimeout(function () {
      e.target.textContent = toCopy;
    }, 1000);
  }

  return (
    <button className="link" onClick={handleClick}>
      {children}
    </button>
  );
}
