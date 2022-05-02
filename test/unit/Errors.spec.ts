import { skill, ssml, RequestWithIntent } from "./helpers";
import { IntentTypes, LocaleTypes } from "@/lib/constants";

describe("Errors", () => {
  it("Unknown", async () => {
    const response = await skill(
      RequestWithIntent({
        name: "Intent" as IntentTypes,
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
