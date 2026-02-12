## 1.1.0
- **New Triggers**
  - **Bon Mot:** When the roller of a Diplomacy check is using the <strong>Bon Mot</strong> action, apply Bon Mot's effect to the target or roller, depending on the outcome. If the roller succeeds on their Bon Mot, remove the effect resulting from a critically failed Bon Mot, if there is one.
- **Updated Triggers**
  - **Vitality Network:** Remove duplicate vitality network resource check and delete unused variable from macro
  - **Vitalizing:** Check that the target of the attack is undead

## 1.0.0
- Housekeeping 
  - Migrate the module to use **Trigger Engine**
    - This means the module **no longer works with PF2e Trigger.** Use **Trigger Engine** instead
  - Add support for SF2e
- Trigger Updates
  - Recreate nearly every trigger to work with Trigger Engine
  - **Scars of Steel**
    - Its trigger will now reduce its number of uses.
  - Monster abilities, such as **Gibbering** and **Frightful Presence**, will now automatically apply their effects when a save is made
- New Triggers
  - **Demoralize, Grapple, Trip, & Disarm**
    - Automatically apply their respective conditions and effects depending on the outcome
  - **Enfeeble, Fear, and Slow**
    - Automatically apply the effects of these spells depending on the outcome. Just proof of concept for some of the new stuff we can do
  - **Panache**
    - Panache will automatically be applied when bravado actions are rolled, and removed when finishers are resolved
  - **Overdrive**
    - Automatically apply overdrive's effect depending on the outcome, including a critical failure tracking effect
  - **Action Hero**
    - When an action hero succeeds on their Strike with an automatic weapon, add the suppressed condition to the target
  - **Suppressing Fire**
    - When an enemy fails their area/auto fire save, automatically apply the suppressed condition
  - **Vitality Network**
    - At the start of of the mystic's turns, they regain some of their vitality network
    - Using the macro provided in the compendium, you can select a number of Hit Points to roll as healing and automatically deduct them from your vitality network

## 0.11.0
- Housekeeping
  - Updates minimum PF2e Trigger version to 2.21.0, which fixes some effects being applied to non-character tokens. 
- New Triggers
  - Aldori Swordlord
    - _Attack Rolled:_ When a character with this feat hits or critically hits with an attack using an _aldori dueling sword_, they receive the corresponding number of temporary Hit Points.
  - Blinding Aura
    - _Turn Started:_ When a character starts their turn within the Shining Child's Bliding Aura, post its description to chat, alongside an immunity effect if needed.
  - Commanding Presence
    - _Aura Entered:_ When a character enters a Jann's Commanding Presence, send that ability to chat and add an immunity effect to the triggering character. If that character is a non-jann genie, also add an auxiliary effect with a penalty to their save.
  - Regalia Initiate Benefit
    - _Turn Ended:_ Reduce the frightened value of all allies within the aura.
  - Rejuvenating Touch
    - _Damage Taken:_ (but actually *healing* taken) When the target of a _lay on hands_ spell is healed by the spell and its origin has the Rejuvenating Touch feat, that target receives its temporary Hit Points.
  - Staggering Shot
    - _Attack Rolled:_ When a character using Staggering Fire hits or critically hits with a ranged Strike using a weapon in the bow group, the attack target receives the appropriate speed penalty.
  - Treat Wounds
    - _Damage Taken:_ (but actually _healing_ taken) When a character receives healing from Treat Wounds, remove the wounded condition and add its immunity-tracking effect.
- Localization
  - (Lioheart) Updated polish localization 

## 0.10.3
- **Localization**
  - (Lioheart) Updated polish localization

## 0.10.2
- **Updated Triggers**
  - Actually add auxiliary effect for _rooting_ rune 

## 0.10.1
- **Updated Triggers**
  - Fix typo in _fortification_ rune trigger description
  - Provide further information in _warning stripes_ trigger description

## 0.10.0
- **New Triggers**
  - Brutal Beating
    - _Damage Taken:_ When a character with Brutal Beating deals critical hit damage to a target, that target becomes frightened 1.
  - Crushing, Fearsome, Rooting, and Vitalizing runes
    - _Attack Rolled:_ On a critical hit, apply these runes respective conditions and effects.
  - Distracting Shot
    - _Damage Taken:_ When a character with Distracting Shot critically hits their hunted prey, or if they hit their hunted prey twice in the same turn, that target becomes off-guard until the start of the triggering character's next turn. If the character has Greater Distracting Shot, this effect lasts until the end of their next turn instead, and their hunted prey becomes off-guard until the start of their next turn on a hit.
  - Engulf & Swallow Whole
    - _Turn Ended:_ When a creature that is Engulfed or Swallowed Whole ends their turn, roll that ability's damage. 
  - Enduring Might and Flame Barrier
    - _Damage Taken:_ Remove these spells' effects when damage is taken.
  - Fortification
    - _Attack Rolled:_ On a critical hit against a character with this rune, roll a flat check.
  - Scars of Steel
    - _Attack Rolled:_ When a raging character is critically hit by an attack that deals physical damage, and that character has Scars of Steel with available uses left, confirm whether they will use the ability and add an auxiliary effect that enables its resistance if so.
    - _Damage Taken:_ Remove the previously mentioned effect.
  - Unbalancing Blow
    - _Damage Taken:_ When a character with Unbalancing Blow deals critical hit damage, the target becomes off-guard against the character's attacks until the end of their next turn.
  - Warning Stripes:
  	- _Attack Rolled:_ If a character affected by Warning Stripes, as determined by the presence of its auxiliary effect, is hit with a melee unarmed attack, roll the spell's damage.
- **Updated Triggers**
  - Shields of the Spirit
    - Now accounts for origin's sanctification!  
- **Localization**
  - (Lioheart) Update polish localization.

## 0.9.1
- **New Trigger**
  - Diamond Dust
    - _Aura Entered:_ When a character enters a Diamond Dust aura, roll its damage and add an effect to make the character immune to further instances of this trigger.
    - _Turn Ended:_ When a character ends their turn inside a Diamond Dust aura, roll its damage. If a character has the immunity effect added by the Aura Entered trigger, remove that effect.
    - For either of these triggers to work, the spellcaster must have Aux Effect: Diamond Dust applied to them, dragged from the spell when posted to chat. Link this effect in the spell's description.
- **Localization**
  - (Lioheart) Update polish localization. 

## 0.9.0
- **New Triggers**
  - (Ettio) Sword and Pistol
    - _Attack Rolled:_ When a character with Sword and Pistol makes a successful ranged Strike against an enemy within their reach—as indicated by the toggle in their sheet—with a one-handed firearm or crossbow, an auxiliary effect is added that makes the target off-guard to their next melee attack with a one-handed melee weapon. A trigger effect is also added to the target of this attack for tracking purposes.
    - _Damage Taken:_ When a character with Sword and Pistol deals damage with a one-handed melee weapon to an enemy that was off-guard as a result of that feat, remove the auxiliary effect on the attacker, and the trigger effect on the target.
  - Air Aura Junction
    - _Turn Started:_ When a character starts their turn within the kinetic aura of an Air Gate kineticist with its aura junction, grant that character the corresponding bonus to their Speeds via an auxiliary effect until the end of their turn. This benefit overlaps with the system's effect when inside the aura, but persists once the character leaves the aura until the end of their turn.
  - Elegant Buckler, Extravagant Parry, and Flashy Dodge
    - _Attack Rolled:_ When an attack misses (or critically misses in Elegant Buckler's case) against a target benefitting from the corresponding feat, that target gains panache until the end of their next turn.
  - Exploration Activities
    - Defend
      - _Combatant Joined:_ When a character that is Defending joins a combat, their shield is raised.
      - _Turn Started:_ When a Defending character starts their first turn with their shield raised, remove that effect.
    - Scout
      - _Combatant Joined:_ When a character that is Scouting joins combat, add its effect to all allied scene tokens. If the character has Incredible Scout, its effect will be given instead.
  - Martial Performance
    - _Damage Taken:_ If a character with Martial Performance deals damage to an enemy, and they are under the effects of _courageous anthem_, _rallying anthem_, or _song of strength_; then the duration of these effects is extended by 1 round. Afterwards, an effect is added that prevents that same composition from benefitting again. For this trigger to work correctly, the composition effect must have been dragged from the triggering character's chat card.
  - Replenishment of War
    - _Damage Taken:_ If the damage origin has Replenishment of War and its damage comes from a Strike with its deity's favored weapon, then grant Replenishment of War's temporary Hit Points appropriate for the outcome of the Strike. Disable this trigger if they have Shared Replenishment, as it would be a nuisance!
  - Scout's Warning
    - _Combatant Joined:_ A character with Scout's Warning can confirm whether they will use the feat. If they will, its effect will be added to all scene tokens that share its alliance.
  - Selfish Shield
    - _Damage Taken:_ Remove Selfish Shield's effect after taking damage. Additionally, add Champion's Extra Damage effect afterwards. The source of the damage must be targeted after the effect is added in order to work correctly. If the trigger target has Ongoing Selfishness, its effect will be added automatically as well.
- **Updated Triggers**
  - Champion's Resistance
    - Now has specific support for Glimpse of Redemption. The trigger will  add enfeebled 2 to the damage origin. If the champion has Weight of Guilt, then they will be prompted to decide if they want to make the damage origin stupefied instead.
- **Localization**
  - (Lioheart) Update polish localization

## 0.8.0
- **Localization**
  - (Lioheart) Add polish localization
  - Fix some misplaced localization keys for Trickster's Mirrors trigger
- **New Triggers**
  - Finishing Follow-Through
    - _Damage Taken:_ When a creature is brought to 0 HP from a finisher, the damage origin gains panache if it has Finishing Follow-Through.
  - Revitalizing Finisher
    - _Attack Rolled:_ When a creature is hit by a Revitalizing Finisher, the attack origin and all allies within 30 feet of it gain temporary Hit Points equal to half the origin's level. On a failure, only the attack origin gains this benefit.
  - Swaggering Initiative
    - _Turn Started:_ When a character using Swaggering Initiative is the first one to take a turn in combat, they receive panache.
  - Unbalancing Finisher
    - _Damage Taken:_ When a creature takes damage from Unbalancing Finisher, it is off-guard until the end of the origin's next turn.

## 0.7.0
- **Housekeeping**
  - Update minimum PF2e Trigger version to 2.19.0
- **New Triggers**
  - **Phase Familiar, Rapid Retreat, Warping Pull**
    - _Damage Taken:_ Automatically remove their respective spell effects when damage is taken.
- **Updated Triggers**
  - **Aura of Courage, Goblin Scuttle, Steam Knight**
    - Maintain these triggers to latest PF2e Trigger changes
  - **Energy Shot and One Shot, One Kill**
    - Fix some unlocalized strings
  - **Stench**
    - Add Stench immunity effect and append a link to said effect when the ability is posted to chat.

## 0.6.1
- **Housekeeping**
  - Update minimum PF2e Trigger version to 2.17.0
## 0.6.0
- **Improvements**
  - Add support for localization
## 0.5.4
- **New Triggers**
  - **Gibbering**:
    - _Turn Started:_ When a non-immune creature begins its turn within the gibbering aura, send the ability to chat alongside an auxiliary effect to apply immunity.  
- **Updated Items**
  - Add missing selector to EphemeralEffect on Shared Stratagem's auxiliary effect
## 0.5.3
- **Updated Triggers**
  - Account for rerolls in Shared Stratagem's trigger
  - Send HP difference to chat instead of double spell rank if it's lower with Spirit Link trigger

## 0.5.2
- **New Triggers**
  - **Dread Flickering**
    - _Turn Ended:_ When a non-immune living character ends their turn in a Dread Flickering aura, send the ability to chat alongside an immunity auxiliary effect to be applied in the event of a critically successful save.
  - **Spirit Link**
    - _Turn Started:_ When a creature starts their turn and they have a _spirit link_ auxiliary effect that originated from themselves, then check scene tokens for other creatures with an identical effect. If there is such a token, check if they're not at their Hit Point maximum and if so, send a damage-healing-hybrid roll to chat for both parties of spirit link to apply to themselves.
- **Updated Triggers**
  - Update **Incendiary Aura** trigger to send persistent damage to chat whenever damage is taken in the aura rather than unreliably auto-apply it
  - Rewrite **Steam Knight**'s trigger to be clearer
  - Fix **Taunt** trigger adding auxiliary effect to target rather than to triggering creature
- **Workflow**
  - Add new issue templates for **Trigger Request** and **Trigger Error** issues. Should make it easier to report errors or request triggers, evidently. (Thanks to Chasarooni for letting me copy his homework)

## 0.5.1
- Fix broken links in Mirror Image and Trickster's Mirrors descriptions.
- Reclassify critical specialization as equipment triggers

## 0.5.0
- **New Triggers**	
  - **Amulet's Abeyance**
	  - *Damage Taken*: Automatically remove Amulet's Abeyance effect after non-healing damage is taken.
  - **Critical Specialization**
      - *Damage Taken*: When a creature takes damage from a character with critical specialization with a weapon from the bow, spear, or sword groups, their critical specialization effects are automatically applied.  
      - Spear and Sword will take *grievous* rune into account.
      - Only these groups are supported as the rest either a.) already as automated as they can be by the system, or b.) require a saving throw, which I don't want to automatically roll for people.
  - **Inviolable**
	  - *Attack Rolled:* When a creature with Inviolable is hit, roll 3d6 spirit damage. If they are holy or unholy, the damage has the corresponding trait.
  - **Mirror Image & Trickster's Mirrors**
	  - *Attack Rolled*: If the attacked creature has the respective auxiliary effect, automatically reduce the mirrors/images resource depending on both the outcome of the attack and a randomly generated number, as described by the spell. In the case of Trickster's Mirrors, if the attacker is within 5 feet, also roll damage when a mirror is destroyed.
  - **Nettleskin**
	  - *Attack Rolled*: Roll Nettleskin's damage when the recipient of the spell is hit with an unarmed attack, or a melee attack by an adjacent attacker. For this trigger to work, the auxiliary effect must be dragged onto the recipient. Furthermore, it must be dragged from the spell's card in chat in order to have the correct damage scaling.
	  - *Damage Taken*: When an attacker takes Nettleskin damage, reduce the auxiliary effect's duration by 1 round.
  - **Spike Skin**
	  - *Attack Rolled:* Reduce the duration of Spike Skin's effect by 1 minute each time the user is hit by an attack that deals bludgeoning, piercing, or slashing damage.	
  - **Steam Knight**
	  - *Turn Started:* If a character in Steam Knight stance starts their turn and there's an enemy within their kinetic aura, roll damage automatically, including a reminder note of the free action they can use to deal this damage, and the necessary saving throw.
- **Updated Triggers**
  - Add auxiliary effect to increase **Vibrant's Thorn** damage and link the effect when a vitality spell is cast.
  - Clean up several trigger blueprints.

## 0.4.0
- **New Triggers**
  - **Aura of Courage**
      - *Turn Ended*: When a frightened creature ends their turn inside an allies' champion's aura with Aura of Courage, they reduce their frightened value by 1.
  - **Crowned in Tempest's Fury**
      - *Aura Entered*: Roll a kineticist's Crowned in Tempest's Fury damage when a creature enters their kinetic aura. If you have Safe Elements, you can designate a party member to be unaffected by this trigger by dragging the Safe Elements auxiliary effect onto them from the kineticist's sheet.
      - *Turn Ended*: Same thing, but on turn ended inside kinetic aura.
  - **Energy Shots** (by Ettio)
      - *Combatant Joined*: After confirming that Energy Shot is used, add its damage effect as well as an auxiliary effect to automatically track the shots as a Special Resource. 
      - *Attack Rolled*: If the attacker has the Energy Shot auxiliary effect, deplete the Energy Shots resource by 1 after attacking with a crossbow or firearm. If there are no more Energy Shots left, remove both effects automatically.
  - **Finisher** (by Rhonabwy)
      - *Attack Rolled*: Remove Panache's effect when a finisher misses. If the attack is rerolled into a success, grant Panache back to enable finisher damage.
      - *Damage Taken*: Remove Panache's effect from damage origin when finisher damage is dealt.
  - **Frightful Presence**
      - *Aura Entered*: Post the Frightful Presence ability to chat when a creature enters the aura. If you have PF2e Toolbelt Target Helper feature enabled, the message will have the triggering creature as its target.
      - *Aura Entered (Enemies Only)*:  Same as the previous one, but it only affects enemies of the Frightful Presence creature. Just seems convenient.
      - Obviously, only enable **ONE** of these two, if any.
- **Trigger Updates**
    - Generalize Thermal Nimbus (Damage) into generic Roll Item Damage subtrigger. We love recycling.
    - Update Shields of the Spirit trigger to take Security into account.

## 0.3.0
- Workflow improvements
  - Add release script (Chasarooni)
  - Split triggers into individual JSON files to be merged on build (Chasarooni)
- New triggers
  - Apply off-guard to a **Taunted** creature that attacks a creature other than the origin of its taunt effect. (Ettio) 
  - Add a **Shared Stratagem** effect to a Devise a Stratagem target, and post an effect to drag onto the designated ally. The target will be off-guard to the designated ally's next attack
- Updated triggers
  - Use newly introduced Combatant Joined event for One Shot, One Kill trigger
## 0.2.2
- Add missing auxiliary effect for One Shot, One Kill trigger
- Add confirmation dialogue for One Shot, One Kill trigger

## 0.2.1
- Add new triggers
  - Stench
  - One Shot, One Kill

## 0.2.0
- Add some new triggers
  - Send **Intense Heat** monster ability to chat upon entering or starting turn in the aura, with target if PF2e Toolbelt's Target Helper feature is enabled.
  - **Goblin Scuttle** reminder upon an ally ending a movement in an adjacent space.
  - Roll damage for **Thermal Nimbus** upon entering and starting turn within kinetic aura
  - Add **Ravel of Thorns** speed penalty effect upon starting turn in kinetic aura and removing them upon leaving said aura.
    - Add **Safe Elements** Check for the previously mentioned kineticist abilities. The kineticist can add the `Aux Effect: Safe Elements` effect to their Safe Elements feat description, and if the effect is dragged onto their allies from there, they will be unaffected by these triggers.
- Bump minimum version of PF2e Trigger to 2.15.0
