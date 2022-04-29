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
    expect(response).toMatchObject(ssml(/Du kannst Hallo zu mir sagen/gi));
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
    expect(response).toMatchObject(ssml(/Ich verstehe dich nicht, du Wurm/gi));
  });
});
