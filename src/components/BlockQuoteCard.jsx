import { Image } from "./Image";
import { ProfileCard } from "./ProfileCard";

export function BlockQuoteCard({ icon, quote }) {
  return (
    <figure className="max-w-screen-md mx-auto">
      {icon}
      <blockquote>
        <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
          {quote}
        </p>
      </blockquote>

      <ProfileCard
        image={
          <Image
            className="w-6 h-6 rounded-full"
            src="/images/avatar/michael-gouch.png"
            alt="profile picture"
          />
        }
        name="Micheal Gough"
        designation="CEO at Google"
      />
    </figure>
  );
}
