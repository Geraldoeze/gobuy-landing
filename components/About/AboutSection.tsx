import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSection = () => {

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16  md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-6">
                  <h3 className="mb-4 text-xl font-bold text-[#e69138] sm:text-2xl lg:text-xl xl:text-2xl">
                    Our Story
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Our journey began with a simple yet powerful idea: What if
                    everyone could effortlessly create captivating videos to
                    promote their businesses and express their unique stories?
                    This question ignited a spark of innovation that led to the
                    birth of Gobuyhub.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="mb-4 text-xl font-bold text-[#e69138] sm:text-2xl lg:text-xl xl:text-2xl">
                    The Vision
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Our vision is clear: to empower e-commerce merchants, small
                    businesses, digital content creators, and agencies with
                    cutting-edge AI technology. We want to democratize the art
                    of video content creation, making it as simple as possible,
                    regardless of technical expertise.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-[#e69138] sm:text-2xl lg:text-xl xl:text-2xl">
                    Our Advantage
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    At its core, we are an AI-powered short-form video editor
                    designed to simplify your video creation process. Whether
                    you&apos;re showcasing products, sharing stories, or promoting
                    your brand, our platform equips you with the tools to easily
                    create stunning videos and disseminate them to several
                    platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
