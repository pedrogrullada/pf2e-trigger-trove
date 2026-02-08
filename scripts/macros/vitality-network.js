export async function transferVitality() {
  const token = canvas.tokens.controlled[0];
  const actor = token?.actor;
  if(!actor) return void ui.notifications.warn("Select a token.");

  const target = game.user.targets.first();
  if (!target) return ui.notifications.warn("Select a target.");

  const resources = actor.system.resources;

  if (!("vitalityNetwork" in resources)){
    ui.notifications.info(`${token.name} has no vitality network.`);
      return;
  }

  if (resources.vitalityNetwork.value == 0){
    ui.notifications.info(`${token.name} has no Hit Points left in their vitality network.`);
      return;
  }

  const vitalityNetwork = resources.vitalityNetwork.value;

  let content = "";

  const expendVitalityNetwork = new foundry.data.fields.NumberField({min: 1, max: vitalityNetwork, step: 1})

  content += expendVitalityNetwork.toFormGroup({
    duration: expendVitalityNetwork,
    label: "Transfer Vitality Network",
    hint: "The number of Hit Points you will transfer"},{
    name: 'hitPoints',
    value: 1
  }).outerHTML

  const response = await foundry.applications.api.DialogV2.input({
    window: { title: "SF2e Trigger Trove" },
    content
  })

  if (!response) return;

  game.triggerEngine.execute(
    "trigger-engine:pf2e-trigger:wj2pMbLVNd8e4Lb5",
    [
      {type: "target", value: {actor: target.actor, token: target}},
      {type: "number", value: response.hitPoints},
      {type: "target", value: {actor: actor, token: token}}
    ]
  );
}