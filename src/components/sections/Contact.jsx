import { useState } from "react";
import { business, eventTypes, socials } from "../../config/siteContent";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  eventType: eventTypes[0],
  eventDate: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.phone.trim() && !form.email.trim()) {
    errors.phone = "Add a phone number or email so we can reach you.";
    errors.email = "Add a phone number or email so we can reach you.";
  }
  if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "That email doesn't look right.";
  }
  if (!form.eventDate) errors.eventDate = "Let us know your event date.";
  if (!form.message.trim()) errors.message = "Tell us a bit about your event.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // NOTE: no backend for v1 — this opens a pre-filled email draft.
    // Swap for a form service (e.g. Formspree) by replacing this handler
    // with a fetch() POST once an endpoint is available.
    const subject = `Booking inquiry — ${form.eventType} on ${form.eventDate}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone || "—"}`,
      `Email: ${form.email || "—"}`,
      `Event type: ${form.eventType}`,
      `Event date: ${form.eventDate}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setForm(initialForm);
  };

  const inputClass = (field) =>
    `w-full rounded-lg border bg-white/70 px-4 py-3 text-plum-950 placeholder:text-plum-900/40 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-colors ${
      errors[field] ? "border-ember-500" : "border-plum-900/15"
    }`;

  return (
    <section id="contact" className="bg-cream-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16">
        <RevealOnScroll>
          <SectionHeading
            timecode="00:01:20:00"
            label="Let's talk"
            title="Check availability for your date."
            description="Send a few details and we'll get back to you within 24 hours to confirm availability and lock in a package."
          />

          <div className="mt-10 space-y-3">
            <a
              href={business.phoneHref}
              className="flex items-center gap-3 text-plum-950 hover:text-ember-600 transition-colors"
            >
              <span className="font-mono text-xs tracking-widest text-plum-900/40 uppercase w-16">
                Call
              </span>
              {business.phone}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-3 text-plum-950 hover:text-ember-600 transition-colors"
            >
              <span className="font-mono text-xs tracking-widest text-plum-900/40 uppercase w-16">
                Email
              </span>
              {business.email}
            </a>
            <div className="flex items-center gap-3 text-plum-950">
              <span className="font-mono text-xs tracking-widest text-plum-900/40 uppercase w-16">
                Based
              </span>
              {business.serviceArea}
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-widest uppercase text-plum-900/60 hover:text-ember-600 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block font-mono text-xs tracking-widest uppercase text-plum-900/60 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass("name")}
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-ember-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block font-mono text-xs tracking-widest uppercase text-plum-900/60 mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="07XX XXX XXX"
                  className={inputClass("phone")}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-sm text-ember-600">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-xs tracking-widest uppercase text-plum-900/60 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-ember-600">{errors.email}</p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="eventType" className="block font-mono text-xs tracking-widest uppercase text-plum-900/60 mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  className={inputClass("eventType")}
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="eventDate" className="block font-mono text-xs tracking-widest uppercase text-plum-900/60 mb-2">
                  Event Date
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={form.eventDate}
                  onChange={handleChange}
                  className={inputClass("eventDate")}
                />
                {errors.eventDate && (
                  <p className="mt-1.5 text-sm text-ember-600">{errors.eventDate}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs tracking-widest uppercase text-plum-900/60 mb-2">
                Tell us about your event
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Venue, guest count, timeline — anything that helps us plan."
                className={inputClass("message")}
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-ember-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full font-mono text-xs tracking-widest uppercase rounded-full bg-plum-950 text-cream-50 px-6 py-4 hover:bg-plum-800 transition-colors"
            >
              Send Inquiry
            </button>

            {submitted && (
              <p className="text-sm text-teal-500 font-medium">
                Your email draft has been opened — hit send to reach us.
              </p>
            )}
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
