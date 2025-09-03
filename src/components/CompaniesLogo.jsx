import { AirbnbIcon } from "./AirbnbIcon";
import { GoogleIcon } from "./GoogleIcon";
import { MailchimpIcon } from "./MailchimpIcon";
import { MashableIcon } from "./MashableIcon";
import { MicrosoftIcon } from "./MicrosoftIcon";
import { SpotifyIcon } from "./SpotifyIcon";

export function CompaniesLogo() {
  const brands = [
    { id: 1, item: <AirbnbIcon /> },
    { id: 2, item: <GoogleIcon /> },
    { id: 3, item: <MicrosoftIcon /> },
    { id: 4, item: <SpotifyIcon /> },
    { id: 5, item: <MailchimpIcon /> },
    { id: 6, item: <MashableIcon /> },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {brands.map((item) => (
            <a
              key={item.id}
              href="#"
              className="flex items-center lg:justify-center"
            >
              {item.item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
