import { skill, ssml, CreateIntentRequest } from "./helpers";
import { LocaleTypes, IntentTypes } from "@/lib/constants";

describe("Quiz", () => {
  it("should work", async () => {
    const response = await skill(
      CreateIntentRequest({
        name: IntentTypes.Quiz,
        locale: LocaleTypes.deDE,
        slots: {
          Subject: {
            value: "Hauptstädte",
            resolutions: {
              status: "ER_SUCCESS_MATCH",
              values: [
                {
                  name: "Hauptstädte",
                  id: "CAPITALS_ID",
                },
              ],
            },
          },
        },
      })
    );
    expect(response).toMatchObject(ssml(/Wie heisst die Hauptstadt von/gi));
  });
});
