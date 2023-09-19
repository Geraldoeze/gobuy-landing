import AboutSection from "@/components/About/AboutSection";

import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Welcome to Gobuyhub, where innovation meets creativity in the world of video content creation. We're a passionate team of tech enthusiasts and digital marketers on a mission to revolutionize how businesses and creators engage with their audiences through video."
      />
      <AboutSection />
      
    </>
  );
};

export default AboutPage;
