import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-[#e69138] sm:text-2xl lg:text-xl xl:text-2xl">
                Step 10. Add Captions
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                If needed, use the "AI Captions Generator" to automatically generate captions or subtitles for your video, improving accessibility and viewer engagement.

                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-[#e69138] sm:text-2xl lg:text-xl xl:text-2xl">
                 Step 11. Preview and Review
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Preview your edited video to ensure it meets your expectations. Make any necessary adjustments to effects, transitions, or audio.

                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-[#e69138] sm:text-2xl lg:text-xl xl:text-2xl">
                  Step 12. Save and Export
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Once you're satisfied with your edited video, save your project and export the final video in your preferred format. Gobuyhub supports various video formats for compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
