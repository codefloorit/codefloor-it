// EmailJS configuration.
// Sign up free at https://www.emailjs.com, create an Email Service + Templates,
// then replace the placeholders below. Until then, forms simulate a successful
// submission locally so the UI can be demoed end-to-end.
export const emailjsConfig = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
  templates: {
    contact: "YOUR_CONTACT_TEMPLATE_ID",
    quote: "YOUR_QUOTE_TEMPLATE_ID",
    consultation: "YOUR_CONSULTATION_TEMPLATE_ID",
    support: "YOUR_SUPPORT_TEMPLATE_ID",
  },
};

export const isEmailjsConfigured = () =>
  emailjsConfig.serviceId !== "YOUR_EMAILJS_SERVICE_ID" &&
  emailjsConfig.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY";
