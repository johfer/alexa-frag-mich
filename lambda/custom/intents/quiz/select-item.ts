import { sprintf } from "sprintf-js";
import { HandlerInput } from "ask-sdk-core";
import { Random, GetSessionAttributes, getQuestion } from "../../lib/helpers";
import data from "../../data";

export default function (handlerInput: HandlerInput, subject: string): string {
  const subjectData = data[subject][handlerInput.requestEnvelope.request.locale];
  const items = subjectData.items;
  const item = Random(items);
  //console.log(item);

  // no session (in test)
  let question = sprintf(subjectData.questionTemplate, 0, item);

  const attributes = GetSessionAttributes(handlerInput);
  if (attributes) {
    attributes.counter++;
    attributes.quizItem = item;
    attributes.questionTemplate = subjectData.questionTemplate;
    attributes.answerTemplate = subjectData.answerTemplate;
    handlerInput.attributesManager.setSessionAttributes(attributes);

    question = getQuestion(attributes);
  }

  return question;
}
