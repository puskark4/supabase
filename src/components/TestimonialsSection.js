import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import Avatar from "./Avatar";
import "./TestimonialsSection.scss";

function TestimonialsSection(props) {
  const items = [
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-5.jpeg",
      name: "Sarah Kline",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      company: "Company",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-48.jpeg",
      name: "Shawna Murray",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!",
      company: "Company",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-12.jpeg",
      name: "Blake Elder",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.",
      company: "Company",
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
            <div className="column" key={index}>
              <figure className="testimonial">
                <blockquote className="TestimonialsSection__card card">
                  <div className="TestimonialsSection__quote">
                    “{item.quote}”
                  </div>
                  <article className="TestimonialsSection__media media">
                    <figure className="media-left">
                      <Avatar image={item.avatar} size={64} alt={item.name} />
                    </figure>
                    <div className="TestimonialsSection__media-content media-content">
                      <div className="content">
                        <div className="has-text-weight-bold has-text-dark">
                          {item.name}
                        </div>
                        <div className="is-size-7">{item.company}</div>
                      </div>
                    </div>
                  </article>
                </blockquote>
              </figure>
            </div>
          ))}
        </CenteredColumns>
      </div>
    </Section>
  );
}

export default TestimonialsSection;
