import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr"],
  defaultLocale: "fr",
  localePrefix: "never", // <- this is the important part
});
