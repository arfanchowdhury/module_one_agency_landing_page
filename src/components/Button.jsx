export function Button({ url, label, className, icon = null }) {
  return (
    <a href={url} className={className}>
      {label}
      {icon}
    </a>
  );
}
