import React from "react";
import { Link } from "./../util/router";
import "./AuthFooter.scss";

function AuthFooter(props) {
  return (
    <div className="AuthFooter has-text-centered mt-3 px-3">
      {props.type === "signup" && (
        <>
          {props.showAgreement && (
            <div className="mb-3">
              By signing up, you are agreeing to our{" "}
              <Link to={props.termsPath} className="has-text-link">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to={props.privacyPolicyPath} className="has-text-link">
                Privacy Policy
              </Link>
              .
            </div>
          )}

          {props.signinText}
          <Link to={props.signinPath} className="has-text-link ml-2">
            {props.signinAction}
          </Link>
        </>
      )}

      {props.type === "signin" && (
        <>
          <Link to={props.signupPath} className="has-text-link">
            {props.signupAction}
          </Link>

          {props.forgotPassAction && (
            <Link to={props.forgotPassPath} className="has-text-link ml-3">
              {props.forgotPassAction}
            </Link>
          )}
        </>
      )}

      {props.type === "forgotpass" && (
        <>
          {props.signinText}
          <Link to={props.signinPath} className="has-text-link ml-2">
            {props.signinAction}
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
