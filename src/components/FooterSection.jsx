import { CompanyLogo } from "./CompanyLogo";
import { DribbleIcon } from "./DribbleIcon";
import { DynamicFooter } from "./DynamicFooter";
import { FacebookIcon } from "./FacebookIcon";
import { GithubIconSmall } from "./GithubIconSmall";
import { InstagramIcon } from "./InstagramIcon";
import { SocialIconList } from "./SocialIconList";
import { XIcon } from "./XIcon";

export function FooterSection() {
  const footer_links = [
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Help center",
      links: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Licensing", "Terms"],
    },
    {
      title: "Company-2",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Download",
      links: ["iOS", "Android", "Windows", "MacOS"],
    },
  ];

  const social_icons = [
    { id: 1, icon: <FacebookIcon /> },
    { id: 2, icon: <InstagramIcon /> },
    { id: 3, icon: <XIcon /> },
    { id: 4, icon: <GithubIconSmall /> },
    { id: 5, icon: <DribbleIcon /> },
  ];
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        {/* <!-- Sub Footer 1 --> */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footer_links.map((section) => (
            <DynamicFooter
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* <!-- Sub Footer 2 --> */}
        <div className="text-center">
          <CompanyLogo
            imgUrl="./src/assets/logo.svg"
            title="Learn with Sumit"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          />
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
            <a
              href="#"
              target="_blank"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a>
            .
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            {social_icons.map((icon) => (
              <SocialIconList key={icon.id} id={icon.id} icon={icon.icon} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
