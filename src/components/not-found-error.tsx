"use client";

import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

export const NotFoundError = () => {
  const t = useTranslations("Error");
  const router = useRouter();

  return (
    <div className="flex min-h-[calc(100vh-400px)] w-full flex-col items-center justify-center gap-2 m-auto">
      <h1 className="text-[7rem] font-bold leading-tight">404</h1>
      <span className="font-medium">{t("404_title")}</span>
      <p className="text-center text-muted-foreground">
        {t.rich("404_message", { br: () => <br /> })}
      </p>
      <div className="mt-6 flex gap-4">
        <Button
          size="lg"
          variant="outline"
          className="border-border text-foreground hover:bg-gray-100 bg-transparent hover:text-black"
          onClick={() => router.back()}
        >
          {t("go_back")}
        </Button>
        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          onClick={() => router.replace("/")}
        >
          {t("back_to_home")}
        </Button>
      </div>
    </div>
  );
};
