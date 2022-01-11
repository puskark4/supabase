import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import CtaSection from "./../components/CtaSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        color="primary"
        size="large"
        backgroundImage="https://source.unsplash.com/ugnrXk1129g/1600x800"
        backgroundImageOpacity={0.3}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
        buttonColor="white"
        buttonInverted={false}
        buttonPath="/pricing"
      />
      <FeaturesSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
        columns={2}
      />
      <ClientsSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="You're in good company"
        subtitle=""
      />
      <TestimonialsSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <NewsletterSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        buttonInverted={false}
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
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

export default IndexPage;
