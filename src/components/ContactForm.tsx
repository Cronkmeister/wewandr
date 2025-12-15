"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/Button";

interface ContactFormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  topic: "General Question",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.topic.trim()) {
      newErrors.topic = "Please select how we can help.";
    }

    if (!form.message.trim()) {
      newErrors.message =
        "Please tell us a bit more about your question or idea.";
    }

    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm(initialFormState);
      setErrors({});
      // TODO: When ready, replace this timeout with a real API call or server action
    }, 700);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setForm(initialFormState);
    setErrors({});
  };

  return !isSubmitted ? (
    <div className="bg-white rounded-2xl border border-orange-100 p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-darkblue mb-6 heading-secondary">
        Contact Form
      </h2>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`w-full px-4 py-3 text-base border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:ring-offset-2 placeholder:text-gray-500 input-animate gpu-accelerated ${
              errors.name
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300"
            }`}
            placeholder="First and last name"
            required
          />
          {errors.name && (
            <p
              id="contact-name-error"
              className="mt-2 text-sm text-red-600"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`w-full px-4 py-3 text-base border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:ring-offset-2 placeholder:text-gray-500 input-animate gpu-accelerated ${
              errors.email
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300"
            }`}
            placeholder="So we can reply directly"
            required
          />
          {errors.email && (
            <p
              id="contact-email-error"
              className="mt-2 text-sm text-red-600"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Topic */}
        <div>
          <label
            htmlFor="contact-topic"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            How can we help?<span className="text-red-500">*</span>
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={form.topic}
            onChange={(e) => handleChange("topic", e.target.value)}
            aria-invalid={errors.topic ? "true" : "false"}
            aria-describedby={errors.topic ? "contact-topic-error" : undefined}
            className={`w-full px-4 py-3 text-base border rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:ring-offset-2 input-animate gpu-accelerated ${
              errors.topic
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300"
            }`}
            required
          >
            <option value="General Question">General Question</option>
            <option value="Feedback or Suggestion">
              Feedback or Suggestion
            </option>
            <option value="Media Inquiry">Media Inquiry</option>
            <option value="Investor Inquiry">Investor Inquiry</option>
            <option value="Partnership or Collaboration">
              Partnership or Collaboration
            </option>
            <option value="Other">Other</option>
          </select>
          {errors.topic && (
            <p
              id="contact-topic-error"
              className="mt-2 text-sm text-red-600"
              role="alert"
            >
              {errors.topic}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`w-full px-4 py-3 text-base border rounded-2xl resize-vertical focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:ring-offset-2 placeholder:text-gray-500 input-animate gpu-accelerated ${
              errors.message
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Tell us a bit more about your question or idea..."
            required
          />
          {errors.message && (
            <p
              id="contact-message-error"
              className="mt-2 text-sm text-red-600"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex justify-end">
          <Button
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
            className="bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 text-white px-8 py-3 shadow-lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  ) : (
    <div className="bg-white rounded-2xl border border-orange-100 p-6 md:p-10 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-darkblue mb-4 heading-secondary">
        Thank you for reaching out!
      </h2>
      <p className="text-lg text-gray-800 pt-serif-regular max-w-2xl mx-auto mb-6">
        We truly value every message and try to respond as quickly as possible.
      </p>
      <Button
        type="button"
        onClick={handleResetForm}
        className="bg-white text-orange-600 border border-orange-300 hover:bg-orange-50 focus:bg-orange-50 px-6 py-3 shadow-sm"
      >
        Send another message
      </Button>
    </div>
  );
}
