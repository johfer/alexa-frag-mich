/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { RequestHandler } from "ask-sdk-core";
import {
  IsIntent,
  GetRequestAttributes,
  GetSessionAttributes,
  Interject,
  getAnswer,
} from "../../lib/helpers";
import { IntentTypes, Messages } from "../../lib/constants";
import selectItem from "./select-item";

export const Answer: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Answer);
  },
  handle(handlerInput) {
    const { t, tr, slots } = GetRequestAttributes(handlerInput);

    const attributes = GetSessionAttributes(handlerInput);

    const item = attributes?.quizItem;
    const subject = attributes?.subject;

    const answer = slots[subject];
    console.log(item);
    console.log(slots);
    if (!answer?.isMatch)
      return handlerInput.responseBuilder.speak(t(Messages.ERROR_MSG)).reprompt("").getResponse();

    const expected: string[] = (
      item.synonyms ? item.synonyms.map((el: string) => el.toLowerCase()) : []
    ).concat(item.answer.toLowerCase());
    const actual = answer?.value.toLowerCase();

    const isCorrect = expected.includes(actual);

    let output = "";
    if (isCorrect) {
      output += Interject(tr(Messages.YES_MSG)) + "! <break time='1s'/>";
      attributes!.quizScore += 1;
      handlerInput.attributesManager.setSessionAttributes(attributes!);
    } else {
      console.log(`Expected ${expected} but got ${actual}`);
      output += Interject(tr(Messages.NO_MSG)) + "! <break time='1s'/>";
      output += getAnswer(attributes) + " ";
    }

    let question = "";
    if (attributes?.counter < 10) {
      question = selectItem(handlerInput, subject);
      output += question;
      return handlerInput.responseBuilder.speak(output).reprompt(question).getResponse();
    } else {
      output +=
        t(Messages.SCORE_MSG, attributes?.quizScore, attributes?.counter) +
        " " +
        t(Messages.GOODBYE_MSG);
      return handlerInput.responseBuilder.speak(output).getResponse();
    }
  },
};
