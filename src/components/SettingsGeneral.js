import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { useAuth } from "./../util/auth";

function SettingsGeneral(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    return auth
      .updateProfile(data)
      .then(() => {
        // Set success status
        props.onStatus({
          type: "success",
          message: "Your profile has been updated",
        });
      })
      .catch((error) => {
        if (error.code === "auth/requires-recent-login") {
          props.onStatus({
            type: "requires-recent-login",
            // Resubmit after reauth flow
            callback: () => onSubmit(data),
          });
        } else {
          // Set error status
          props.onStatus({
            type: "error",
            message: error.message,
          });
        }
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="name"
        type="text"
        label="Name"
        defaultValue={auth.user.name}
        placeholder="Name"
        size="medium"
        error={errors.name}
        inputRef={register({
          required: "Please enter your name",
        })}
      />
      <FormField
        name="email"
        type="email"
        label="Email"
        defaultValue={auth.user.email}
        placeholder="Email"
        size="medium"
        error={errors.email}
        inputRef={register({
          required: "Please enter your email",
        })}
      />
      <div className="field">
        <div className="control">
          <button
            className={
              "button is-medium" +
              (props.buttonColor ? ` is-${props.buttonColor}` : "") +
              (props.buttonInverted ? " is-inverted" : "") +
              (pending ? " is-loading" : "")
            }
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default SettingsGeneral;
