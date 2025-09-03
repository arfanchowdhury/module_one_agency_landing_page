import { EqualsIcon } from "./EqualsIcon";
import { MapRoundIcon } from "./MapRoundIcon";
import { PeopleIcon } from "./PeopleIcon";
import { ShoppingCartIcon } from "./ShoppingCartIcon";
import { StatsContent } from "./StatsContent";
import { StatsItem } from "./StatsItem";

export function StatsSection() {
  const stats_item = [
    {
      id: 1,
      title: "99.99% uptime",
      description: "For Landwind, with zero maintenance downtime",
      icon: <EqualsIcon />,
    },
    {
      id: 2,
      title: "600M+ Users",
      description: "Trusted by over 600 milion users around the world",
      icon: <PeopleIcon />,
    },
    {
      id: 3,
      title: "100+ countries",
      description: "Have used Landwind to create functional websites",
      icon: <MapRoundIcon />,
    },
    {
      id: 4,
      title: "5+ Million",
      description: "Transactions per day",
      icon: <ShoppingCartIcon />,
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <StatsContent
          semi_title="Trusted Worldwide"
          title="Trusted by over 600 million users and 10,000 teams"
          description="Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers."
        />

        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          {stats_item.map((item) => (
            <StatsItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
