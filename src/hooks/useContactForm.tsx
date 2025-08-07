"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// TS
import { type FormInputs } from "@/types";

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    mode: "onTouched",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail: SubmitHandler<FormInputs> = async (data) => {
    const routeHandlerEndpoint = "api/contact";

    setErrorMessage("");
    setIsSending(true);

    try {
      const request = await fetch(routeHandlerEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!request.ok) {
        throw new Error(request.statusText);
      }

      setIsSent(true);
      reset();
    } catch (error) {
      setErrorMessage("Error while sending a message. Please try again.");
      console.error(`Error while sending a message: ${error}`);
    } finally {
      setIsSending(false);
    }
  };

  const isOnlySpaces = (value: string) => !value.trim();

  const onSubmit = handleSubmit(sendEmail);

  return {
    register,
    isSending,
    isSent,
    isOnlySpaces,
    errorMessage,
    errors,
    onSubmit,
  };
};
