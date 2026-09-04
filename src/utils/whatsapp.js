import { siteConfig } from "../data/siteConfig";

// wa.me requires the number as digits only — no "+", spaces or dashes.
export const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");

export const whatsappLink = (text) =>
  `https://wa.me/${whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Opens WhatsApp with a pre-filled enquiry built from labelled [label, value] pairs.
export const sendToWhatsApp = (title, fields) => {
  const body = [title, "", ...fields.map(([label, value]) => `${label}: ${value || "-"}`)].join("\n");
  window.open(whatsappLink(body), "_blank", "noopener,noreferrer");
};
