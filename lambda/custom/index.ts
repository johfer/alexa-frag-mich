import * as Alexa from "ask-sdk-core";
import * as Intents from "./intents";
import * as Errors from "./errors";
import * as Interceptors from "./interceptors";
import * as QuizIntents from "./intents/quiz";

export const handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    // Intents.Debug,

    // Default intents
    Intents.Launch,
    Intents.Help,
    Intents.Stop,
    Intents.SessionEnded,
    Intents.SystemExceptionEncountered,
    Intents.Fallback,

    // Quiz intents
    QuizIntents.Quiz,
    QuizIntents.Repeat,
    QuizIntents.Answer
  )
  .addErrorHandlers(Errors.Unknown, Errors.Unexpected)
  .addRequestInterceptors(Interceptors.Localization, Interceptors.Slots)
  .lambda();
