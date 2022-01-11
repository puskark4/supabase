import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import DashboardItems from "./DashboardItems";
import { Link, useRouter } from "./../util/router";
import { useAuth } from "./../util/auth";
import "./DashboardSection.scss";

function DashboardSection(props) {
  const auth = useAuth();
  const router = useRouter();

  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />

        {router.query.paid && auth.user.planIsActive && (
          <article className="DashboardSection__paid-message message is-success mx-auto mb-5">
            <div className="message-body">
              You are now subscribed to the {auth.user.planId} plan
              <span className="ml-2" role="img" aria-label="party">
                🥳
              </span>
            </div>
          </article>
        )}

        <div className="columns is-desktop">
          <div className="column is-6-desktop">
            <DashboardItems />
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <h4>What is this?</h4>
                  <p>
                    The component on your left is an example UI that shows you
                    how to fetch, display, and update a list of items that
                    belong to the current authenticated user. Try it now by
                    adding a couple items.
                  </p>
                  <p>
                    It also shows how you can limit features based on plan. If
                    you're subscribed to the "pro" or "business" plan then
                    you'll be able to use the star button to highlight items,
                    otherwise you'll be asked to upgrade your plan.
                  </p>
                  <p>
                    After exporting your code, you'll want to modify this
                    component to your needs. You may also find it easier to just
                    use this component as a reference as you build out your
                    custom UI.
                  </p>
                  <div className="mt-4">
                    <h4>Extra debug info</h4>
                    <div>
                      You are signed in as <strong>{auth.user.email}</strong>.
                    </div>

                    {auth.user.stripeSubscriptionId && (
                      <>
                        <div>
                          You are subscribed to the{" "}
                          <strong>{auth.user.planId} plan</strong>.
                        </div>
                        <div>
                          Your plan status is{" "}
                          <strong>{auth.user.stripeSubscriptionStatus}</strong>.
                        </div>
                      </>
                    )}

                    <div>
                      You can change your account info{` `}
                      {auth.user.stripeSubscriptionId && <>and plan{` `}</>}
                      in{` `}
                      <Link to="/settings/general" className="has-text-link">
                        <strong>settings</strong>
                      </Link>
                      .
                    </div>

                    {!auth.user.stripeSubscriptionId && (
                      <div>
                        You can signup for a plan in{` `}
                        <Link to="/pricing" className="has-text-link">
                          <strong>pricing</strong>
                        </Link>
                        .
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default DashboardSection;
