import React from "react";
import Meta from "./../components/Meta";
import FaqSection from "./../components/FaqSection";
import CtaSection from "./../components/CtaSection";

function FaqPage(props) {
  return (
    <>
      <Meta title="Faq" />
      <FaqSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Frequently Asked Questions"
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

export default FaqPage;
