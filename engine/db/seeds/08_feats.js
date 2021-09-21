const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    //Deletes ALL existing entries
    knex('feats')
        .del()
        .then(() => (
            knex('feats').insert([
                {
                    id: uuidv4(),
                    name: "Actor",
                    desc: "Skilled at mimicry and dramatics, you gain the following benefits:",
                    points: ["Increase your Charisma score by 1, to a maximum of 20.", "You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person.", "You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked."],
                    scores: ['Charisma']
                },
                {
                    id: uuidv4(),
                    name: "Alert",
                    desc: "Always on the lookout for danger, you gain the following benefits:",
                    points: ["You gain a +5 bonus to initiative.", "You can’t be surprised while you are conscious.", "Other creatures don’t gain advantage on attack rolls against you as a result of being hidden from you."]
                },
                {
                    id: uuidv4(),
                    name: "Athlete",
                    desc: "You have undergone extensive physical training to gain the following benefits:",
                    points: ["Increase your Strength or Dexterity score by 1, to a maximum of 20.", "When you are prone, standing up uses only 5 feet of your movement.", "Climbing doesn’t halve your speed.", "You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet."],
                    scores: ['Strength', 'Dexterity']
                },
                {
                    id: uuidv4(),
                    name: "Bountiful Luck (XGE)",
                    desc: "Your people have extraordinary luck, which you have learned to mystically lend to your companions when you see them falter. You’re not sure how you do it; you just wish it, and it happens. Surely a sign of fortune’s favor! When an ally you can see within 30 feet of you rolls a 1 on the d20 for an attack roll, an ability check, or a saving throw, you can use your reaction to let the ally reroll the die. The ally must use the new roll. When you use this ability, you can’t use your Lucky racial trait before the end of your next turn.",
                    prereq: "Halfling"
                },
                {
                    id: uuidv4(),
                    name: "Charger",
                    desc: "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature. If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack’s damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)."
                },
                {
                    id: uuidv4(),
                    name: "Crossbow Expert",
                    desc: "Thanks to extensive practice with the crossbow, you gain the following benefits:",
                    points: ["You ignore the loading quality of crossbows with which you are proficient.", "Being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls.", "When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a loaded hand crossbow you are holding."]
                },
                {
                    id: uuidv4(),
                    name: "Defensive Duelist",
                    desc: "Prerequisite: Dexterity 13 or higher. When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you. "
                },
                {
                    id: uuidv4(),
                    name: "Dragon Fear (XGE)",
                    desc: "When angered, you radiate menace. You gain the following benefits:",
                    points: ["Increase your Strength, Constitution or Charisma score by 1, up to a maximum of 20.", "Instead of exhaling destructive energy, you can expend a use of your Breath Weapon trait to roar, forcing each creature of your choice within 30 feet of you to make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier). A target automatically succeeds if it can’t hear or see you. On a failed save, a target becomes frightened of you for 1 minute. If the frightened target takes any damage, it can repeat the saving throw, ending the effect on itself on a success."],
                    prereq: "Dragonborn",
                    scores: ['Strength', 'Constitution', 'Charisma']
                },
                {
                    id: uuidv4(),
                    name: "Drow Hide Magic (XGE)",
                    desc: "You learn more of the magic typical of dark elves. You learn the detect magic spell and can cast it at will, without expending a spell slot. You also learn levitate and dispel magic, each of which you can cast once without expending a spell slot. You regain the ability to cast those two spells in this way when you finish a long rest. Charisma is your spellcasting ability for all three spells. ",
                    prereq: "Prerequisite: Elf (drow)"
                },
                {
                    id: uuidv4(),
                    name: "Dual Wielder",
                    desc: "You master fighting with two weapons, gaining the following benefits:",
                    points: ["You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.",
                        "You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren’t light.",
                        "You can draw or stow two one-handed weapons when you would normally b e able to draw or stow only one."]
                },
                {
                    id: uuidv4(),
                    name: "Dungeon Delver",
                    desc: "Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits:",
                    points: ["When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2).", "You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors.", "You have advantage on saving throws made to avoid or resist traps.", "You have resistance to the damage dealt by traps.", "You can search for traps while travelling at a normal pace, instead of only at a slow pace."]
                },
                {
                    id: uuidv4(),
                    name: "Durable",
                    desc: "Hardy and resilient, you gain the following benefits:",
                    points: ["Increase your Constitution score by 1, to a maximum of 20.", "When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."]
                },
                {
                    id: uuidv4(),
                    name: "Dwarven Fortitude (XGE)",
                    desc: "You have the blood of dwarf heroes flowing through your veins. You gain the following benefits:",
                    points: ["Increase your Constitution score by 1, up to a maximum of 20.", "Whenever you take the Dodge action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1)."],
                    prereq: "Dwarf",
                    scores: ['Constitution']
                },
                {
                    id: uuidv4(),
                    name: "Elemental Adept",
                    desc: "When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder. Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2. You can select this feat multiple times. Each time you do so, you must choose a different damage type.",
                    prereq: "The ability to cast at least one spell"
                },
                {
                    id: uuidv4(),
                    name: "Elven Accuracy (XGE)",
                    desc: "The accuracy of elves is legendary, especially that of elf archers and spellcasters. You have uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:",
                    points: ["Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.", "Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once."],
                    prereq: "Elf or half-elf",
                    scores: ['Dexterity', 'Intelligence', 'Wisdom', 'Charisma']
                },
                {
                    id: uuidv4(),
                    name: "Fade Away (XGE)",
                    desc: "Your people are Clever, with a knack for illusion magic. You have learned a magical trick for fading away when you suffer harm. You gain the following benefits:",
                    points: ["Increase your Dexterity or Intelligence score by 1, to a maximum of 20.", "Immediately after you take damage, you can use a reaction to magically become invisible until the end of your next turn or until you attack, deal damage, or force someone to make a saving throw. Once you use this ability, you can’t do so again until you finish a short or long rest."],
                    prereq: "Gnome",
                    scores: ['Dexterity', 'Intelligence']
                },
                {
                    id: uuidv4(),
                    name: "Fey Teleportation (XGE)",
                    desc: "Your study of high elven lore has unlocked fey power that few other elves possess, except your eladrin cousins. Drawing on your fey ancestry, you can momentarily stride through the Feywild to shorten your path from one place to another. You gain the following benefits:",
                    points: ["Increase your Intelligence or Charisma score by 1, to a maximum of 20.", "You learn to speak, read, and write Sylvan.", "You learn the misty step spell and can cast it once without expending a spell slot. You regain the ability to cast it in this way when you finish a short or long rest. Intelligence is your spellcasting ability for this spell."],
                    prereq: "Elf (high)",
                    scores: ['Charisma', 'Intelligence']
                },
                {
                    id: uuidv4(),
                    name: "Flames of Phlegethos (XGE)",
                    desc: "You learn to call on hellfire to serve your commands. You gain the following benefits:",
                    points: ["Increase your Intelligence or Charisma score by 1, to a maximum of 20.", "When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.", "Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don’t harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 fire damage."],
                    prereq: "Tiefling",
                    scores: ['Charisma', 'Intelligence']
                },
                {
                    id: uuidv4(),
                    name: "Grappler",
                    desc: "You’ve developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits:",
                    points: ["You have advantage on attack rolls against a creature you are grappling.", "You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends.", "Creatures that are one size larger than you don’t automatically succeed on checks to escape your grapple."],
                    prereq: "Strength 13 or higher"
                },
                {
                    id: uuidv4(),
                    name: "Great Weapon Master",
                    desc: "You’ve learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits:",
                    points: ["On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.", "Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a - 5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage."]
                },
                {
                    id: uuidv4(),
                    name: "Healer",
                    desc: "You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight. You gain the following benefits:",
                    points: ["When you use a healer’s kit to stabilize a dying creature, that creature also regains 1 hit point.", "As an action, you can spend one use of a healer’s kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature’s maximum number of Hit Dice. The creature can’t regain hit points from this feat again until it finishes a short or long rest."]
                },
                {
                    id: uuidv4(),
                    name: "Heavily Armored",
                    desc: "You have trained to master the use of heavy armor, gaining the following benefits:",
                    points: ["Increase your Strength score by 1, to a maximum of 20.", "You gain proficiency with heavy armor."],
                    prereq: "Proficiency with medium armor",
                    scores: ['Strength']
                },
                {
                    id: uuidv4(),
                    name: "Heavy Armor Master",
                    desc: "You can use your armor to deflect strikes that would kill others. You gain the following benefits:",
                    points: ["Increase your Strength score by 1, to a maximum of 20.", "While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from non magical weapons is reduced by 3."],
                    prereq: "Proficiency with heavy armor",
                    scores: ['Strength']
                },
                {
                    id: uuidv4(),
                    name: "Infernal Constitution (XGE)",
                    desc: "Fiendish blood runs strong in you, unlocking a resilience akin to that possessed by some fiends. You gain the following benefits:",
                    points: ["Increase your Constitution score by 1, to a maximum of 20.", "You have resistance to cold damage and poison damage.", "You have advantage on saving throws against being poisoned."],
                    prereq: "Tiefling",
                    scores: ['Constitution']
                },
                {
                    id: uuidv4(),
                    name: "Inspiring Leader",
                    desc: "You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can’t gain temporary hit points from this feat again until it has finished a short or long rest. ",
                    prereq: "Charisma 13 or higher"
                },
                {
                    id: uuidv4(),
                    name: "Keen Mind",
                    desc: "You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits:",
                    points: ["Increase your Intelligence score by 1, to a maximum of 20.", "You always know which way is north.", "You always know the number of hours left before the next sunrise or sunset.", "You can accurately recall anything you have seen or heard within the past month."],
                    scores: ['Intelligence']
                },
                {
                    id: uuidv4(),
                    name: "Lightly Armored",
                    desc: "You have trained to master the use of light armor, gaining the following benefits:",
                    points: ["Increase your Strength or Dexterity score by 1, to a maximum of 20.", "You gain proficiency with light armor."],
                    scores: ['Strength', 'Dexterity']
                },
                {
                    id: uuidv4(),
                    name: "Linguist",
                    desc: "You have studied languages and codes, gaining the following benefits:",
                    points: ["Increase your Intelligence score by 1, to a maximum of 20.", "You learn three languages of your choice.", "You can ably create written ciphers. Others can’t decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it."],
                    scores: ['Intelligence']
                },
                {
                    id: uuidv4(),
                    name: "Lucky",
                    desc: "You have inexplicable luck that seems to kick in at just the right moment. You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw. You can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker’s roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled. You regain your expended luck points when you finish a long rest."
                },
                {
                    id: uuidv4(),
                    name: "Mage Slayer",
                    desc: "You have practiced techniques useful in melee combat against spellcasters, gaining the following benefits:",
                    points: ["When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.", "When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration.", "You have advantage on saving throws against spells cast by creatures within 5 feet of you."]
                },
                {
                    id: uuidv4(),
                    name: "Magic Initiate",
                    desc: "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class’s spell list. In addition, choose one 1st-level spell from that same list. You learn that spell and can cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again. Your spellcasting ability for these spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid: or Intelligence for wizard. "
                },
                {
                    id: uuidv4(),
                    name: "Martial Adept",
                    desc: "You have martial training that allows you to perform special combat maneuvers. You gain the following benefits:",
                    points: ["You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver’s effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).", "If you already have superiority dice, you gain one more; otherwise, you have one superiority die, which is a d6. This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."]
                },
                {
                    id: uuidv4(),
                    name: "Medium Armor Master",
                    desc: "You have practiced moving in medium armor to gain the following benefits:",
                    points: ["Wearing medium armor doesn’t impose disadvantage on your Dexterity (Stealth) checks.", "When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher."],
                    prereq: "Proficiency with medium armor"
                },
                {
                    id: uuidv4(),
                    name: "Mobile",
                    desc: "You are exceptionally speedy and agile. You gain the following benefits:",
                    points: ["Your speed increases by 10 feet.", "When you use the Dash action, difficult terrain doesn’t cost you extra movement on that turn.", "When you make a melee attack against a creature, you don’t provoke opportunity attacks from that creature for the rest o f the turn, whether you hit or not."]
                },
                {
                    id: uuidv4(),
                    name: "Moderately Armored",
                    desc: "You have trained to master the use of medium armor and shields, gaining the following benefits:",
                    points: ["Increase your Strength or Dexterity score by 1, to a maximum of 20.", "You gain proficiency with medium armor and shields."],
                    prereq: "Proficiency with light armor",
                    scores: ['Strength', 'Dexterity']
                },
                {
                    id: uuidv4(),
                    name: "Mounted Combatant",
                    desc: "You are a dangerous foe to face while mounted. While you are mounted and aren’t incapacitated, you gain the following benefits:",
                    points: ["You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.", "You can force an attack targeted at your mount to target you instead.", "If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."]
                },
                {
                    id: uuidv4(),
                    name: "Observant",
                    desc: "Quick to notice details of your environment, you gain the following benefits:",
                    points: ["Increase your Intelligence or Wisdom score by 1, to a maximum of 20.", "If you can see a creature’s mouth while it is speaking a language you understand, you can interpret what it’s saying by reading its lips.", "You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores."],
                    scores: ['Intelligence', 'Wisdom']
                },
                {
                    id: uuidv4(),
                    name: "Orchish Fury (XGE)",
                    desc: "Your inner fury burns tirelessly. You gain the following benefits:",
                    points: ["Increase your Strength or Constitution score by 1, to a maximum of 20.", "When you hit with an attack using a simple or martial weapon, you can roll one of the weapon’s damage dice an additional time and add it as extra damage of the weapon’s damage type. Once you use this ability, you can’t use it again until you finish a short or long rest.", "Immediately after you use your Relentless Endurance trait, you can use your reaction to make one weapon attack."],
                    prereq: "Half-orc",
                    scores: ['Strength', 'Constitution']
                },
                {
                    id: uuidv4(),
                    name: "Polearm Master",
                    desc: "You can keep your enemies at bay with reach weapons. You gain the following benefits:",
                    points: ["When you take the Attack action and attack with only a glaive, halberd, or quarterstaff, you can use a bonus action to make a melee attack with the opposite end of the weapon. The weapon’s damage die for this attack is a d4, and the attack deals bludgeoning damage.", "While you are wielding a glaive, halberd, pike, or quarterstaff, other creatures provoke an opportunity attack from you when they enter your reach."]
                },
                {
                    id: uuidv4(),
                    name: "Resilient",
                    desc: "Choose one ability score. You gain the following benefits:",
                    points: ["Increase the chosen ability score by 1, to a maximum of 20.", "You gain proficiency in saving throws using the chosen ability."],
                    scores: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
                },
                {
                    id: uuidv4(),
                    name: "Ritual Caster",
                    desc: "You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them. When you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice. Choose one of the following classes: bard, cleric, druid, sorcerer, warlock, or wizard. You must choose your spells from that class’s spell list, and the spells you choose must have the ritual tag. The class you choose also determines your spellcasting ability for these spells: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard. If you come across a spell in written form, such as a magical spell scroll or a wizard’s spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell’s level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual book takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it.",
                    prereq: "Intelligence or Wisdom 13 or higher"
                },
                {
                    id: uuidv4(),
                    name: "Savage Attacker",
                    desc: "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon’s damage dice and use either total."
                },
                {
                    id: uuidv4(),
                    name: "Second Chance (XGE)",
                    desc: "Fortune favors you when someone tries to strike you. You gain the following benefits:",
                    points: ["Increase your Dexterity, Constitution or Charisma score by 1, to a maximum of 20.", "When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to reroll. Once you use this ability, you can’t use it again until you roll initiative at the start of combat or until you finish a short or long rest."],
                    prereq: "Halfling",
                    scores: ['Constitution', 'Dexterity', 'Charisma']
                },
                {
                    id: uuidv4(),
                    name: "Sentinel",
                    desc: "You have mastered techniques to take advantage of every drop in any enemy’s guard, gaining the following benefits:",
                    points: ["When you hit a creature with an opportunity attack, the creature’s speed becomes 0 for the rest of the turn.", "Creatures within 5 feet of you provoke opportunity attacks from you even if they take the Disengage action before leaving your reach.", "When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn’t have this feat), you can use your reaction to make a melee weapon attack against the attacking creature."]
                },
                {
                    id: uuidv4(),
                    name: "Sharpshooter",
                    desc: "You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits:",
                    points: ["Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.", "Your ranged weapon attacks ignore half cover and three-quarters cover.", "Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a - 5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage."]
                },
                {
                    id: uuidv4(),
                    name: "Shield Master",
                    desc: "You use shields not just for protection but also for offense. You gain the following benefits while you are wielding a shield:",
                    points: ["If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield.", "If you aren’t incapacitated, you can add your shield’s AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.", "If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect."]
                },
                {
                    id: uuidv4(),
                    name: "Skilled",
                    desc: "You gain proficiency in any combination of three skills or tools of your choice."
                },
                {
                    id: uuidv4(),
                    name: "Skulker",
                    desc: "You are expert at slinking through shadows. You gain the following benefits:",
                    points: ["You can try to hide when you are lightly obscured from the creature from which you are hiding.", "When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position.", "Dim light doesn’t impose disadvantage on your Wisdom (Perception) checks relying on sight."],
                    prereq: "Dexterity 13 or higher"
                },
                {
                    id: uuidv4(),
                    name: "Spell Sniper",
                    desc: "You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits:",
                    points: ["When you cast a spell that requires you to make an attack roll, the spell’s range is doubled.", "Your ranged spell attacks ignore half cover and three-quarters cover.", "You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."],
                    prereq: "The ability to cast at least one spell"
                },
                {
                    id: uuidv4(),
                    name: "Squat Nimbleness (XGE)",
                    desc: "You are uncommonly nimble for your race. You gain the following benefits:",
                    points: ["Increase your Strength or Dexterity score by 1, to a maximum of 20.", "Increase your walking speed by 5 feet.", "You gain proficiency in the Acrobatics or Athletics skill (your choice).", "You have advantage on any Strength (Athletics) or Dexterity (Acrobatics) check you make to escape from being grappled."],
                    prereq: "Dwarf or a Small race",
                    scores: ['Strength', 'Dexterity']
                },
                {
                    id: uuidv4(),
                    name: "Tavern Brawler",
                    desc: "Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits:",
                    points: ["Increase your Strength or Constitution score by 1, to a maximum of 20.", "You are proficient with improvised weapons and unarmed strikes.", "Your unarmed strike uses a d4 for damage.", " When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target."],
                    scores: ['Strength', 'Constitution']
                },
                {
                    id: uuidv4(),
                    name: "Tough",
                    desc: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points."
                },
                {
                    id: uuidv4(),
                    name: "War Caster",
                    desc: "You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits:",
                    points: ["You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.", "You can perform the somatic components of spells even when you have weapons or a shield in one or both hands.", "When a hostile creature’s movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature."],
                    prereq: "The ability to cast at least one spell"
                },
                {
                    id: uuidv4(),
                    name: "Weapon Master",
                    desc: "You have practiced extensively with a variety of weapons, gaining the following benefits:",
                    points: ["Increase your Strength or Dexterity score by 1, to a maximum of 20.", "You gain proficiency with four weapons of your choice."],
                    scores: ['Strength', 'Dexterity']
                },
                {
                    id: uuidv4(),
                    name: "Wood Elf Magic (XGE)",
                    desc: "You learn the magic of the primeval woods, which are revered and protected by your people. You learn one druid cantrip of your choice. You also learn the long strider and pass without trace spells, each of which you can cast once without expending a spell slot. You regain the ability to cast these two spells in this way when you finish a long rest. Wisdom is your spellcasting ability for all three spells.",
                    prereq: "Elf (wood)"
                }
            ])
        ))
)