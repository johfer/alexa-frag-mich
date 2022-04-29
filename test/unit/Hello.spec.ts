import { skill, ssml, RequestWithIntent } from "./helpers";
import { LocaleTypes, IntentTypes } from "@/lib/constants";

describe("Hello", () => {
  it("should work", async () => {
    const response = await skill(
      RequestWithIntent({
        name: IntentTypes.HelloWorld,
        locale: LocaleTypes.deDE,
      })
    );
    expect(response).toMatchObject(ssml(/Hallo Welt/gi));
  });
});
