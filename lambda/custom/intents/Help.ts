import { RequestHandler } from "ask-sdk-core";
import { IsIntent, GetRequestAttributes } from "../lib/helpers";
import { IntentTypes, Messages } from "../lib/constants";

export const Help: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Help);
  },
  handle(handlerInput) {
    const { t } = GetRequestAttributes(handlerInput);

    const speechText = t(Messages.HELP_MSG);

    return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).getResponse();
  },
};
