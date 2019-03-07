import "./stylesheets/main.css";

// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote } from "electron";
import jetpack from "fs-jetpack";
const path = require("path");
import { greet } from "./hello_world/hello_world";
import env from "env";

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());
const notifier = require("node-notifier");

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json");

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

document.querySelector("#app").style.display = "block";
document.querySelector("#greet").innerHTML = greet();
document.querySelector("#os").innerHTML = osMap[process.platform];
document.querySelector("#author").innerHTML = manifest.author;
document.querySelector("#env").innerHTML = env.name;
document.querySelector("#electron-version").innerHTML =
  process.versions.electron;

setInterval(() => {
  notifier.notify({
    title: "Hello Again!",
    message: "It's been 30 minutes, time to stand up. 🏃",
    icon: path.join(__dirname, "../resources/icons/stand.jpg"),
    sound: true,
    wait: true
  });
}, 1800 * 1000);

notifier.notify({
  title: "Straight up greetings 🙃",
  message: "I'll notify you every 30 mins for standing up."
});
