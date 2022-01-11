import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import Avatar from "./Avatar";
import "./TeamBiosSection.scss";

function TeamBiosSection(props) {
  const items = [
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
      name: "John Smith",
      role: "Software Engineer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
      name: "Lisa Zinn",
      role: "Software Engineer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
      name: "Diana Low",
      role: "Designer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
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
        <CenteredColumns>
          {items.map((item, index) => (
            <div
              className="column is-half-tablet is-one-third-desktop is-flex"
              key={index}
            >
              <div className="TeamBiosSection__card card is-flex">
                <div className="TeamBiosSection__card-content card-content is-flex has-text-centered">
                  <div className="TeamBiosSection__avatar-wrapper">
                    <Avatar image={item.avatar} size={128} alt={item.name} />
                  </div>
                  <div className="TeamBiosSection__details">
                    <p className="is-size-5">{item.name}</p>
                    <p className="is-size-7 is-uppercase has-text-weight-semibold">
                      {item.role}
                    </p>
                    <p className="TeamBiosSection__bio">{item.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CenteredColumns>
      </div>
    </Section>
  );
}

export default TeamBiosSection;
