exports.seed = knex =>
  knex('fighting_style').then(() =>
    knex('fighting_style').insert([
      {
        name: 'Treachery',
        source: 'MCDM',
        page: 8,
        entries: {
          e: [
            'When you attack an enemy who has none of your allies adjacent to it, you gain a +3 bonus to damage rolls.',
          ],
        },
      },
      {
        name: 'Bravado',
        source: 'MCDM',
        page: 8,
        entries: {
          e: [
            'When you attack an enemy who has none of your allies adjacent to it, you gain a +3 bonus to damage rolls.',
          ],
        },
      },
      {
        name: 'Schemes',
        source: 'MCDM',
        page: 8,
        entries: {
          e: [
            'While you wield a melee weapon in one hand and no other weapons, you can use your reaction after an adjacent enemy attacks you to move into any other unoccupied space within five feet of the attacking enemy. This movement does not provoke an opportunity attack.',
          ],
        },
      },
      {
        name: 'Lies',
        source: 'MCDM',
        page: 8,
        entries: {
          e: [
            'When you attack with a two-handed melee weapon, you can use your Charisma modifier, instead of your Strength modifier, for both the attack and damage rolls.',
          ],
        },
      },
      {
        name: 'Blessed Warrior',
        source: 'TCE',
        page: 52,
        entries: {
          e: [
            'You learn two cantrips of your choice from the cleric spell list. They count as paladin spells for you, and Charisma is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the cleric spell list.',
          ],
        },
        options: {
          choose: {
            count: 2,
            type: 'cantrip',
            from: 'cleric',
          },
        },
      },
      {
        name: 'Archery',
        source: 'PHB',
        page: 1,
        entries: {
          e: [
            'You gain a +2 bonus to attack rolls you make with ranged weapons.',
          ],
        },
      },
      {
        name: 'Druidic Warrior',
        source: 'TCE',
        page: 57,
        entries: {
          e: [
            'You learn two cantrips of your choice from the druid spell list. They count as ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the druid spell list.',
          ],
        },
        options: {
          choose: {
            count: 2,
            type: 'cantrip',
            from: 'druid',
          },
        },
      },
      {
        name: 'Archery',
        source: 'PHB',
        page: 1,
        entries: {
          e: [
            'You gain a +2 bonus to attack rolls you make with ranged weapons.',
          ],
        },
      },
      {
        name: 'Blind Fighting',
        source: 'TCE',
        page: 41,
        entries: {
          e: [
            "You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
          ],
        },
      },
      {
        name: 'Defense',
        source: 'PHB',
        page: 1,
        entries: {
          e: ['While you are wearing armor, you gain a +1 bonus to AC.'],
        },
      },
      {
        name: 'Dueling',
        source: 'PHB',
        page: 1,
        entries: {
          e: [
            'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.',
          ],
        },
      },
      {
        name: 'Great Weapon Fighting',
        source: 'PHB',
        page: 1,
        entries: {
          e: [
            'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.',
          ],
        },
      },
      {
        name: 'Interception',
        source: 'TCE',
        page: 41,
        entries: {
          e: [
            'When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.',
          ],
        },
      },
      {
        name: 'Protection',
        source: 'PHB',
        page: 1,
        entries: {
          e: [
            'When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.',
          ],
        },
      },
      {
        name: 'Superior Technique',
        source: 'TCE',
        page: 41,
        entries: {
          e: [
            "You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
            'You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.',
          ],
        },
        options: {
          choose: {
            count: 1,
            type: 'maneuver',
            from: 'fighter',
          },
        },
      },
      {
        name: 'Thrown Weapon Fighting',
        source: 'TCE',
        page: 42,
        entries: {
          e: [
            'You can draw a weapon that has the thrown property as part of the attack you make with the weapon.',
            'In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.',
          ],
        },
      },
      {
        name: 'Two-Weapon Fighting',
        source: 'PHB',
        page: 1,
        entries: {
          e: [
            'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.',
          ],
        },
      },
      {
        name: 'Unarmed Fighting',
        source: 'TCE',
        page: 42,
        entries: {
          e: [
            "Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you aren't wielding any weapons or a shield when you make the attack roll, the d6 becomes a d8.",
            'At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you.',
          ],
        },
      },
    ])
  )
