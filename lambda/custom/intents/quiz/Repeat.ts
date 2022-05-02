import { RequestHandler } from "ask-sdk-core";
import { IsIntent, GetSessionAttributes, getQuestion } from "../../lib/helpers";
import { IntentTypes } from "../../lib/constants";

export const Repeat: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Repeat);
  },
  handle(handlerInput) {
    const attributes = GetSessionAttributes(handlerInput);
    const question = getQuestion(attributes);

    return handlerInput.responseBuilder.speak(question).reprompt(question).getResponse();
  },
};
