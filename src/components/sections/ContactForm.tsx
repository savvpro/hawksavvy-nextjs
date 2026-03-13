"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

const INQUIRY_TYPES = [
  { value: "", label: "Select what you are looking for" },
  { value: "advisory", label: "Sovereign AI Advisory" },
  { value: "demo", label: "Product Demo" },
  { value: "automation", label: "Workflow Automation" },
  { value: "voice", label: "Conversational AI" },
  { value: "augmentation", label: "Resource Augmentation" },
  { value: "sector", label: "Sector-Specific Solution" },
];

const SECTORS = [
  { value: "", label: "Select your sector" },
  { value: "healthcare", label: "Healthcare & Pharmacy" },
  { value: "wealth", label: "Wealth & Advisory" },
  { value: "education", label: "Education & Training" },
  { value: "professional", label: "Professional Services" },
  { value: "operations", label: "Service Operations" },
  { value: "other", label: "Other" },
];

const TIMELINES = [
  { value: "", label: "Select a timeline" },
  { value: "immediate", label: "Immediate (within 30 days)" },
  { value: "q1", label: "Near-term (1–3 months)" },
  { value: "q2", label: "Mid-term (3–6 months)" },
  { value: "planning", label: "Planning stage (6+ months)" },
];

interface FormState {
  name: string;
  email: string;
  company: string;
  role: string;
  website: string;
  sector: string;
  inquiryType: string;
  description: string;
  timeline: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  website: "",
  sector: "",
  inquiryType: "",
  description: "",
  timeline: "",
};

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.company.trim()) newErrors.company = "Company name is required.";
    if (!form.inquiryType) newErrors.inquiryType = "Please select what you are looking for.";
    if (!form.description.trim()) newErrors.description = "Please briefly describe your need.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    router.push("/thank-you");
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl border bg-white dark:bg-deep-slate/40 text-ink dark:text-cloud-white text-sm placeholder:text-pewter dark:placeholder:text-silver/40 focus:outline-none focus:ring-2 focus:ring-vector-sky/50 transition-colors duration-150";
  const inputNormal = "border-hairline dark:border-deep-slate hover:border-steel dark:hover:border-steel/50";
  const inputError = "border-controlled-copper/60 focus:ring-controlled-copper/40";

  const labelClass = "block text-sm font-medium text-slate-text dark:text-mist mb-1.5";
  const helperClass = "mt-1.5 text-xs text-pewter dark:text-silver/60";
  const errorClass = "mt-1.5 text-xs text-controlled-copper flex items-center gap-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact HawkSavvy"
      className="rounded-2xl border border-hairline dark:border-deep-slate bg-white dark:bg-midnight-slate p-8 md:p-10 space-y-6"
    >
      {/* Row 1: Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-controlled-copper" aria-label="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your full name"
            className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className={errorClass}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="#B87333" strokeWidth="1.5"/><path d="M6 4v2.5M6 8h.01" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round"/></svg>
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work Email <span className="text-controlled-copper" aria-label="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : "email-helper"}
            placeholder="you@company.com"
            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
          />
          {errors.email ? (
            <p id="email-error" role="alert" className={errorClass}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="#B87333" strokeWidth="1.5"/><path d="M6 4v2.5M6 8h.01" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round"/></svg>
              {errors.email}
            </p>
          ) : (
            <p id="email-helper" className={helperClass}>Use your business email address.</p>
          )}
        </div>
      </div>

      {/* Row 2: Company + Role */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className={labelClass}>
            Company Name <span className="text-controlled-copper" aria-label="required">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            placeholder="Your company"
            className={`${inputBase} ${errors.company ? inputError : inputNormal}`}
          />
          {errors.company && (
            <p id="company-error" role="alert" className={errorClass}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="#B87333" strokeWidth="1.5"/><path d="M6 4v2.5M6 8h.01" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round"/></svg>
              {errors.company}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="role" className={labelClass}>Role</label>
          <input
            id="role"
            name="role"
            type="text"
            autoComplete="organization-title"
            value={form.role}
            onChange={handleChange}
            placeholder="Your title or role"
            className={`${inputBase} ${inputNormal}`}
          />
        </div>
      </div>

      {/* Row 3: Website + Sector */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="website" className={labelClass}>Website</label>
          <input
            id="website"
            name="website"
            type="url"
            autoComplete="url"
            value={form.website}
            onChange={handleChange}
            placeholder="https://yourcompany.com"
            className={`${inputBase} ${inputNormal}`}
          />
        </div>
        <div>
          <label htmlFor="sector" className={labelClass}>Sector</label>
          <select
            id="sector"
            name="sector"
            value={form.sector}
            onChange={handleChange}
            className={`${inputBase} ${inputNormal}`}
          >
            {SECTORS.map((s) => (
              <option key={s.value} value={s.value} disabled={s.value === ""}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Inquiry type */}
      <div>
        <label htmlFor="inquiryType" className={labelClass}>
          What are you looking for? <span className="text-controlled-copper" aria-label="required">*</span>
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={form.inquiryType}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.inquiryType}
          aria-describedby={errors.inquiryType ? "inquiry-error" : undefined}
          className={`${inputBase} ${errors.inquiryType ? inputError : inputNormal}`}
        >
          {INQUIRY_TYPES.map((t) => (
            <option key={t.value} value={t.value} disabled={t.value === ""}>
              {t.label}
            </option>
          ))}
        </select>
        {errors.inquiryType && (
          <p id="inquiry-error" role="alert" className={errorClass}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="#B87333" strokeWidth="1.5"/><path d="M6 4v2.5M6 8h.01" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round"/></svg>
            {errors.inquiryType}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className={labelClass}>
          Brief description of need <span className="text-controlled-copper" aria-label="required">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={form.description}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? "desc-error" : "desc-helper"}
          placeholder="Describe what you're trying to solve or achieve..."
          className={`${inputBase} resize-none ${errors.description ? inputError : inputNormal}`}
        />
        {errors.description ? (
          <p id="desc-error" role="alert" className={errorClass}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="#B87333" strokeWidth="1.5"/><path d="M6 4v2.5M6 8h.01" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round"/></svg>
            {errors.description}
          </p>
        ) : (
          <p id="desc-helper" className={helperClass}>Keep it brief. Two to four sentences is ideal.</p>
        )}
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className={labelClass}>Desired timeline</label>
        <select
          id="timeline"
          name="timeline"
          value={form.timeline}
          onChange={handleChange}
          className={`${inputBase} ${inputNormal}`}
        >
          {TIMELINES.map((t) => (
            <option key={t.value} value={t.value} disabled={t.value === ""}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitting}
          className={`w-full sm:w-auto ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {submitting ? "Sending…" : "Send Inquiry"}
        </Button>
        <p className="mt-3 text-xs text-pewter dark:text-silver/50">
          Fields marked with * are required.
        </p>
      </div>
    </form>
  );
}
