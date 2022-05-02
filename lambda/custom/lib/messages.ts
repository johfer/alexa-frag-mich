import { Resource } from "i18next";
import { Messages, LocaleTypes } from "./constants";

interface IMessages {
  [Messages.WELCOME_MSG]: string;
  [Messages.WELCOME_HELP_MSG]: string;
  [Messages.SCORE_MSG]: string;
  [Messages.YES_MSG]: string[];
  [Messages.NO_MSG]: string[];
  [Messages.GOODBYE_MSG]: string;
  [Messages.HELP_MSG]: string;
  [Messages.ERROR_MSG]: string;
  [Messages.ERROR_UNEXPECTED_MSG]: string;
}

const messages: Resource = {
  [LocaleTypes.deDE]: {
    translation: {
      WELCOME_MSG: "Was soll ich Dich fragen? Hauptstädte oder Nachbarsländer?",
      WELCOME_HELP_MSG: "Sag: 'Hauptstädte', 'Nachbarsländer' oder 'Stop'",
      SCORE_MSG: "Du hast %u von %u Punkten erreicht.",
      YES_MSG: [
        "Wow",
        "Aber hallo",
        "bazinga",
        "bingo",
        "bravo",
        "donnerwetter",
        "heiliger strohsack",
        "hipp hipp hurra",
        "jawohl",
        "juhu",
        "ooh la la",
        "supi",
        "tada",
        "yay",
      ],
      NO_MSG: [
        "ach du liebe zeit",
        "ach du meine güte",
        "als ob",
        "au weia",
        "da lachen ja die hühner",
        "ist nicht dein ernst",
        "manometer",
        "nö",
        "oh mann",
        "oh oh",
        "von wegen",
      ],
      GOODBYE_MSG: "Ciao!",
      HELP_MSG:
        "Folgendes verstehe ich: 'Frag mich Hauptstädte', 'Frag mich Nachbarsländer', oder 'Stop'",
      ERROR_MSG:
        "Ich verstehe Dich nicht.<amazon:effect name='whispered'>Streng Dich mehr an.</amazon:effect>",
      ERROR_UNEXPECTED_MSG: "Ein Fehler ist aufgetreten. Sag's dem Johannes",
    } as IMessages,
  },
};

export default messages;
