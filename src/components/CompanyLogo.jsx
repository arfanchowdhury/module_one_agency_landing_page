import { Image } from "./Image";
export function CompanyLogo({ imgUrl, title, className = null }) {
  return (
    <a href="#" className={className != null ? className : "flex items-center"}>
      <Image src={imgUrl} alt={title} className={"h-6 mr-3 sm:h-9"} />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        {title}
      </span>
    </a>
  );
}
