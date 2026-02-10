export async function transferVitality() {
  const token = canvas.tokens.controlled[0];
  const actor = token?.actor;

  if (!actor) return ui.notifications.warn(game.i18n.localize("TRIGGERTROVE.VitalityNetwork.Macro.Select"));

  const resources = actor.system.resources;
  
  if (!("vitalityNetwork" in resources)) return ui.notifications.warn(game.i18n.format("TRIGGERTROVE.VitalityNetwork.Macro.NoVitalityNetwork", {
    actor: token.name
  }));

  const target = game.user.targets.first();
  if (!target) return ui.notifications.warn(game.i18n.localize("TRIGGERTROVE.VitalityNetwork.Macro.Target"));

  if (resources.vitalityNetwork.value === 0) return ui.notifications.info(game.i18n.format("TRIGGERTROVE.VitalityNetwork.Macro.DepletedVitalityNetwork", {
    actor: token.name
  }));

  const remaining = resources.vitalityNetwork.value;
  const maxTransfer = 10 + 10 * Math.floor(actor.level / 5);

  let content = "";

  const expendVitalityNetwork = new foundry.data.fields.NumberField({min: 1, max: Math.min(remaining,maxTransfer), step: 1})

  content += expendVitalityNetwork.toFormGroup({
    duration: expendVitalityNetwork,
    label: game.i18n.localize("TRIGGERTROVE.VitalityNetwork.Macro.Label"),
    hint: game.i18n.localize("TRIGGERTROVE.VitalityNetwork.Macro.Hint")},{
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