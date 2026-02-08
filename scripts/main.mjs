import { setupAPI } from "./api.js";

Hooks.once("triggerEngine.registerTriggers", (registerTriggers) => {
  registerTriggers("trigger-engine", "pf2e-trigger", "modules/pf2e-trigger-trove/triggers/base-triggers.json");
  registerTriggers("trigger-engine", "pf2e-trigger", `modules/pf2e-trigger-trove/triggers/${game.system.id}-triggers.json`);
});

Hooks.once("ready", function() {
  setupAPI();
});