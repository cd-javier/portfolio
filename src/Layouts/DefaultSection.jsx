export default function DefaultSection({
  children,
  className,
  anchor,
  heading,
}) {
  return (
    <div className={`section-wrapper ${className ? className : ''}`}>
      <div className="section">
        {anchor && <div className="anchor" id={anchor}></div>}
        {heading && <h2>{heading}</h2>}
        {children}
      </div>
    </div>
  );
}
