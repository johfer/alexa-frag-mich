import { RequestHandler } from "ask-sdk-core";
import { IsIntent, GetRequestAttributes, GetSessionAttributes } from "../../lib/helpers";
import { IntentTypes, Messages } from "../../lib/constants";
import selectItem from "./select-item";

export const Quiz: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Quiz, IntentTypes.StartOver);
  },
  handle(handlerInput) {
    const { t, slots } = GetRequestAttributes(handlerInput);

    const subject = slots.Subject;
    if (!subject?.isMatch)
      return handlerInput.responseBuilder.speak(t(Messages.ERROR_MSG)).reprompt("").getResponse();

    const attributes = GetSessionAttributes(handlerInput);
    // session not available in test
    if (attributes) {
      attributes.counter = 0;
      attributes.quizScore = 0;
      attributes.subject = subject.id;
    }

    const question = selectItem(handlerInput, subject.id);

    return handlerInput.responseBuilder.speak(question).reprompt(question).getResponse();
  },
};
