import { PricingCard } from "./PricingCard";
import { SectionHeader } from "./SectionHeader";
export function PricingSection() {
  const pricing_plan = [
    {
      id: 1,
      title: "Starter",
      description: "Best option for personal use & for your next project.",
      price: "$29",
      features: {
        text: ["Individual configuration", "No setup, or hidden fees"],
        services: {
          team_size: "1 developer",
          support: "6 months",
          updates: "6 months",
        },
      },
    },

    {
      id: 2,
      title: "Company",
      description: "Relevant for multiple users, extended & premium support",
      price: "$99",
      features: {
        text: ["Individual configuration", "No setup, or hidden fees"],
        services: {
          team_size: "10 developer",
          support: "24 months",
          updates: "24 months",
        },
      },
    },

    {
      id: 3,
      title: "Enterprise",
      description:
        "Best for large scale uses and extended redistribution rights.",
      price: "$499",
      features: {
        text: ["Individual configuration", "No setup, or hidden fees"],
        services: {
          team_size: "100+ developer",
          support: "36 months",
          updates: "36 months",
        },
      },
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <SectionHeader
          title="Designed for business teams like yours"
          description="Here at Landwind we focus on markets where technology,
        innovation, and capital can unlock long-term value and drive economic
        growth."
        />

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricing_plan.map((item) => (
            <PricingCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              features={item.features.text}
              services={item.features.services}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
