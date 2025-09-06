export function SocialIconList({ id, icon }) {
  return (
    <li id={id}>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
      >
        {icon}
      </a>
    </li>
  );
}
