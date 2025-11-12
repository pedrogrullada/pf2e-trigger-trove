## 0.3.0
- Workflow improvements
  - Add release script (Chasarooni)
  - Split triggers into individual JSON files to be merged on build (Chasarooni)
- Add new triggers
  - Apply off-guard to a **Taunted** creature that attacks a creature other than the origin of its taunt effect. (Ettio) 
  - Add a **Shared Stratagem** effect to a Devise a Stratagem target, and post an effect to drag onto the designated ally. The target will be off-guard to the designated ally's next attack
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