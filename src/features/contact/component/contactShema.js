// src/schemas/contactSchema.js
import { z } from "zod";
import i18next from "i18next";

export const contactSchema = z.object({
    first_name: z.string().min(1, i18next.t("contact.first_name_required")),
    last_name: z.string().min(1, i18next.t("contact.last_name_required")),
    phone: z.string().min(1, i18next.t("contact.phone_required")),
    email: z.string().min(1, i18next.t("contact.email_required")).email(i18next.t("contact.email_invalid")),
    message: z.string().min(1, i18next.t("contact.message_required")),
});

// Optional: Export type for TypeScript