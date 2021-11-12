import currentWeather from "./current-weather.js";
import { viewportSize } from "./utils/viewport.js";

const $app = document.querySelector("#app");
const $loading = document.querySelector("#loading");
viewportSize($app);
viewportSize($loading);
currentWeather();
