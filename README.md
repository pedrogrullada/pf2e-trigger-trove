# Trigger Trove
A compilation of triggers to use with the [Trigger Engine](https://github.com/reonZ/trigger-engine) module.

> [!WARNING]
> This module has been retooled to use **Trigger Engine** instead of PF2e Trigger. Make sure you have the right module enabled. PF2e Trigger will not receive any more updates and will not be supported by this module.

## How to use?
Enable the module and you will see our compilation of triggers. They are **disabled** by default, and you should only enable triggers that you plan on using.

If you want to see what abilities have some degree of support before installing, you can navigate the [triggers](./triggers/) directory.

## Contribute
If you have a request for a rule a trigger could handle, or if you have a trigger idea that you can't make a PR for, you can [make a new issue](https://github.com/pedrogrullada/pf2e-trigger-trove/issues/new). No promises that I'll act on it, but I'll at least take a look.

Pull requests are very welcome! I will review your PR as soon as I can, likely testing them out myself. Please bear with me if I take some time, or if I'm a bit fuzzy and ask for changes.

If you want to contribute your own trigger, here's how you do it:

### Adding Triggers

1. Create your triggers. Here's a few things to keep in mind:
    - See [Triggers Style Guide](#triggers-style-guide).
    - If your trigger relies on certain items, usually effects, they should go in the Auxiliary Items compendium. See [Adding Auxiliary Items.](#adding-auxiliary-items).
2. Once your triggers are created, export all triggers you want to submit. Trigger Engine will give you an array with all your triggers.
3. Create a JSON file for each trigger you're submitting, each of them must be an object.
4. Name the file after the rule you're automating in kebab-case (for example `thermal-nimbus.json`), and place it in the most fitting folder in the `/triggers/` directory. Create a new one if none of them fit.
5. Make sure any auxiliary items your trigger needs have been exported. See [Adding Auxiliary Items.](#adding-auxiliary-items).
6. Submit your PR!

Here are some examples of what the trigger file you submit would look like.
<details>
  <summary>Trigger Example</summary>

```json
{
  "description": "A very impressive trigger.",
  "folder": "Spells",
  "id": "12345abcde",
  "name": "Mega Punch (Attack Rolled)",
  "nodes": [
    {
      "..."
    },
    {
      "..."
    }
  ],
  "priority": 0,
  "tags": [
      "pf2e"
  ],
  "variables": {
   "..."
  }
}
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
9. If your item was created in pf2e and it's meant to be cross-compatible by using an anachronism module, duplicate the item and add it to sf2e's auxiliary items pack, making the necessary adjustments (switching its system and version propertes for the ones corresponding to sf2e, and switching flags such as `flags.pf2e` for `flags.sf2e`; and making sure you're using a valid image). If your item was created in sf2e, it is the same process but reversed.
  9a. This is just an interim solution until I figure out a way to be smarter about this!
10. Commit and push the items you added, then create a PR with both your trigger and item updates.

### Adding Macros
The Execute Event node is such that there's a lot of possibilities for automations that can be triggered by the user, such as the existing Vitality Network implementation. If you're handy with macros and want to contribute to or improve the module's macros, feel free! As for extracting the Foundry macros, you can follow the instructions for [Adding Auxiliary Items.](#adding-auxiliary-items), extracting your macro instead. Just make sure to make them usable via this module's API for ease of providing updates

### Triggers Style Guide
Here are some guidelines to keep some level of consistency and curation in the module.
- Name your trigger after the rule it's handling, following [Chicago Title Case](https://capitalizemytitle.com/style/chicago). If for some reason there need to be multiple triggers handling the same rule, you can use parentheticals to be more specific.
- Use `Check Rolled` rather than `Roll Save` for abilities that need a player to roll such as Intense Heat and Stench. It's my philosophy with this module that players should be rolling their own dice.
- Sort your trigger in the proper folder, creating a new one if there's no folder that fits your trigger.
- Write a description for your trigger, add it to `en.json`, and reference it via `@Localize[TRIGGERTROVE.FOO.BAR]` in your trigger's description field.
  - The description should be written in present tense imperative mood (When A happens, if B and C, then roll X damage, add Y condition, remove Z effect).
  - The first mention of the rule you're automating should be bolded.
  - If your trigger needs an auxiliary effect to work, mention that in its description.
- Make sure to tag your triggers as pf2e- or sf2e- compatible, as appropriate.
