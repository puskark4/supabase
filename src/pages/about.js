import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import StatsSection from "./../components/StatsSection";
import TeamBiosSection from "./../components/TeamBiosSection";
import CtaSection from "./../components/CtaSection";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <HeroSection2
        color="white"
        size="large"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <StatsSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
      />
      <TeamBiosSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Ready to get started?"
        buttonText="Get Started"
        buttonColor="white"
        buttonInverted={false}
        buttonPath="/pricing"
      />
    </>
  );
}

export default AboutPage;
