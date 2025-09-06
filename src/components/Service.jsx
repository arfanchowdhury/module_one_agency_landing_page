import { CorrectCircleSign } from "./CorrectCircleSign";
import { Image } from "./Image";
import { ServiceCard } from "./ServiceCard";

export function Service() {
  const service_list = [
    {
      title: "Work with tools you already use",
      description:
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
      services: [
        {
          id: 1,
          icon: <CorrectCircleSign />,
          title: "Continuous integration and deployment",
        },
        { id: 2, icon: <CorrectCircleSign />, title: "Development workflow" },
        { id: 3, icon: <CorrectCircleSign />, title: "Knowledge management" },
      ],
      sub_description:
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    },

    {
      title: "We invest in the world’s potential",
      description:
        "Deliver great service experiences fast - without the complexity of  traditional ITSM solutions. Accelerate critical development work,eliminate toil, and deploy changes with ease.",
      services: [
        {
          id: 1,
          icon: <CorrectCircleSign />,
          title: "Dynamic reports and dashboards",
        },
        {
          id: 2,
          icon: <CorrectCircleSign />,
          title: "Templates for everyone",
        },
        { id: 3, icon: <CorrectCircleSign />, title: "Development workflow" },
        {
          id: 4,
          icon: <CorrectCircleSign />,
          title: "Limitless business automation",
        },
        { id: 5, icon: <CorrectCircleSign />, title: "Knowledge management" },
      ],
      sub_description:
        "Deliver great service experiences fast - without the complexity of  traditional ITSM solutions.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* <!-- Sub Service 1 --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <ServiceCard
            title={service_list[0].title}
            description={service_list[0].description}
            services={service_list[0].services}
            sub_description={service_list[0].sub_description}
          />
          <Image
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="/images/features/feature-1.png"
            alt="dashboard feature image"
          />
        </div>

        {/* <!-- Sub Service 2 --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="/images/features/feature-2.png"
            alt="feature image 2"
          />
          <ServiceCard
            title={service_list[1].title}
            description={service_list[1].description}
            services={service_list[1].services}
            sub_description={service_list[1].sub_description}
          />
        </div>
      </div>
    </section>
  );
}
