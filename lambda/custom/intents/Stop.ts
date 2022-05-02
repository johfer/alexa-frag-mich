import { RequestHandler } from "ask-sdk-core";
import { IntentTypes, Messages } from "../lib/constants";
import { IsIntent, GetRequestAttributes } from "../lib/helpers";

export const Stop: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Stop, IntentTypes.Cancel, IntentTypes.Pause);
  },
  handle(handlerInput) {
    const { t } = GetRequestAttributes(handlerInput);

    const speechText = t(Messages.GOODBYE_MSG);

    return handlerInput.responseBuilder.speak(speechText).getResponse();
  },
};
