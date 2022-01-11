import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import "./ClientsSection.scss";

function ClientsSection(props) {
  const items = [
    {
      name: "Instagram",
      image: "https://uploads.divjoy.com/logo-instagram.svg",
      width: "150px",
    },
    {
      name: "Slack",
      image: "https://uploads.divjoy.com/logo-slack.svg",
      width: "135px",
    },
    {
      name: "Tinder",
      image: "https://uploads.divjoy.com/logo-tinder.svg",
      width: "90px",
    },
    {
      name: "Spotify",
      image: "https://uploads.divjoy.com/logo-spotify.svg",
      width: "135px",
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
        <div className="columns is-centered is-multiline">
          {items.map((item, index) => (
            <div className="column is-narrow has-text-centered" key={index}>
              <div className="ClientsSection__logo">
                <img src={item.image} width={item.width} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ClientsSection;
