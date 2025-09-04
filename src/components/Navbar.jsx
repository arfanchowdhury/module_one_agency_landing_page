import { Button } from "./Button";
import { CompanyLogo } from "./CompanyLogo";
import { NavLink } from "./NavLink";

export function Navbar() {
  let imgUrl = "./src/assets/logo.svg";
  let title = "Learn with Sumit";

  let nav_items = [
    { id: 0, url: "#", item: "Home", active: true },
    { id: 1, url: "#", item: "Company", active: false },
    { id: 2, url: "#", item: "Marketplace", active: false },
    { id: 3, url: "#", item: "Features", active: false },
    { id: 4, url: "#", item: "Team", active: false },
    { id: 5, url: "#", item: "Contact", active: false },
  ];

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo start Here */}
        <CompanyLogo imgUrl={imgUrl} title={title} />
        {/* Logo end  */}
        <div className="flex items-center lg:order-2">
          <Button
            url="#"
            label="Download"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          />
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {nav_items.map((item) => (
              <li key={item.id}>
                <NavLink
                  url={item.url}
                  item={item.item}
                  active={item.active}
                  // item={item}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
