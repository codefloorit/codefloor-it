// Shared field styling for all forms — keeps ContactForm, QuoteForm,
// ConsultationForm, and SupportForm visually consistent.

export const inputClass =
  "w-full rounded-xl bg-primary border border-line px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-accent/50 outline-none transition-colors";

export const labelClass = "block text-xs font-mono uppercase tracking-wide text-muted mb-2";

export const Field = ({ label, children, className = "" }) => (
  <div className={className}>
    <label className={labelClass}>{label}</label>
    {children}
  </div>
);
