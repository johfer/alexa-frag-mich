export enum RequestTypes {
  Launch = "LaunchRequest",
  Intent = "IntentRequest",
  SessionEnded = "SessionEndedRequest",
  SystemExceptionEncountered = "System.ExceptionEncountered",
}

export enum IntentTypes {
  Help = "AMAZON.HelpIntent",
  Stop = "AMAZON.StopIntent",
  Cancel = "AMAZON.CancelIntent",
  Pause = "AMAZON.PauseIntent",
  StartOver = "AMAZON.StartOverIntent",
  Fallback = "AMAZON.FallbackIntent",
  Repeat = "AMAZON.RepeatIntent",

  Quiz = "QuizIntent",
  Answer = "AnswerIntent",
}

export enum ErrorTypes {
  Unknown = "UnknownError",
  Unexpected = "UnexpectedError",
}

export enum LocaleTypes {
  deDE = "de-DE",
  enAU = "en-AU",
  enCA = "en-CA",
  enGB = "en-GB",
  enIN = "en-IN",
  enUS = "en-US",
  esES = "es-ES",
  frFR = "fr-FR",
  itIT = "it-IT",
  jaJP = "ja-JP",
}

export enum Messages {
  WELCOME_MSG = "WELCOME_MSG",
  WELCOME_HELP_MSG = "WELCOME_HELP_MSG",
  SCORE_MSG = "SCORE_MSG",
  YES_MSG = "YES_MSG",
  NO_MSG = "NO_MSG",
  GOODBYE_MSG = "GOODBYE_MSG",
  HELP_MSG = "HELP_MSG",
  ERROR_MSG = "ERROR_MSG",
  ERROR_UNEXPECTED_MSG = "ERROR_UNEXPECTED_MSG",
}
