# PF2e Trigger Trove
A compilation of triggers to use with the [PF2e Trigger](https://github.com/reonZ/pf2e-trigger) module.

## How to use?
Enable the module and you will see this module's triggers. They are **disabled** by default, and you should only enable triggers that you plan on using.
## Contribute
PRs are welcome. If you want to contribute your own trigger, here's how you do it:

### Adding Triggers

1. Import the `pf2e-trigger-trove.json` file to your world. Make sure to **check the Keep IDs box.**
    - I recommend you use a world without other triggers to avoid accidentally exporting triggers other than the ones you wish to contribute.
    - Importing the module's trigger file first will allow you to use any of this module's subtriggers, if necessary. Might save you some work!
2. Create your triggers. Here's a few things to keep in mind:
    - Make sure to check the subtriggers available to see if you can save yourself some work.
    - Name your triggers `Name of Ability (Trigger Type)`. If there's multiple triggers with the same name and type, you can be a bit more specific.
    - If your trigger relies on certain items, usually effects, they should go in the Auxiliary Items compendium. See [Adding Auxiliary Items.](#adding-auxiliary-items)
3. Once your triggers are created, export all the module's triggers, as well as the ones you wish to add, into a file (or copy them to clipboard.)
4. Submit the contents of that file as a PR to update `pf2e-trigger-trove.json`.

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