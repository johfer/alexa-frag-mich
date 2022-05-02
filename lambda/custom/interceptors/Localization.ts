import { RequestInterceptor } from "ask-sdk-core";
import * as i18n from "i18next";
import * as sprintf from "i18next-sprintf-postprocessor";
import messages from "../lib/messages";
import { RequestAttributes } from "../interfaces";
import { Random } from "../lib/helpers";

type TranslationFunction = (...args: unknown[]) => string;

/**
 * Adds translation functions to the RequestAttributes.
 */
export const Localization: RequestInterceptor = {
  process(handlerInput) {
    /*const localizationClient = */ i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: messages,
      returnObjects: true,
    });

    const attributes = handlerInput.attributesManager.getRequestAttributes() as RequestAttributes;
    attributes.t = function (...args: unknown[]) {
      return (i18n.t as TranslationFunction)(...args);
    };
    attributes.tr = function (key: string) {
      const result = i18n.t(key) as unknown as string[];

      return Random(result);
    };
  },
};
