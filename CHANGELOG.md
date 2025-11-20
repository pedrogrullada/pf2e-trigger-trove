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
