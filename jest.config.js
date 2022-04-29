module.exports = {
  roots: ["<rootDir>/test/unit"],
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/lambda/custom/$1",
  },
  coverageDirectory: ".coverage",
};
