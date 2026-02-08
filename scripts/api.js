import { transferVitality } from "./macros/vitality-network.js";

export function setupAPI() {
    game.triggerTrove = {
        api: {
            transferVitality: transferVitality,
        },
  };
}
