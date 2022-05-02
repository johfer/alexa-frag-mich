import { RequestHandler } from "ask-sdk-core";
import { RequestTypes, Messages } from "../lib/constants";
import { IsType, GetRequestAttributes } from "../lib/helpers";

export const Launch: RequestHandler = {
  canHandle(handlerInput) {
    return IsType(handlerInput, RequestTypes.Launch);
  },
  handle(handlerInput) {
    const { t } = GetRequestAttributes(handlerInput);

    const speechText = t(Messages.WELCOME_MSG);
    const helpText = t(Messages.WELCOME_HELP_MSG);

    return handlerInput.responseBuilder.speak(speechText).reprompt(helpText).getResponse();
  },
};
