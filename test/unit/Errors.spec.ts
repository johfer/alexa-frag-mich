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
    expect(response).toMatchObject(ssml(/Ich verstehe dich nicht, du Wurm/gi));
  });
});
