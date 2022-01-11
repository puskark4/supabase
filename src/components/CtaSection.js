import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";

function CtaSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container has-text-centered">
        <div className="columns is-vcentered is-centered is-variable is-8 is-multiline">
          <div className="column is-narrow">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={2}
              spaced={false}
            />
          </div>
          <div className="column is-narrow">
            <Link
              to={props.buttonPath}
              className={
                "button is-medium" +
                (props.buttonColor ? ` is-${props.buttonColor}` : "") +
                (props.buttonInverted ? " is-inverted" : "")
              }
            >
              {props.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection;
