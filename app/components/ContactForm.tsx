import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2.5em;

  width: 30em;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  > label {
    display: flex;
    flex-direction: column;
    font-size: 1em;
    padding-bottom: 1.25em;
    position: relative;
  }

  > * + * {
    margin-top: 1.5em;
  }

  input,
  textarea {
    width: 100%;
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
    padding: 1em;
    font-size: inherit;
    font-family: inherit;
    background-color: ${({ theme }) => theme.cardBg};
    border: none;
    border-bottom: solid 2px ${({ theme }) => theme.cardBg};
    transition: background-color var(--duration), color var(--duration);
    &::placeholder {
      color: ${({ theme }) => theme.grey};
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
    color: ${({ theme }) => theme.bg};

    /* border-radius: 0.25em; */
    &:hover {
      background-color: ${({ theme }) => theme.cyanHover};
    }
  }
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  console.log("errors: ", errors);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
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
              message: "Invalid email address. Example: youremail@domain.com",
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

      <button type="submit" className="submit">
        Send
      </button>
    </StyledContactForm>
  );
};

export default ContactForm;
