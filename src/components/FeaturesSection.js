import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import "./FeaturesSection.scss";

function FeaturesSection(props) {
  const items = [
    {
      title: "Lorem Ipsum",
      body: "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg",
    },
    {
      title: "Lorem Ipsum",
      body: "Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus.",
      image: "https://uploads.divjoy.com/undraw-directions_x53j.svg",
    },
    {
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper",
      image: "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",
    },
    {
      title: "Lorem Ipsum",
      body: "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo",
      image: "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
    },
  ];

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <div className="FeaturesSection__box box">
          <div className="FeaturesSection__columns columns is-multiline is-centered is-gapless">
            {items.map((item, index) => (
              <div
                className={
                  "FeaturesSection__column column" +
                  (props.columns === 1 ? " is-full" : "") +
                  (props.columns === 2 ? " is-half" : "") +
                  (props.columns === 3 ? " is-one-third" : "") +
                  (props.columns === 4 ? " is-one-quarter" : "")
                }
                key={index}
              >
                <div className="FeaturesSection__item has-text-centered">
                  <div className="FeaturesSection__image-container">
                    <figure className="FeaturesSection__image image is-4by3">
                      <img src={item.image} alt={item.title} />
                    </figure>
                  </div>
                  <h1 className="title is-4 is-spaced has-text-dark">
                    {item.title}
                  </h1>
                  <h2 className="subtitle is-6 has-text-dark">{item.body}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
