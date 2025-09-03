export function ProfileCard({ image, name, designation }) {
  return (
    <figcaption className="flex items-center justify-center mt-6 space-x-3">
      {image}
      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
        <div className="pr-3 font-medium text-gray-900 dark:text-white">
          {name}
        </div>
        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
          {designation}
        </div>
      </div>
    </figcaption>
  );
}
