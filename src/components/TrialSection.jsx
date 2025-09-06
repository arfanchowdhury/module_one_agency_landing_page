import { Button } from "./Button";
import { SectionHeader } from "./SectionHeader";

export function TrialSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <SectionHeader
            title="Start your free trial today"
            description="Try Landwind Platform for 30 days. No credit card required."
          />
          <Button
            url="#"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
            label="Free trial for 30 days"
          />
        </div>
      </div>
    </section>
  );
}
