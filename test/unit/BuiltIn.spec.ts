import { skill, ssml, RequestWithIntent } from "./helpers";
import { IntentTypes, LocaleTypes } from "@/lib/constants";

describe("BuiltIn Intents", () => {
  it("Help", async () => {
    const response = await skill(
      RequestWithIntent({
        name: IntentTypes.Help,
        locale: LocaleTypes.deDE,
      })
    );
    expect(response).toMatchObject(
      ssml(/Folgendes verstehe ich: 'Frag mich Hauptstädte', 'Frag mich Nachbarsländer', oder 'Stop'/gi)
    );
  });

  it("Stop", async () => {
    const response = await skill(
      RequestWithIntent({
        name: IntentTypes.Stop,
        locale: LocaleTypes.deDE,
      })
    );
    expect(response).toMatchObject(ssml(/Ciao/gi));
  });

  it("Cancel", async () => {
    const response = await skill(
      RequestWithIntent({
        name: IntentTypes.Cancel,
        locale: LocaleTypes.deDE,
      })
    );
    expect(response).toMatchObject(ssml(/Ciao/gi));
  });

  it("Fallback", async () => {
    const response = await skill(
      RequestWithIntent({
        name: IntentTypes.Fallback,
        locale: LocaleTypes.deDE,
      })
    );
    expect(response).toMatchObject(
      ssml(
        /Ich verstehe Dich nicht.<amazon:effect name='whispered'>Streng Dich mehr an\.<\/amazon:effect>/gi
      )
    );
  });
});
