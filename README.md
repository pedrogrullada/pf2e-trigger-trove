# PF2e Trigger Trove
A compilation of triggers to use with the [PF2e Trigger](https://github.com/reonZ/pf2e-trigger) module.

## How to use?
Enable the module and you will see this module's triggers. They are **disabled** by default, and you should only enable triggers that you plan on using.

Here's the list of abilities currently handled by triggers in some capacity.
<details>
  <summary>The List (As of 0.7.0)</summary>

   - Equipment
     - Critical Specialization (Bow, Spear, and Sword only)
   - Feats & Features
     - Amulet's Abeyance
     - Aura of Courage
     - Champion's Resistance
     - Crowned in Tempest's Fury
     - Energy Shot
     - Goblin Scuttle
     - Inviolable
     - One Shot, One Kill
     - Ravel of Thorns
     - Shared Stratagem
     - Spike Skin
     - Steam Knight
     - Swashbuckler Finisher
     - Taunt
     - Thermal Nimbus
   - Monster Abilities
     - Dread Flickering 
     - Frightful Presence
     - Gibbering
     - Intense Heat
     - Stench
   - Spells
     - Incendiary Aura
     - Mirror Image
     - Mountain Resilience
     - Nettleskin
     - Phase Familiar
     - Rapid Retreat
     - Shields of the Spirit
     - Spirit Link
     - Trickster's Mirrors
     - Vibrant Thorns
     - Warping Pull
</details>

## Contribute
If you have a request for something the module could handle, or if you have a trigger idea that you can't make a PR for, you can [make a new issue](https://github.com/pedrogrullada/pf2e-trigger-trove/issues/new). No promises that I'll act on it, but I'll at least take a look.

Pull requests are very welcome! I will review your PR as soon as I can, likely testing them out myself. Please bear with me if I take some time, or if I'm a bit fuzzy and ask for changes.

If you want to contribute your own trigger, here's how you do it:

### Adding Triggers

1. Create your triggers. Here's a few things to keep in mind:
    - See [Triggers Style Guide](#triggers-style-guide).
    - If your trigger relies on certain items, usually effects, they should go in the Auxiliary Items compendium. See [Adding Auxiliary Items.](#adding-auxiliary-items)
    - If you need to access one of the module's subtriggers, you will need to import it from `pf2e-trigger-trove.json` while making sure to check the **KEEP IDS** box.
2. Once your triggers are created, export all triggers and subtriggers you want to submit.
3. Create a JSON file containing either
    - A single trigger object, if you're only submitting one trigger
    - An array of trigger objects, if you're submitting multiple triggers (for example, Aura Entered and Turn Started triggers are a common combo)
4. Name the file after the rule you're automating in kebab-case (for example `thermal-nimbus.json`), and place it in the most fitting folder in the `/triggers/` directory. Create a new one if none fit.
5. Submit your PR!

Here are some examples of what the trigger file you submit would look like.
<details>
  <summary>Single Trigger Example</summary>

```json
{
  "_id": "12345abcde",
  "description": "A very impressive trigger.",
  "folder": "Spells",
  "name": "Mega Punch (Attack Rolled)",
  "nodes": [
    {
      "..."
    },
    {
      "..."
    }
  ]
}
```
</details>

<details>
  <summary>Multiple Triggers Example</summary>

```json
[
  {
    "_id": "poiuyt912837",
    "description": "Charge kick at the start of a turn",
    "folder": "Feats & Features",
    "name": "Mega Kick (Turn Started)",
    "nodes": [
      {
        "..."
      },
      {
        "..."
      }
    ]
  },
  {
    "_id": "qwerty987654",
    "description": "Deliver the charged kick, ouchie.",
    "folder": "Feats & Features",
    "name": "Mega Kick (Attack Rolled)",
    "nodes": [
      {
        "..."
      },
      {
        "..."
      }
    ]
  }
]
```
</details>

### Adding Auxiliary Items

If your trigger relies on auxiliary items (such as how we handle Safe Elements), you will want to add them to the module's packs, in addition to submitting your triggers. Follow these steps to add them in a human-readable way:

1. Fork this repository and clone it.
2. Install [NodeJS](https://nodejs.org/en) and [Git](https://git-scm.com/downloads).
3. Navigate to your cloned repo and run `npm ci`.
4. Run `npm run build` to build the module from the source.
5. Make sure Foundry is closed, run `npm run link`, and enter the path to your Foundry's user data folder. Keep in mind this will delete any existing version of the module in that folder, and it will create a symlink between your cloned repo and the module in your Foundry.
6. From here, you can start working on the module inside Foundry. You'll want to add your items to the Auxiliary Items compendium.
7. Make sure your items are properly linked in your triggers.
8. Run `npm run extractPacks` to extract the changes you made in Foundry into your cloned repo.
9. Commit and push the items you added, then create a PR with both your trigger and item updates.

### Triggers Style Guide
Here are some guidelines to keep some level of consistency and curation in the module.
- Name your triggers `Name of Ability (Trigger Type)`. If there's multiple triggers with the same name and type, you can be a bit more specific.
- Check the module's subtriggers to see if you can use one of them to save yourself some work.
- For now, prefer the `Send Item to Chat` node over `Roll Save` for abilities such as Intense Heat and Stench.
  - If PF2e Toolbelt's Target Helper feature is enabled, the target will be the triggering creature by default, which is quite handy and preferable to auto-rolling saves, in my opinion.
- Sort your trigger in the proper folder, creating a new one, if there's no folder that fits your trigger.
