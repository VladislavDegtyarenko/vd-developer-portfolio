"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// TS
import { type FormInputs } from "@/types";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const RECAPTCHA_BYPASS =
  process.env.NEXT_PUBLIC_RECAPTCHA_BYPASS === "true" ||
  process.env.RECAPTCHA_BYPASS === "true";

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
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);

  useEffect(() => {
    if (RECAPTCHA_BYPASS) {
      setIsRecaptchaReady(true);
      return;
    }

    if (!RECAPTCHA_SITE_KEY) {
      setErrorMessage(
        "reCAPTCHA is not configured. Please contact the site owner."
      );
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src*="https://www.google.com/recaptcha/api.js"]'
    );

    if (existingScript) {
      setIsRecaptchaReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsRecaptchaReady(true);
    script.onerror = () => {
      setErrorMessage(
        "Failed to load reCAPTCHA. Please refresh and try again."
      );
    };

    document.head.appendChild(script);
  }, []);

  const getRecaptchaToken = async () => {
    if (RECAPTCHA_BYPASS) {
      return "bypass";
    }

    if (!RECAPTCHA_SITE_KEY) {
      throw new Error("Missing reCAPTCHA site key");
    }

    const grecaptcha = (window as any).grecaptcha;

    if (!grecaptcha) {
      throw new Error("reCAPTCHA is not ready");
    }

    return new Promise<string>((resolve, reject) => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: "contact_form" })
          .then(resolve)
          .catch(reject);
      });
    });
  };

  const sendEmail: SubmitHandler<FormInputs> = async (data) => {
    const routeHandlerEndpoint = "api/contact";

    if (!isRecaptchaReady) {
      setErrorMessage("reCAPTCHA is not ready yet. Please try again.");
      return;
    }

    setErrorMessage("");
    setIsSending(true);

    try {
      const recaptchaToken = await getRecaptchaToken();

      const request = await fetch(routeHandlerEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      if (!request.ok) {
        const result = await request.json().catch(() => null);
        throw new Error(result?.error || request.statusText);
      }

      setIsSent(true);
      reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Error while sending a message. Please try again.";
      setErrorMessage(message);
      console.error(`Error while sending a message: ${message}`);
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
