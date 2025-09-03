import { Button } from "./Button";

export function StatsContent({ semi_title, title, description }) {
  const className =
    "inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700";
  const icon = (
    <svg
      className="w-5 h-5 ml-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <div className="col-span-2 mb-8">
      <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
        {semi_title}
      </p>
      <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
        {title}
      </h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        {description}
      </p>
      <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
        <div>
          <Button
            url="#"
            label="Explore Legality Guide"
            className={className}
            icon={icon}
          />
        </div>

        <div>
          <Button
            url="#"
            className={className}
            label="Visit the Trust Center"
            icon={icon}
          />
        </div>
      </div>
    </div>
  );
}
