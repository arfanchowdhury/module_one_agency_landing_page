import { Image } from "./Image";
export function CompanyLogo({ imgUrl, title }) {
  return (
    <a href="#" className="flex items-center">
      <Image src={imgUrl} alt={title} className={"h-6 mr-3 sm:h-9"} />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        {title}
      </span>
    </a>
  );
}
