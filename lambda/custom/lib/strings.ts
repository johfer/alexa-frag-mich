import { Resource } from "i18next";
import { Strings, LocaleTypes } from "./constants";

interface IStrings {
  [Strings.SKILL_NAME]: string;
  [Strings.WELCOME_MSG]: string;
  [Strings.GOODBYE_MSG]: string;
  [Strings.HELLO_MSG]: string;
  [Strings.HELP_MSG]: string;
  [Strings.ERROR_MSG]: string;
  [Strings.ERROR_UNEXPECTED_MSG]: string;
}

export const strings: Resource = {
  [LocaleTypes.deDE]: {
    translation: {
      SKILL_NAME: "Frag Mich",
      WELCOME_MSG: "Du kannst jetzt Hallo sagen!",
      GOODBYE_MSG: "Ciao!",
      HELLO_MSG: "Hallo Welt!",
      HELP_MSG: "Du kannst Hallo zu mir sagen!",
      ERROR_MSG: "Ich verstehe dich nicht, du Wurm",
      ERROR_UNEXPECTED_MSG: "Ein Fehler ist aufgetreten. Sag's dem Johannes",
    } as IStrings,
  },
};
