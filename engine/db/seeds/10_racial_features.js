const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    //Deletes ALL existing entries
    knex('racial_features')
        .del()
        .then(() => (
            knex('racial_features').insert([
                {
                  "id": uuidv4(),
                  "name": "Talons",
                  "description": "You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit."
                },
                {
                  "id": uuidv4(),
                  "name": "Flight",
                  "description": "You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor."
                },
                {
                  "id": uuidv4(),
                  "name": "Darkvision",
                  "description": 60
                },
                {
                  "id": uuidv4(),
                  "name": "Celestial Resistance",
                  "description": "You have resistance to necrotic damage and radiant damage."
                },
                {
                  "id": uuidv4(),
                  "name": "Healing Hands",
                  "description": "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can’t use it again until you finish a long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Lightbearer",
                  "description": "You know the light cantrip. Charisma is your spellcasting ability for it."
                },
                {
                  "id": uuidv4(),
                  "name": "Long-Limbed",
                  "description": "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal."
                },
                {
                  "id": uuidv4(),
                  "name": "Powerful Build",
                  "description": "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
                },
                {
                  "id": uuidv4(),
                  "name": "Sneaky",
                  "description": "You are proficient in the Stealth skill."
                },
                {
                  "id": uuidv4(),
                  "name": "Surprise Attack",
                  "description": "If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6 damage to it. You can use this trait only once per combat."
                },
                {
                  "id": uuidv4(),
                  "name": "Fey",
                  "description": "Your creature type is fey, rather than humanoid."
                },
                {
                  "id": uuidv4(),
                  "name": "Charge",
                  "description": "If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves."
                },
                {
                  "id": uuidv4(),
                  "name": "Hooves",
                  "description": "Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
                },
                {
                  "id": uuidv4(),
                  "name": "Equine Build",
                  "description": "You count as one size larger when determining your carrying capacity and the weight you can push or drag. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot."
                },
                {
                  "id": uuidv4(),
                  "name": "Survivor",
                  "description": "You have proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, or Survival."
                },
                {
                  "id": uuidv4(),
                  "name": "Changeling Instincts",
                  "description": "You gain proficiency with two of the following skills of your choice: Deception, Insight, Intimidation, and Persuasion."
                },
                {
                  "id": uuidv4(),
                  "name": "Shapechanger",
                  "description": "As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. You can’t duplicate the appearance of a creature you’ve never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren’t changed by this trait. You stay in the new form until you use an action to revert to your true form or until you die."
                },
                {
                  "id": uuidv4(),
                  "name": "Draconic Ancestry",
                  "description": "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
                },
                {
                  "id": uuidv4(),
                  "name": "Breath Weapon",
                  "description": "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Damage Resistance",
                  "description": "You have resistance to the damage type associated with your draconic ancestry."
                },
                {
                  "id": uuidv4(),
                  "name": "Dwarven Resilience",
                  "description": "You have advantage on saving throws against poison, and you have resistance against poison damage."
                },
                {
                  "id": uuidv4(),
                  "name": "Dwarven Combat Training",
                  "description": "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."
                },
                {
                  "id": uuidv4(),
                  "name": "Tool Proficiency",
                  "description": "You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools."
                },
                {
                  "id": uuidv4(),
                  "name": "Stonecunning",
                  "description": "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
                },
                {
                  "id": uuidv4(),
                  "name": "Keen Senses",
                  "description": "You have proficiency in the Perception skill."
                },
                {
                  "id": uuidv4(),
                  "name": "Fey Ancestry",
                  "description": "You have advantage on saving throws against being charmed, and magic can’t put you to sleep."
                },
                {
                  "id": uuidv4(),
                  "name": "Trance",
                  "description": "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                },
                {
                  "id": uuidv4(),
                  "name": "Firbolg Magic",
                  "description": "You can cast detect magic and disguise self with this trait, using Wisdom as your spellcasting ability for them. Once you cast either spell, you can’t cast it again with this trait until you finish a short or long rest. When you use this version of disguise self, you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with humans and elves."
                },
                {
                  "id": uuidv4(),
                  "name": "Hidden Step",
                  "description": "As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can’t use it again until you finish a short or long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Speech of Beast and Leaf",
                  "description": "You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them."
                },
                {
                  "id": uuidv4(),
                  "name": "Gnome Cunning",
                  "description": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
                },
                {
                  "id": uuidv4(),
                  "name": "Fury of the Small",
                  "description": "When you damage a creature with an attack or a spell and the creature’s size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait, you can’t use it again until you finish a short or long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Nimble Escape",
                  "description": "You can take the Disengage or Hide action as a bonus action on each of your turns."
                },
                {
                  "id": uuidv4(),
                  "name": "Natural Athlete",
                  "description": "You have proficiency in the Athletics skill."
                },
                {
                  "id": uuidv4(),
                  "name": "Stone's Endurance",
                  "description": "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can’t use it again until you finish a short or long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Mountain Born",
                  "description": "You’re acclimated to high altitude, including elevations above 20,000 feet. You’re also naturally adapted to cold climates, as described in chapter 5 of the Dungeon Master’s Guide."
                },
                {
                  "id": uuidv4(),
                  "name": "Skill Versatility",
                  "description": "You gain proficiency in two skills of your choice."
                },
                {
                  "id": uuidv4(),
                  "name": "Menacing",
                  "description": "You gain proficiency in the Intimidation skill."
                },
                {
                  "id": uuidv4(),
                  "name": "Relentless Endurance",
                  "description": "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Savage Attacks",
                  "description": "When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit."
                },
                {
                  "id": uuidv4(),
                  "name": "Lucky",
                  "description": "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
                },
                {
                  "id": uuidv4(),
                  "name": "Brave",
                  "description": "You have advantage on saving throws against being frightened."
                },
                {
                  "id": uuidv4(),
                  "name": "Halfling Nimbleness",
                  "description": "You can move through the space of any creature that is of a size larger than yours."
                },
                {
                  "id": uuidv4(),
                  "name": "Martial Training",
                  "description": "You are proficient with two martial weapons of your choice and with light armor."
                },
                {
                  "id": uuidv4(),
                  "name": "Saving Face",
                  "description": "Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can’t use it again until you finish a short or long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Feat",
                  "description": "You gain one feat of your choice."
                },
                {
                  "id": uuidv4(),
                  "name": "Dual Mind",
                  "description": "You have advantage on all Wisdom saving throws."
                },
                {
                  "id": uuidv4(),
                  "name": "Mental Discipline",
                  "description": "You have resistance to psychic damage."
                },
                {
                  "id": uuidv4(),
                  "name": "Mind Link",
                  "description": "You can speak telepathically to any creature you can see, provided the creature is within a number of feet of you equal to 10 times your level. You don’t need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language. When you’re using this trait to speak telepathically to a creature, you can use your action to give that creature the ability to speak telepathically with you for 1 hour or until you end this effect as an action. To use this ability, the creature must be able to see you and must be within this trait’s range. You can give this ability to only one creature at a time; giving it to a creature takes it away from another creature who has it."
                },
                {
                  "id": uuidv4(),
                  "name": "Severed From Dreams",
                  "description": "Kalashtar sleep, but they don’t connect to the plane of dreams as other creatures do. Instead, their minds draw from the memories of their otherworldly spirit while they sleep. As such, you are immune to spells and other magical effects that require you to dream, like dream, but not to spells and other magical effects that put you to sleep, like sleep."
                },
                {
                  "id": uuidv4(),
                  "name": "Expert Forgery",
                  "description": "You can duplicate other creatures’ handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects."
                },
                {
                  "id": uuidv4(),
                  "name": "Kenku Training",
                  "description": "You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand."
                },
                {
                  "id": uuidv4(),
                  "name": "Mimicry",
                  "description": "You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check. You can speak only by using your Mimicry trait."
                },
                {
                  "id": uuidv4(),
                  "name": "Grovel, Cower, and Beg",
                  "description": "As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10 feet of you that can see you. Once you use this trait, you can’t use it again until you finish a short or long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Pack Tactics",
                  "description": "You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn’t incapacitated."
                },
                {
                  "id": uuidv4(),
                  "name": "Sunlight Sensitivity",
                  "description": "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
                },
                {
                  "id": uuidv4(),
                  "name": "Swim Speed",
                  "description": 30
                },
                {
                  "id": uuidv4(),
                  "name": "Bite",
                  "description": "Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
                },
                {
                  "id": uuidv4(),
                  "name": "Cunning Artisan",
                  "description": "As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan’s tools, such as leatherworker’s tools."
                },
                {
                  "id": uuidv4(),
                  "name": "Hold Breath",
                  "description": "You can hold your breath for up to 15 minutes at a time."
                },
                {
                  "id": uuidv4(),
                  "name": "Hunter's Lore",
                  "description": "You gain proficiency with two of the following skills of your choice: Animal Handling, Nature, Perception, Stealth, and Survival."
                },
                {
                  "id": uuidv4(),
                  "name": "Natural Armor",
                  "description": "You have tough, scaly skin. When you aren’t wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield’s benefits apply as normal while you use your natural armor."
                },
                {
                  "id": uuidv4(),
                  "name": "Hungry Jaws",
                  "description": "In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1) equal to your Constitution modifier, and you can’t use this trait again until you finish a short or long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Loxodon Serenity",
                  "description": "You have advantage on saving throws against being charmed or frightened."
                },
                {
                  "id": uuidv4(),
                  "name": "Trunk",
                  "description": "You can grasp things with your trunk, and you can use it as a snorkel. It has a reach of 5 feet, and it can lift a number of pounds equal to five times your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container; grapple someone; or make an unarmed strike. Your DM might allow other simple tasks to be added to that list of options. Your trunk can’t wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell."
                },
                {
                  "id": uuidv4(),
                  "name": "Keen Smell",
                  "description": "Thanks to your sensitive trunk, you have advantage on Wisdom (Perception), Wisdom (Survival), and Intelligence (Investigation) checks that involve smell."
                },
                {
                  "id": uuidv4(),
                  "name": "Horns",
                  "description": "Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
                },
                {
                  "id": uuidv4(),
                  "name": "Goring Rus",
                  "description": "Immediately after you use the Dash action on your turn and move at least 20 feet, you can make one melee attack with your horns as a bonus action."
                },
                {
                  "id": uuidv4(),
                  "name": "Hammering Horns",
                  "description": "Immediately after you hit a creature with a melee attack as part of the Attack action on your turn, you can use a bonus action to attempt to shove that target with your horns. The target must be no more than one size larger than you and within 5 feet of you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you push it up to 10 feet away from you."
                },
                {
                  "id": uuidv4(),
                  "name": "Imposing Presence",
                  "description": "You have proficiency in one of the following skills of your choice: Intimidation or Persuasion."
                },
                {
                  "id": uuidv4(),
                  "name": "Aggressive",
                  "description": "As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started."
                },
                {
                  "id": uuidv4(),
                  "name": "Shifting",
                  "description": "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1 temporary hit point). You also gain additional benefits that depend on your shifter subrace, described below. Once you shift, you can’t do so again until you finish a short or long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Subrace",
                  "description": "The beast within shapes each shifter physically and mentally. The four major subraces of shifter include: beasthide, longtooth, swiftstride, and wildhunt. Choose a subrace for your shifter."
                },
                {
                  "id": uuidv4(),
                  "name": "Animal Enhancement: 1st Level",
                  "description": "Your body has been altered to incorporate certain animal characteristics. You choose one animal enhancement now and a second enhancement at 5th level. Choose one of the following options: Manta Glide - You have ray-like fins that you can use as wings to slow your fall or allow you to glide. When you fall and aren’t incapacitated, you can subtract up to 100 feet from the fall when calculating falling damage, and you can move up to 2 feet horizontally for every 1 foot you descend.Nimble Climber - You have a climbing speed equal to your walking speed.Underwater Adaptation - You can breathe air and water, and you have a swimming speed equal to your walking speed."
                },
                {
                  "id": uuidv4(),
                  "name": "Animal Enhancement: 5h Level",
                  "description": "Your body has been altered to incorporate certain animal characteristics. You choose one animal enhancement now and a second enhancement at 5th level. Choose one of the following options: Grappling Appendages - You have two special appendages growing alongside your arms. Choose whether they’re both claws or tentacles. As an action, you can use one of them to try to grapple a creature. Each one is also a natural weapon, which you can use to make an unarmed strike. If you hit with it, the target takes bludgeoning damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. Immediately after hitting, you can try to grapple the target as a bonus action. These appendages can’t precisely manipulate anything and can’t wield weapons, magic items, or other specialized equipment. Carapace - Your skin in places is covered by a thick shell. You gain a +1 bonus to AC when you’re not wearing heavy armor. Acid Spit - As an action, you can spray acid from glands in your mouth, targeting one creature or object you can see within 30 feet of you. The target takes 2d10 acid damage unless it succeeds on a Dexterity saving throw against a DC equal to 8 + your Constitution modifier + your proficiency bonus. This damage increases by 1d10 when you reach 11th level (3d10) and 17th level (4d10). You can use this trait a number of times equal to your Constitution modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Feline Agility",
                  "description": "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can’t use it again until you move 0 feet on one of your turns."
                },
                {
                  "id": uuidv4(),
                  "name": "Cat's Claws",
                  "description": "Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
                },
                {
                  "id": uuidv4(),
                  "name": "Cat's Talent",
                  "description": "You have proficiency in the Perception and Stealth skills."
                },
                {
                  "id": uuidv4(),
                  "name": "Hellish Resistance",
                  "description": "You have resistance to fire damage."
                },
                {
                  "id": uuidv4(),
                  "name": "Claws",
                  "description": "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
                },
                {
                  "id": uuidv4(),
                  "name": "Shell Defense",
                  "description": "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can’t increase, you have disadvantage on Dexterity saving throws, you can’t take reactions, and the only action you can take is a bonus action to emerge from your shell."
                },
                {
                  "id": uuidv4(),
                  "name": "Survival Instinct",
                  "description": "You gain proficiency in the Survival skill. Tortles have finely honed survival instincts."
                },
                {
                  "id": uuidv4(),
                  "name": "Control Air and Water",
                  "description": "A child of the sea, you can call on the magic of elemental air and water. You can cast fog cloud with this trait. Starting at 3rd level, you can cast gust of wind with it, and starting at 5th level, you can also cast wall of water with it. Once you cast a spell with this trait, you can’t cast that spell with it again until you finish a long rest. Charisma is your spellcasting ability for these spells."
                },
                {
                  "id": uuidv4(),
                  "name": "Emissary of the Sea",
                  "description": "Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return."
                },
                {
                  "id": uuidv4(),
                  "name": "Guardians of the Depths",
                  "description": "Adapted to even the most extreme ocean depths, you have resistance to cold damage, and you ignore any of the drawbacks caused by a deep, underwater environment."
                },
                {
                  "id": uuidv4(),
                  "name": "Vedalken Dispassion",
                  "description": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws."
                },
                {
                  "id": uuidv4(),
                  "name": "Tireless Precision",
                  "description": "You are proficient in one of the following skills of your choice: Arcana, History, Investigation, Medicine, Performance, or Sleight of Hand. You are also proficient with one tool of your choice. Whenever you make an ability check with the chosen skill or tool, roll a d4, and add the number rolled to the check's total."
                },
                {
                  "id": uuidv4(),
                  "name": "Partially Amphibious",
                  "description": "By absorbing oxygen through your skin, you can breathe underwater for up to 1 hour. Once you’ve reached that limit, you can’t use this trait again until you finish a long rest."
                },
                {
                  "id": uuidv4(),
                  "name": "Constructed Resilience",
                  "description": "You were created to have remarkable fortitude, represented by the following benefits: You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You don’t need to eat, drink, or breathe. You are immune to disease. You don’t need to sleep, and magic can’t put you to sleep."
                },
                {
                  "id": uuidv4(),
                  "name": "Sentry’s Rest",
                  "description": "When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn’t render you unconscious, and you can see and hear as normal."
                },
                {
                  "id": uuidv4(),
                  "name": "Integrated Protection",
                  "description": "Your body has built-in defensive layers, which can be enhanced with armor: You gain a +1 bonus to Armor Class. You can don only armor with which you have proficiency. To don armor, you must incorporate it into your body over the course of 1 hour, during which you remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way. While you live, your armor can’t be removed from your body against your will."
                },
                {
                  "id": uuidv4(),
                  "name": "Specialized Design",
                  "description": "You gain one skill proficiency and one tool proficiency of your choice."
                },
                {
                  "id": uuidv4(),
                  "name": "Innate Spellcasting",
                  "description": "You know the poison spray cantrip. You can cast animal friendship an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast suggestion with this trait. Once you cast it, you can’t do so again until you finish a long rest. Charisma is your spellcasting ability for these spells."
                },
                {
                  "id": uuidv4(),
                  "name": "Magic Resistance",
                  "description": "You have advantage on saving throws against spells and other magical effects."
                },
                {
                  "id": uuidv4(),
                  "name": "Poison Immunity",
                  "description": "You are immune to poison damage and the poisoned condition."
                }
            ])
        ))
)
        