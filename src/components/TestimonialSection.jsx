import { BlockQuoteCard } from "./BlockQuoteCard";
import { BlockQuoteIcon } from "./BlockQuoteIcon";
export function TestimonialSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <BlockQuoteCard
          icon={<BlockQuoteIcon />}
          quote="Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
        />
      </div>
    </section>
  );
}
