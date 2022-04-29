#!/usr/bin/env node

const ngrok = require("ngrok");
const nodemon = require("nodemon");

ngrok
  .connect({
    proto: "http",
    addr: "3980",
  })
  .then((url) => {
    console.log(`ngrok tunnel opened at: ${url}`);
    console.log("Open the ngrok dashboard at: https://localhost:4040\n");

    nodemon({
      watch: ["lambda"],
      ext: "ts",
      exec: "ts-node ./lambda/local/index.ts",
    })
      .on("start", () => {
        console.log("The application has started");
      })
      .on("restart", (files) => {
        console.group("Application restarted due to:");
        files.forEach((file) => console.log(file));
        console.groupEnd();
      })
      .on("quit", () => {
        console.log("The application has quit, closing ngrok tunnel");
        ngrok.kill().then(() => process.exit(0));
      });
  })
  .catch((error) => {
    console.error("Error opening ngrok tunnel: ", error);
    process.exitCode = 1;
  });
