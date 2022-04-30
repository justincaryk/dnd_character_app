const { v4: uuidv4 } = require('uuid')

exports.seed = knex =>
  //Deletes ALL existing entries
  knex('racial_features')
    .del()
    .then(() =>
      knex('racial_features').insert([
        {
          id: '21a0d6fe-44e5-47c9-902f-96204790438e',
          name: 'Talons',
          description:
            'You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit.',
        },
        {
          id: 'e63c655f-4c15-4ebb-85e5-2e08154af09b',
          name: 'Flight',
          description:
            'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
        },
        {
          id: '89514aaf-9125-4583-b1a2-585834ba946b',
          name: 'Darkvision',
          description: '60',
        },
        {
          id: '81ac1930-0fb5-4324-b29b-1f461558f3d0',
          name: 'Celestial Resistance',
          description:
            'You have resistance to necrotic damage and radiant damage.',
        },
        {
          id: 'cc3f9f6e-7d51-4592-86c1-3f0eb80512a3',
          name: 'Healing Hands',
          description:
            'As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can’t use it again until you finish a long rest.',
        },
        {
          id: 'bc377fa4-7c38-4f3e-8f07-f9fbaa532bcd',
          name: 'Lightbearer',
          description:
            'You know the light cantrip. Charisma is your spellcasting ability for it.',
        },
        {
          id: '8cb75e52-c614-4f29-bde2-9e7f4bd20879',
          name: 'Long-Limbed',
          description:
            'When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.',
        },
        {
          id: '435ed777-165c-41f2-8cc8-23d1c733769a',
          name: 'Powerful Build',
          description:
            'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
        },
        {
          id: '96516874-b23e-4969-8dfa-ffdab89897d7',
          name: 'Sneaky',
          description: 'You are proficient in the Stealth skill.',
        },
        {
          id: 'd4630a33-449d-41c7-b6a4-d3bbb792cc80',
          name: 'Surprise Attack',
          description:
            'If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6 damage to it. You can use this trait only once per combat.',
        },
        {
          id: '127301e3-6e8b-4df1-9864-00e71efb5515',
          name: 'Fey',
          description: 'Your creature type is fey, rather than humanoid.',
        },
        {
          id: 'a015f688-1918-42cd-b636-708996d83e65',
          name: 'Charge',
          description:
            'If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.',
        },
        {
          id: '2a9ffc2f-d873-468c-9328-94939acc5a87',
          name: 'Hooves',
          description:
            'Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        },
        {
          id: 'af9d8cee-faab-4126-8742-b45128236816',
          name: 'Equine Build',
          description:
            'You count as one size larger when determining your carrying capacity and the weight you can push or drag. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot.',
        },
        {
          id: '51251193-8816-4dc6-bf8a-2bf97ac8b6c4',
          name: 'Survivor',
          description:
            'You have proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, or Survival.',
        },
        {
          id: '69efb5c4-7e07-4c9d-b54c-8affc5c026ec',
          name: 'Changeling Instincts',
          description:
            'You gain proficiency with two of the following skills of your choice: Deception, Insight, Intimidation, and Persuasion.',
        },
        {
          id: '4f08b71e-f4a9-4339-8eaa-33a9e414ffdd',
          name: 'Shapechanger',
          description:
            'As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. You can’t duplicate the appearance of a creature you’ve never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren’t changed by this trait. You stay in the new form until you use an action to revert to your true form or until you die.',
        },
        {
          id: 'd097ed5e-fe99-4f7f-a1c6-524feab28943',
          name: 'Draconic Ancestry',
          description:
            'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.',
        },
        {
          id: '72d5715f-ea14-4666-9116-24551ebd7c05',
          name: 'Breath Weapon',
          description:
            'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.',
        },
        {
          id: '621419d9-4fcb-4c16-9115-09442fcf242c',
          name: 'Damage Resistance',
          description:
            'You have resistance to the damage type associated with your draconic ancestry.',
        },
        {
          id: '89f4d61c-c2e9-4354-b33e-6db0da0c567b',
          name: 'Dwarven Resilience',
          description:
            'You have advantage on saving throws against poison, and you have resistance against poison damage.',
        },
        {
          id: 'd71486a1-501f-46e1-a5e6-8fc74966d56c',
          name: 'Dwarven Combat Training',
          description:
            'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.',
        },
        {
          id: '15602812-c8d7-454b-9b9b-d780c0a9bdec',
          name: 'Tool Proficiency',
          description:
            'You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.',
        },
        {
          id: '6fa2b4a5-4f62-4d1e-b37a-6cf93d44fe13',
          name: 'Stonecunning',
          description:
            'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
        },
        {
          id: 'b742a910-d941-4309-9570-f7053bc51c7c',
          name: 'Keen Senses',
          description: 'You have proficiency in the Perception skill.',
        },
        {
          id: 'e28cf224-7ab4-4f27-bda3-4410ff770484',
          name: 'Fey Ancestry',
          description:
            'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.',
        },
        {
          id: '82362344-b33b-4938-ba3f-86b775c8bfb2',
          name: 'Trance',
          description:
            'Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.',
        },
        {
          id: '1d1c02a1-b4c9-4b32-9b0c-966f7521ead5',
          name: 'Firbolg Magic',
          description:
            'You can cast detect magic and disguise self with this trait, using Wisdom as your spellcasting ability for them. Once you cast either spell, you can’t cast it again with this trait until you finish a short or long rest. When you use this version of disguise self, you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with humans and elves.',
        },
        {
          id: '6f951431-e80e-46dd-a186-0884c56cf647',
          name: 'Hidden Step',
          description:
            'As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can’t use it again until you finish a short or long rest.',
        },
        {
          id: 'bb7ffedb-d785-456e-b4af-9aca5f4ed294',
          name: 'Speech of Beast and Leaf',
          description:
            'You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.',
        },
        {
          id: '2f1f7d0d-7e05-4589-9942-5a5d47302c90',
          name: 'Gnome Cunning',
          description:
            'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
        },
        {
          id: '7ca9340a-14af-4790-ab96-c866f9ac988e',
          name: 'Fury of the Small',
          description:
            'When you damage a creature with an attack or a spell and the creature’s size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait, you can’t use it again until you finish a short or long rest.',
        },
        {
          id: 'd97f6cdc-5b95-43b3-b65b-66a1139cfa70',
          name: 'Nimble Escape',
          description:
            'You can take the Disengage or Hide action as a bonus action on each of your turns.',
        },
        {
          id: '0f619f99-69d3-4662-bc78-c60c65a941ab',
          name: 'Natural Athlete',
          description: 'You have proficiency in the Athletics skill.',
        },
        {
          id: '378af3e2-2398-4a50-b18f-53be6e951985',
          name: "Stone's Endurance",
          description:
            'You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can’t use it again until you finish a short or long rest.',
        },
        {
          id: 'ec9ea04d-d86d-468b-a879-ef191c401d5e',
          name: 'Mountain Born',
          description:
            'You’re acclimated to high altitude, including elevations above 20,000 feet. You’re also naturally adapted to cold climates, as described in chapter 5 of the Dungeon Master’s Guide.',
        },
        {
          id: '0e421755-9c06-45fd-8f88-292cc47b40cd',
          name: 'Skill Versatility',
          description: 'You gain proficiency in two skills of your choice.',
        },
        {
          id: '375fcffc-fb4d-4c46-ae6c-26ad8629aed6',
          name: 'Menacing',
          description: 'You gain proficiency in the Intimidation skill.',
        },
        {
          id: '0a7e96ca-f0ec-4216-9507-cbf26dd929e1',
          name: 'Relentless Endurance',
          description:
            'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.',
        },
        {
          id: 'f72ca66c-bc63-49cb-8ae6-ad6ab1cf1f43',
          name: 'Savage Attacks',
          description:
            'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.',
        },
        {
          id: '5f995af6-5e94-404b-9088-f71e69e4dd34',
          name: 'Lucky',
          description:
            'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
        },
        {
          id: '83932fd7-4a91-433d-a0c8-1dd1a90cca72',
          name: 'Brave',
          description:
            'You have advantage on saving throws against being frightened.',
        },
        {
          id: 'df94813e-b098-42fa-ae06-d30684d190e4',
          name: 'Halfling Nimbleness',
          description:
            'You can move through the space of any creature that is of a size larger than yours.',
        },
        {
          id: 'e7a8aec5-63e0-4fff-9c1b-e1147db7a165',
          name: 'Martial Training',
          description:
            'You are proficient with two martial weapons of your choice and with light armor.',
        },
        {
          id: 'da3ab4db-2cf9-44e0-9904-e27a0f204277',
          name: 'Saving Face',
          description:
            'Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can’t use it again until you finish a short or long rest.',
        },
        {
          id: '935f510f-8177-4a72-b8e2-51d3292541cd',
          name: 'Feat',
          description: 'You gain one feat of your choice.',
        },
        {
          id: '041681a7-b60d-4d37-94ba-51a996391a0a',
          name: 'Dual Mind',
          description: 'You have advantage on all Wisdom saving throws.',
        },
        {
          id: '124563d0-4f57-48a4-aaeb-6c648419da85',
          name: 'Mental Discipline',
          description: 'You have resistance to psychic damage.',
        },
        {
          id: '593de6a7-3a21-4d9c-93a0-78f9d8871979',
          name: 'Mind Link',
          description:
            'You can speak telepathically to any creature you can see, provided the creature is within a number of feet of you equal to 10 times your level. You don’t need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language. When you’re using this trait to speak telepathically to a creature, you can use your action to give that creature the ability to speak telepathically with you for 1 hour or until you end this effect as an action. To use this ability, the creature must be able to see you and must be within this trait’s range. You can give this ability to only one creature at a time; giving it to a creature takes it away from another creature who has it.',
        },
        {
          id: '33e9dd42-027a-41d2-820b-c64eb9e5d63a',
          name: 'Severed From Dreams',
          description:
            'Kalashtar sleep, but they don’t connect to the plane of dreams as other creatures do. Instead, their minds draw from the memories of their otherworldly spirit while they sleep. As such, you are immune to spells and other magical effects that require you to dream, like dream, but not to spells and other magical effects that put you to sleep, like sleep.',
        },
        {
          id: '2f4852a0-09a2-4cee-96b9-580e27e48f75',
          name: 'Expert Forgery',
          description:
            'You can duplicate other creatures’ handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects.',
        },
        {
          id: '3f581cb4-539a-4b2f-8cd1-43d41740fbaf',
          name: 'Kenku Training',
          description:
            'You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.',
        },
        {
          id: '9ecc5fb3-3ff9-45b0-90ad-65bc92121465',
          name: 'Mimicry',
          description:
            'You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check. You can speak only by using your Mimicry trait.',
        },
        {
          id: '404e114a-13b6-4c1b-899f-19af93ba8717',
          name: 'Grovel, Cower, and Beg',
          description:
            'As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10 feet of you that can see you. Once you use this trait, you can’t use it again until you finish a short or long rest.',
        },
        {
          id: '57e93bdb-282e-4a68-9287-c46f17826f24',
          name: 'Pack Tactics',
          description:
            'You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn’t incapacitated.',
        },
        {
          id: '0d12dc49-cda4-4683-a0d0-744233c45121',
          name: 'Sunlight Sensitivity',
          description:
            'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.',
        },
        {
          id: '385c995d-58b7-40bc-9a26-0988605a6fb2',
          name: 'Swim Speed',
          description: '30',
        },
        {
          id: '4c94a72a-4513-498f-9363-94b03fa72b22',
          name: 'Bite',
          description:
            'Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        },
        {
          id: 'e3552101-6da8-4433-bf7d-f590f1b59422',
          name: 'Cunning Artisan',
          description:
            'As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan’s tools, such as leatherworker’s tools.',
        },
        {
          id: '1aa886d4-d005-4ec7-93fd-b70cb494dc8e',
          name: 'Hold Breath',
          description:
            'You can hold your breath for up to 15 minutes at a time.',
        },
        {
          id: '59bb6cd9-a097-4453-86f3-a4b0ff29526d',
          name: "Hunter's Lore",
          description:
            'You gain proficiency with two of the following skills of your choice: Animal Handling, Nature, Perception, Stealth, and Survival.',
        },
        {
          id: 'af837444-0de4-4224-8aeb-488e7436fbe0',
          name: 'Natural Armor',
          description:
            'You have tough, scaly skin. When you aren’t wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield’s benefits apply as normal while you use your natural armor.',
        },
        {
          id: 'd1fdb06a-8796-4c42-8308-b2255a59cb2b',
          name: 'Hungry Jaws',
          description:
            'In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1) equal to your Constitution modifier, and you can’t use this trait again until you finish a short or long rest.',
        },
        {
          id: '488e0210-9fc6-46cb-abca-8c25075c2d25',
          name: 'Loxodon Serenity',
          description:
            'You have advantage on saving throws against being charmed or frightened.',
        },
        {
          id: '246174a1-3c1d-43e9-8e86-000222713b7a',
          name: 'Guardians of the Depths',
          description:
            'Adapted to even the most extreme ocean depths, you have resistance to cold damage, and you ignore any of the drawbacks caused by a deep, underwater environment.',
        },
        {
          id: '6c9d9b55-f097-42d7-ac11-2b7eecdc8b6b',
          name: 'Vedalken Dispassion',
          description:
            'You have advantage on all Intelligence, Wisdom, and Charisma saving throws.',
        },
        {
          id: 'c513f164-16eb-4bfe-aa14-37dee25c43a8',
          name: 'Trunk',
          description:
            'You can grasp things with your trunk, and you can use it as a snorkel. It has a reach of 5 feet, and it can lift a number of pounds equal to five times your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container; grapple someone; or make an unarmed strike. Your DM might allow other simple tasks to be added to that list of options. Your trunk can’t wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell.',
        },
        {
          id: '6c0b59b7-d80f-44b0-a3d8-e5562ca66568',
          name: 'Keen Smell',
          description:
            'Thanks to your sensitive trunk, you have advantage on Wisdom (Perception), Wisdom (Survival), and Intelligence (Investigation) checks that involve smell.',
        },
        {
          id: '5e366898-4abb-41da-aedd-1edbe6a49929',
          name: 'Horns',
          description:
            'Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        },
        {
          id: '2aaf6363-91bd-4f06-ae7d-ea73a2066a08',
          name: 'Goring Rush',
          description:
            'Immediately after you use the Dash action on your turn and move at least 20 feet, you can make one melee attack with your horns as a bonus action.',
        },
        {
          id: 'a6c45bec-b9e6-453a-9462-ecc24d21d7e1',
          name: 'Hammering Horns',
          description:
            'Immediately after you hit a creature with a melee attack as part of the Attack action on your turn, you can use a bonus action to attempt to shove that target with your horns. The target must be no more than one size larger than you and within 5 feet of you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you push it up to 10 feet away from you.',
        },
        {
          id: '1cca014c-f43d-4f14-80c8-58d7bd8634d7',
          name: 'Imposing Presence',
          description:
            'You have proficiency in one of the following skills of your choice: Intimidation or Persuasion.',
        },
        {
          id: '7983e9b8-9b60-4d1e-a12f-6fc6d8015ddf',
          name: 'Aggressive',
          description:
            'As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.',
        },
        {
          id: 'e52477b4-05d5-43fc-bcac-6d81d77ff33c',
          name: 'Shifting',
          description:
            'As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1 temporary hit point). You also gain additional benefits that depend on your shifter subrace, described below. Once you shift, you can’t do so again until you finish a short or long rest.',
        },
        {
          id: '63b5b71b-6a4f-4e8b-92be-3bee918a1c63',
          name: 'Subrace',
          description:
            'The beast within shapes each shifter physically and mentally. The four major subraces of shifter include: beasthide, longtooth, swiftstride, and wildhunt. Choose a subrace for your shifter.',
        },
        {
          id: 'e223839f-dca0-4937-b07e-2e064942411e',
          name: 'Animal Enhancement: 1st Level',
          description:
            'Your body has been altered to incorporate certain animal characteristics. You choose one animal enhancement now and a second enhancement at 5th level. Choose one of the following options: Manta Glide - You have ray-like fins that you can use as wings to slow your fall or allow you to glide. When you fall and aren’t incapacitated, you can subtract up to 100 feet from the fall when calculating falling damage, and you can move up to 2 feet horizontally for every 1 foot you descend.Nimble Climber - You have a climbing speed equal to your walking speed.Underwater Adaptation - You can breathe air and water, and you have a swimming speed equal to your walking speed.',
        },
        {
          id: '10afb6ef-1de2-48cf-a49a-427737c0db40',
          name: 'Animal Enhancement: 5h Level',
          description:
            'Your body has been altered to incorporate certain animal characteristics. You choose one animal enhancement now and a second enhancement at 5th level. Choose one of the following options: Grappling Appendages - You have two special appendages growing alongside your arms. Choose whether they’re both claws or tentacles. As an action, you can use one of them to try to grapple a creature. Each one is also a natural weapon, which you can use to make an unarmed strike. If you hit with it, the target takes bludgeoning damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. Immediately after hitting, you can try to grapple the target as a bonus action. These appendages can’t precisely manipulate anything and can’t wield weapons, magic items, or other specialized equipment. Carapace - Your skin in places is covered by a thick shell. You gain a +1 bonus to AC when you’re not wearing heavy armor. Acid Spit - As an action, you can spray acid from glands in your mouth, targeting one creature or object you can see within 30 feet of you. The target takes 2d10 acid damage unless it succeeds on a Dexterity saving throw against a DC equal to 8 + your Constitution modifier + your proficiency bonus. This damage increases by 1d10 when you reach 11th level (3d10) and 17th level (4d10). You can use this trait a number of times equal to your Constitution modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.',
        },
        {
          id: '90721973-05c5-41d5-bebb-15d375e268c6',
          name: 'Feline Agility',
          description:
            'Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can’t use it again until you move 0 feet on one of your turns.',
        },
        {
          id: '51ecc7bd-aeee-4d4f-b047-b9c5605cd94d',
          name: "Cat's Claws",
          description:
            'Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        },
        {
          id: 'ed67ba2d-248c-4b2a-8711-10b166005e0e',
          name: "Cat's Talent",
          description:
            'You have proficiency in the Perception and Stealth skills.',
        },
        {
          id: '28a1244f-854b-47e1-adfa-2fe1bef64cc0',
          name: 'Hellish Resistance',
          description: 'You have resistance to fire damage.',
        },
        {
          id: '3bc67749-b546-4b85-8492-0c0317aaf931',
          name: 'Claws',
          description:
            'Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        },
        {
          id: 'f9770871-9a65-40da-b9fe-73996c7a7a0f',
          name: 'Shell Defense',
          description:
            'You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can’t increase, you have disadvantage on Dexterity saving throws, you can’t take reactions, and the only action you can take is a bonus action to emerge from your shell.',
        },
        {
          id: 'b630f3a0-4571-431f-b888-33a9d4d0a972',
          name: 'Survival Instinct',
          description:
            'You gain proficiency in the Survival skill. Tortles have finely honed survival instincts.',
        },
        {
          id: 'b7f3a3b9-7f50-474e-86d0-06a9fddf86b8',
          name: 'Control Air and Water',
          description:
            'A child of the sea, you can call on the magic of elemental air and water. You can cast fog cloud with this trait. Starting at 3rd level, you can cast gust of wind with it, and starting at 5th level, you can also cast wall of water with it. Once you cast a spell with this trait, you can’t cast that spell with it again until you finish a long rest. Charisma is your spellcasting ability for these spells.',
        },
        {
          id: '64493da8-d844-4751-a526-9df965671665',
          name: 'Emissary of the Sea',
          description:
            'Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return.',
        },
        {
          id: '71062cce-cbfd-4d08-ab81-0771602b6e33',
          name: 'Tireless Precision',
          description:
            "You are proficient in one of the following skills of your choice: Arcana, History, Investigation, Medicine, Performance, or Sleight of Hand. You are also proficient with one tool of your choice. Whenever you make an ability check with the chosen skill or tool, roll a d4, and add the number rolled to the check's total.",
        },
        {
          id: '58285e41-b1e0-4f0d-b589-429f1541c8a5',
          name: 'Partially Amphibious',
          description:
            'By absorbing oxygen through your skin, you can breathe underwater for up to 1 hour. Once you’ve reached that limit, you can’t use this trait again until you finish a long rest.',
        },
        {
          id: '9367bf37-ec73-4856-8609-ad6771a4230b',
          name: 'Constructed Resilience',
          description:
            'You were created to have remarkable fortitude, represented by the following benefits: You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You don’t need to eat, drink, or breathe. You are immune to disease. You don’t need to sleep, and magic can’t put you to sleep.',
        },
        {
          id: '621fdb8f-bb41-4db9-a505-a0ccaed3db55',
          name: 'Sentry’s Rest',
          description:
            'When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn’t render you unconscious, and you can see and hear as normal.',
        },
        {
          id: 'ab56c7d0-9d13-46a8-9232-548c2ec5befb',
          name: 'Integrated Protection',
          description:
            'Your body has built-in defensive layers, which can be enhanced with armor: You gain a +1 bonus to Armor Class. You can don only armor with which you have proficiency. To don armor, you must incorporate it into your body over the course of 1 hour, during which you remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way. While you live, your armor can’t be removed from your body against your will.',
        },
        {
          id: '63f4d94a-3d41-4a5c-9497-ed57eced48cf',
          name: 'Specialized Design',
          description:
            'You gain one skill proficiency and one tool proficiency of your choice.',
        },
        {
          id: 'f427421f-8d76-44fe-8b69-3a0026641f1e',
          name: 'Innate Spellcasting',
          description:
            'You know the poison spray cantrip. You can cast animal friendship an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast suggestion with this trait. Once you cast it, you can’t do so again until you finish a long rest. Charisma is your spellcasting ability for these spells.',
        },
        {
          id: 'fab5f7df-a99a-4f12-86ff-8f371f407931',
          name: 'Magic Resistance',
          description:
            'You have advantage on saving throws against spells and other magical effects.',
        },
        {
          id: '948afcf9-046e-4864-a1fe-af7e6b85503b',
          name: 'Poison Immunity',
          description:
            'You are immune to poison damage and the poisoned condition.',
        },
        {
          id: '0ae5fbb2-9ba9-47f5-84b9-a46c700e088c',
          name: 'Necrotic Shroud',
          description:
            'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant you transform, other creatures within 10 feet of you that can see you must each succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level. Once you use this trait, you can’t use it again until you finish a long rest.',
        },
        {
          id: 'cdbbdb4f-7904-4f98-9c96-b70f47031262',
          name: 'Radiant Soul',
          description:
            'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can’t use it again until you finish a long rest.',
        },
        {
          id: '401f3662-5e14-4807-8b00-123f394c75e7',
          name: 'Radiant Consumption',
          description:
            'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can’t use it again until you finish a long rest.',
        },
        {
          id: '099590de-e0ac-4eb1-ac7f-55c870fcfb68',
          name: 'Celestial Legacy',
          description:
            'You know the light cantrip. Once you reach 3rd level, you can cast the lesser restoration spell once with this trait, and you regain the ability to do so when you finish a long rest. Once you reach 5th level, you can cast the daylight spell once with this trait as a 3rd-level spell, and you regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
        },
        {
          id: 'd7328166-8904-4d32-b903-6863780fb5b3',
          name: 'Superior Darkvision',
          description: '120',
        },
        {
          id: 'f8927d61-73c8-49fa-aebf-43a0c96c2635',
          name: 'Extra Language',
          description: 'You can speak, read, and write Undercommon.',
        },
        {
          id: 'a9040021-b138-4c68-9344-419368dfc6d9',
          name: 'Duergar Resilience',
          description:
            'You have advantage on saving throws against illusions and against being charmed or paralyzed.',
        },
        {
          id: '31cb4b93-db8c-43f6-8d6c-4c9916cb0056',
          name: 'Duergar Magic',
          description:
            'When you reach 3rd level, you can cast the enlarge/reduce spell on yourself once with this trait, using only the spell’s enlarge option. When you reach 5th level, you can cast the invisibility spell on yourself once with this trait. You don’t need material components for either spell, and you can’t cast them while you’re in direct sunlight, although sunlight has no effect on them once cast. You regain the ability to cast these spells with this trait when you finish a long rest. Intelligence is your spellcasting ability for these spells.',
        },
        {
          id: 'd8ecb045-8c51-4266-9d5b-299543cbc979',
          name: 'Dwarf Toughness',
          description:
            'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.',
        },
        {
          id: 'cd124564-a8fb-4c88-b2ab-5fd77daff03a',
          name: 'Dwarven Armor Training',
          description: 'You have proficiency with light and medium armor.',
        },
        {
          id: 'eafe5bfe-b9cb-427e-bbd2-7dcecaa785af',
          name: 'Drow Magic',
          description:
            'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
        },
        {
          id: 'ba33a067-84a5-4c62-84af-b30f29a1b76c',
          name: 'Drow Weapon Training',
          description:
            'You have proficiency with rapiers, shortswords, and hand crossbows.',
        },
        {
          id: 'a80add10-66cd-4f9d-bea5-9d4fe8626760',
          name: 'Fey Step: Autumn',
          description:
            'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier: Autumn. Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to it.',
        },
        {
          id: 'a4841abc-7c4b-4e5c-9332-7fa01beb44e2',
          name: 'Fey Step: Winter',
          description:
            'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier: ',
        },
        {
          id: 'eec82090-19fd-4d55-86d2-ba620fc5588f',
          name: 'Fey Step: Spring',
          description:
            'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier: ',
        },
        {
          id: '991d78bd-e768-431e-92c7-b9835c7de55f',
          name: 'Fey Step: Summer',
          description:
            'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier: ',
        },
        {
          id: '863a17f9-7129-4dce-ada9-c2cf2bf6dd61',
          name: 'Elf Weapon Training',
          description:
            'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
        },
        {
          id: '23c98fca-81f6-4317-9801-d0014a7ce22a',
          name: 'Cantrip',
          description:
            'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.',
        },
        {
          id: 'a3fd6ae4-6fa4-42eb-934c-f73b170d0fd4',
          name: 'Sea Elf Training',
          description:
            'You have proficiency with the spear, trident, light crossbow, and net.',
        },
        {
          id: '2e9e2911-6bdb-4f68-b659-d3deead9a26c',
          name: 'Child of the Sea',
          description:
            'You have a swimming speed of 30 feet, and you can breathe air and water.',
        },
        {
          id: 'f4d3b1f4-33dc-4d66-a13d-41a1e9617231',
          name: 'Friend of the Sea',
          description:
            'Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.',
        },
        {
          id: '0690abf0-f493-4a96-bcd8-430f2a5e41aa',
          name: 'Languages',
          description: 'You can speak, read, and write Aquan.',
        },
        {
          id: 'c1700616-b49a-4c81-9169-ee209fcbd288',
          name: 'Necrotic Resistance',
          description: 'You have resistance to necrotic damage.',
        },
        {
          id: 'b2292575-6df4-4613-8ffb-ec740fe00768',
          name: 'Blessing of the Raven Queen',
          description:
            'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a long rest. Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.',
        },
        {
          id: '4c3f13dd-b7d0-4ce4-837b-f850325b994b',
          name: 'Fleet of Foot',
          description: 'Your base walking speed increases to 35 feet.',
        },
        {
          id: 'cf00e974-301e-4839-bd75-4067b4168451',
          name: 'Mask of the Wild',
          description:
            'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.',
        },
        {
          id: 'c0a009ce-db31-460f-ba64-c7bcdf19017e',
          name: 'Valenar Elf',
          description:
            'A Valenar elf gains proficiency with the scimitar, double scimitar, longbow, and shortbow.',
        },
        {
          id: '422a8c9e-f06b-49e5-a528-9d0f1b52a96b',
          name: 'Unending Breath',
          description:
            'You can hold your breath indefinitely while you’re not incapacitated.',
        },
        {
          id: '3f65c9ee-f5f8-4ae2-94d6-0b6d178f5b38',
          name: 'Mingle with the Wind',
          description:
            'You can cast the levitate spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.',
        },
        {
          id: '7a3796c3-c84d-4779-a425-c2121ba86d35',
          name: 'Earth Walk',
          description:
            'You can move across difficult terrain made of earth or stone without expending extra movement.',
        },
        {
          id: 'ae357bbe-e004-4a3c-a83d-25c4d2135272',
          name: 'Merge with Stone',
          description:
            'You can cast the pass without trace spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.',
        },
        {
          id: '5845f54e-d7f0-4133-8992-a459f52147f7',
          name: 'Fire Resistance',
          description: 'You have resistance to fire damage.',
        },
        {
          id: 'a3a68aa5-987a-49a1-83b8-b935bbd23550',
          name: 'Reach to the Blaze',
          description:
            'You know the produce flame cantrip. Once you reach 3rd level, you can cast the burning hands spell once with this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.',
        },
        {
          id: 'e0f94fd4-01a2-4bd1-b158-477812400bc0',
          name: 'Acid Resistance',
          description: 'You have resistance to acid damage.',
        },
        {
          id: 'edfb6ee8-6402-41f4-84fd-c8fe6fe0a1f6',
          name: 'Amphibious',
          description: 'You can breathe air and water.',
        },
        {
          id: '26d0532a-38ca-47c9-b1a1-cb2b5454ddf3',
          name: 'Call to the Wave',
          description:
            'You know the shape water cantrip. When you reach 3rd level, you can cast the create or destroy water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.',
        },
        {
          id: '41822342-8b49-4e45-9c71-aece44ad9e08',
          name: 'Decadent Mastery',
          description:
            'You learn one language of your choice, and you are proficient with one skill or tool of your choice. In the timeless city of Tu’narath, githyanki have bountiful time to master odd bits of knowledge.',
        },
        {
          id: '9b1da95f-ac5b-45b1-8214-daf11a887ad9',
          name: 'Martial Prodigy',
          description:
            'You are proficient with light and medium armor and with shortswords, longswords, and greatswords.',
        },
        {
          id: 'dc785a59-1b75-41ac-90f3-73a586c02936',
          name: 'Githyanki Psionics',
          description:
            'You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait. When you reach 3rd level, you can cast the jump spell once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the misty step spell once with this trait, and you regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells. When you cast them with this trait, they don’t require components.',
        },
        {
          id: 'bb6e3c99-12a3-4907-9ed4-d04ee07c9eb2',
          name: 'Githzerai Psionics',
          description:
            'You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait. When you reach 3rd level, you can cast the shield spell once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the detect thoughts spell once with this trait, and you regain the ability to do so when you finish a long rest. Wisdom is your spellcasting ability for these spells. When you cast them with this trait, they don’t require components',
        },
        {
          id: '5f0a72c1-6c0b-487c-97f1-b9e0ad46cf6d',
          name: 'Age',
          description:
            'Deep gnomes are short-lived for gnomes. They mature at the same rate humans do and are considered full-grown adults by 25. They live 200 to 250 years, although hard toil and the dangers of the Underdark often claim them before their time.',
        },
        {
          id: '4a0efcdb-bb1c-448f-bff7-a160e2924e47',
          name: 'Stone Camouflage',
          description:
            'You have advantage on Dexterity (stealth) checks to hide in rocky terrain.',
        },
        {
          id: '317c6247-04c9-483e-84e1-025a10daec15',
          name: 'Natural Illusionist',
          description:
            'You know the minor illusion cantrip. Intelligence is your spellcasting ability for it',
        },
        {
          id: 'a977b73c-bc53-4571-bf35-2e7856466c5a',
          name: 'Speak with Small Beasts',
          description:
            'Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.',
        },
        {
          id: 'ce0fac5f-22fa-4e42-a283-d98d632a20ec',
          name: "Artificer's Lore",
          description:
            'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.',
        },
        {
          id: 'b680ecfd-3474-4f21-9daf-a51808df6857',
          name: 'Tinker',
          description:
            'You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents. Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action. Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.',
        },
        {
          id: '3dcb5062-b867-4178-90ea-d8144a8dfff5',
          name: 'Silent Speech',
          description:
            'You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.',
        },
        {
          id: 'bdc6755f-c324-4439-8cce-be2913829e83',
          name: 'Naturally Stealthy',
          description:
            'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.',
        },
        {
          id: '88506899-e171-46c1-9fb7-f1ad2b979671',
          name: 'Stout Resilience',
          description:
            'You have advantage on saving throws against poison, and you have resistance against poison damage.',
        },
        {
          id: '05c7ef27-ec98-460e-95ee-4ceef4a16537',
          name: 'Shifting Feature',
          description:
            'Whenever you shift, you gain 1d6 additional temporary hit points. While shifted, you have a +1 bonus to your Armor Class.',
        },
        {
          id: 'd2c9d99c-cefc-498f-885c-dd6743aeac2e',
          name: 'Fierce',
          description: 'You have proficiency in the Intimidation skill.',
        },
        {
          id: '104dec56-1bc1-4d05-aac5-5c3508e2c07d',
          name: 'Graceful',
          description: 'You have proficiency in the Acrobatics skill.',
        },
        {
          id: '5cf4f7c2-9a0d-413c-a393-1b3fc0f4c445',
          name: 'Natural Tracker',
          description: 'You have proficiency in the Survival skill.',
        },
        {
          id: 'e1e23543-3554-4e67-a6a4-da52cb4d4229',
          name: 'Infernal Legacy',
          description:
            'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
        },
        {
          id: '02620457-7a9a-460b-bf72-7a01506cc18b',
          name: 'Devil’s Tongue',
          description:
            'You know the vicious mockery cantrip. When you reach 3rd level, you can cast the charm person spell as a 2nd-level spell once with this trait. When you reach 5th level, you can cast the enthrall spell once with this trait. You must finish a long rest to cast these spells once again with this trait. Charisma is your spellcasting ability for them. This trait replaces the Infernal Legacy trait.',
        },
        {
          id: '8aaf5037-8bc3-45a0-8f84-cfc7de666680',
          name: 'Hellfire',
          description:
            'Once you reach 3rd level, you can cast the burning hands spell once per day as a 2nd-level spell. This trait replaces the hellish rebuke spell of the Infernal Legacy trait.',
        },
        {
          id: '77f0da99-2853-424b-9773-771fbaaaeb76',
          name: 'Winged',
          description:
            'You have bat-like wings sprouting from your shoulder blades. You have a flying speed of 30 feet while you aren’t wearing heavy armor. This trait replaces the Infernal Legacy trait.',
        },
        {
          id: '7e7601f3-6ab0-49fa-a33a-d61b48da9c4f',
          name: 'Extra Language',
          description: '1',
        },
        {
          id: '0238ce9c-ffd2-44fb-b064-a696482f794c',
          name: 'Languages',
          description: 'Undercommon',
        },
        {
          id: '9145f73a-9ac1-40b1-b768-171ac83f10ff',
          name: 'Shifting Feature',
          description:
            'While shifted, you can use your elongated fangs to make an unarmed strike as a bonus action. If you hit with your fangs, you can deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
        },
        {
          id: 'd03432b7-7788-4ce1-8d90-7864065cc939',
          name: 'Shifting Feature',
          description:
            'While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn’t provoke opportunity attacks.',
        },
        {
          id: '571457e8-e516-4e1e-957f-fe62d455f47a',
          name: 'Shifting Feature',
          description:
            'While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you, unless you’re incapacitated.',
        },
        {
          id: '2eb7e720-b763-4fe2-a830-7b807cf05a68',
          name: 'Natural Armor',
          description:
            'You have thick, leathery skin. When you aren’t wearing armor, your AC is 12 + your Constitution modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield’s benefits apply as normal while you use your natural armor.',
        },
        {
          id: 'e5d89d99-20cb-4e2a-adb3-8376f07f8458',
          name: 'Natural Armor',
          description:
            'Due to your shell and the shape of your body, you are ill-suited to wearing armor. Your shell provides ample protection, however; it gives you a base AC of 17 (your Dexterity modifier doesn’t affect this number). You gain no benefit from wearing armor, but if you are using a shield, you can apply the shield’s bonus as normal.',
        },
      ])
    )
