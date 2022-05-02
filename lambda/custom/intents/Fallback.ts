import { RequestHandler } from "ask-sdk-core";
import { IsIntent, GetRequestAttributes } from "../lib/helpers";
import { IntentTypes, Messages } from "../lib/constants";

export const Fallback: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Fallback);
  },
  handle(handlerInput) {
    const { t } = GetRequestAttributes(handlerInput);

    const speechText = t(Messages.ERROR_MSG);

    return handlerInput.responseBuilder.speak(speechText).reprompt(t(Messages.HELP_MSG)).getResponse();
  },
};
