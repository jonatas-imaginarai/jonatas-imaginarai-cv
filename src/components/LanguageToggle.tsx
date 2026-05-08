"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { Button } from "./ui/Button";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = (newLocale: "en" | "pt" | "es") => {
    router.replace(pathname, { locale: newLocale });
  };

  const languages = [
    { code: "pt", label: "PT" },
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={locale === lang.code ? "primary" : "ghost"}
          size="sm"
          onClick={() => toggleLanguage(lang.code as any)}
          className="h-8 w-8 p-0"
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
}
