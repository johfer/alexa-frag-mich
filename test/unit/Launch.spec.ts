import { skill, ssml, RequestWithType } from "./helpers";
import { RequestTypes, LocaleTypes } from "@/lib/constants";

describe("Launch", () => {
  it("should work", async () => {
    const response = await skill(
      RequestWithType({
        type: RequestTypes.Launch,
        locale: LocaleTypes.deDE,
      })
    );
    expect(response).toMatchObject(ssml(/Du kannst jetzt Hallo sagen/gi));
  });
});
