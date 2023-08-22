import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import animateFromBottom from "app/animations/animateFromBottom";

// UI
import Loading from "app/ui/Loading";
import { P2 } from "app/ui/Text";

import { FormInputs } from "app/types";
import useIsomorphicLayoutEffect from "app/hooks/useIsomorphicLayoutEffect";
import FormSuccessMessage from "app/ui/formSuccessMessage";

const StyledContactForm = styled.div`
  margin-top: 2.5em;
  min-height: 28.75em;
  display: grid;
  position: relative;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 30em;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    > label {
      display: flex;
      flex-direction: column;
      font-size: 1em;
      padding-bottom: 1.25em;
      position: relative;
      width: 100%;
    }

    > * + * {
      margin-top: 1.5em;
    }

    input,
    textarea {
      width: 100%;
      color: ${({ theme }) => theme.fg};
      &:focus {
        outline: none;
        border-bottom: solid 2px ${({ theme }) => theme.cyan};
      }
      &:not(:placeholder-shown) {
        border-bottom: solid 2px ${({ theme }) => theme.cyan};
      }

      &.error {
        border-bottom: solid 2px ${({ theme }) => theme.error};
      }
    }

    input,
    textarea,
    .submit {
      width: 100%;
      padding: 1em;
      font-size: 1em;
      line-height: 1.5;
      font-family: inherit;
      background-color: ${({ theme }) => theme.cardBg};
      border: none;
      border-radius: 0.25em;
      border-bottom: solid 2px ${({ theme }) => theme.cardBg};
      transition: background-color var(--duration), color var(--duration);
      &::placeholder {
        color: ${({ theme }) => theme.grey};
        opacity: 0.8;
      }
    }

    textarea {
      resize: vertical;
      min-height: 10em;
    }

    .helperText {
      padding: 0 1em;
      font-size: 0.875em;
      color: ${({ theme }) => theme.grey};
      position: absolute;
      bottom: -0.25em;
      left: 0;
      &.errorMessage {
        color: ${({ theme }) => theme.error};
      }
    }

    .submit {
      cursor: pointer;
      border: none;
      background-color: ${({ theme }) => theme.cyan};
      color: ${({ theme }) => theme.white};

      &:hover {
        background-color: ${({ theme }) => theme.cyanHover};
      }

      &.sending {
        position: relative;
        pointer-events: none;
        background-color: ${({ theme }) => theme.cyanHover};
        min-height: 3.5em;
        > * {
          transform: scale(0.5);
          &:after {
            display: none;
          }
        }
      }
    }
  }

  .sendError {
    color: ${({ theme }) => theme.error};
  }
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onTouched",
  });

  const [isSending, setIsSending] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail: SubmitHandler<FormInputs> = (data) => {
    const sendgridApiEndpoint = "/api/sendgrid";

    setError("");
    setIsSending(true);

    fetch(sendgridApiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        setIsSending(false);

        if (response.message) {
          setFormSent(true);
        } else if (response.error) {
          setError(response.error);
        }
      })
      .catch((err) => {
        console.error("err: ", err);
        setIsSending(false);
      });
  };

  const formRef = useRef<HTMLFormElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!formRef.current) return;

    animateFromBottom([...new Set(formRef.current.children)], { stagger: 0.05 });
  }, [formRef]);

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <StyledContactForm>
      {formSent ? (
        <FormSuccessMessage />
      ) : (
        <form onSubmit={handleSubmit(sendEmail)} ref={formRef}>
          <label>
            <input
              {...register("name", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "Name must contain at least 2 characters",
                },
                pattern: {
                  value: /^[A-Za-z\s-]+$/,
                  message: "Invalid name format",
                },
              })}
              placeholder="Name"
              className={errors.name?.message ? "error" : ""}
            />
            {errors.name ? (
              <span className="helperText errorMessage">{errors.name.message}</span>
            ) : null}
          </label>
          <label>
            <input
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="Email"
              className={errors.email?.message ? "error" : ""}
            />
            {errors.email ? (
              <span className="helperText errorMessage">{errors.email.message}</span>
            ) : null}
          </label>
          <label>
            <textarea
              {...register("message", { required: "This field is required" })}
              placeholder="Message"
              className={errors.message?.message ? "error" : ""}
              spellCheck="false"
            ></textarea>
            {errors.message ? (
              <span className="helperText errorMessage">{errors.message.message}</span>
            ) : null}
          </label>

          {error ? <P2 className="error sendError">{error}</P2> : null}

          <button type="submit" className={`submit ${isSending ? "sending" : ""}`}>
            {isSending ? <Loading /> : "Send"}
          </button>
        </form>
      )}
    </StyledContactForm>
  );
};

export default ContactForm;
