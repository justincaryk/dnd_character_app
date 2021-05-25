const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    //Deletes ALL existing entries
    knex('subraces')
        .del()
        .then(() => (
            knex('subraces').insert([
                {
                    "id": uuidv4(),
                    "name": "Fallen",
                    "summary": "An aasimar who was touched by dark powers as a youth or who turns to evil in early adulthood can become one of the fallen — a group of aasimar whose inner light has been replaced by shadow.",
                    "asis": {
                        "options": [
                            {
                                "Str": 1
                            }
                        ]
                    },
                    "race_id": "41851d13-cbd3-4789-848b-27252caf61b6"
                },
                {
                    "id": uuidv4(),
                    "name": "Protector",
                    "summary": "Protector aasimar are charged by the powers of good to guard the weak, to strike at evil wherever it arises, and to stand vigilant against the darkness. From a young age, a protector aasimar receives advice and directives that urge to stand against evil.",
                    "asis": {
                        "options": [
                            {
                                "Wis": 1
                            }
                        ]
                    },
                    "race_id": "41851d13-cbd3-4789-848b-27252caf61b6"
                },
                {
                    "id": uuidv4(),
                    "name": "Scourge",
                    "summary": "Scourge aasimar are imbued with a divine energy that blazes intensely within them. It feeds a powerful desire to destroy evil — a desire that is, at its best, unflinching and, at its worst, all-consuming. Many scourge aasimar wear masks to block out the world and focus on containing this power, unmasking themselves only in battle.",
                    "asis": {
                        "options": [
                            {
                                "Con": 1
                            }
                        ]
                    },
                    "race_id": "41851d13-cbd3-4789-848b-27252caf61b6"
                },
                {
                    "id": uuidv4(),
                    "name": "Variant",
                    "summary": "This aasimar variant originally appeared in the Dungeon Master's Guide as an example for creating your own races. Whereas tieflings have fiendish blood in their veins, aasimar are the descendants of celestial beings. These folk generally appear as glorious humans with lustrous hair, flawless skin, and piercing eyes. 41851d13-cbd3-4789-848b-27252caf61b6 often attempt to pass as humans in order to right wrongs and defend goodness on the Material Plane without drawing undue attention to their celestial heritage. They strive to fit into society, although they usually rise to the top, becoming revered leaders and honorable heroes.",
                    "asis": {
                        "options": [
                            {
                                "Wis": 1
                            }
                        ]
                    },
                    "race_id": "41851d13-cbd3-4789-848b-27252caf61b6"
                },
                {
                    "id": uuidv4(),
                    "name": "Gray Dwarf (Duergar)",
                    "summary": "The gray dwarves, or duergar, live deep in the Underdark. After delving deeper than any other dwarves, they were enslaved by mind flayers for eons. Although they eventually won their freedom, these grim, ashen-skinned dwarves now take slaves of their own and are as tyrannical as their former masters. Physically similar to other dwarves in some ways, duergar are wiry and lean, with black eyes and bald heads, with the males growing long, unkempt, gray beards. Duergar value toil above all else. Showing emotions other than grim determination or wrath is frowned on in their culture, but they can sometimes seem joyful when at work. They have the typical dwarven appreciation for order, tradition, and impeccable craftsmanship, but their goods are purely utilitarian, disdaining aesthetic or artistic value. Few duergar become adventurers, fewer still on the surface world, because they are a hidebound and suspicious race. Those who leave their subterranean cities are usually exiles. Check with your Dungeon Master to see if you can play a gray dwarf character. Duergar see themselves as the true manifestation of dwarven ideals, clever enough not to be taken in by the treacherous deceptions of Moradin and his false promises. Their period of enslavement and the revolt against the mind flayers led by their god, Laduguer, purged the influence of the other dwarven gods from their souls and thus made them into the superior race. Duergar have no appreciation for beauty, that ability having been erased from their minds by the mind flayers long ago and any thought of recapturing it obliterated by Moradin’s betrayal. The duergar lead bleak, grim lives devoid of happiness or satisfaction, but they see that as their defining strength — the root of duergar pride, as it were — rather than a drawback to be corrected.",
                    "asis": {
                        "options": [
                            {
                                "Con": 2
                            }
                        ]
                    },
                    "race_id": "9e03571a-0ca4-4ea9-83e0-7f80fc89ece1"
                },
                {
                    "id": uuidv4(),
                    "name": "Hill",
                    "summary": "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.",
                    "asis": {
                        "options": [
                            {
                                "Wis": 1
                            }
                        ]
                    },
                    "race_id": "9e03571a-0ca4-4ea9-83e0-7f80fc89ece1"
                },
                {
                    "id": uuidv4(),
                    "name": "Mountain",
                    "summary": "As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.",
                    "asis": {
                        "options": [
                            {
                                "Str": 2
                            }
                        ]
                    },
                    "race_id": "9e03571a-0ca4-4ea9-83e0-7f80fc89ece1"
                },
                {
                    "id": uuidv4(),
                    "name": "Dark (Drow)",
                    "summary": "Descended from an earlier subrace of elves, the drow were banished from the surface world for following the goddess Lolth down the path of evil. Now they have built their own civilization in the depths of the Underdark, patterned after the Way of Lolth. Also called dark elves, the drow have skin that resembles charcoal or obsidian, as well as stark white or pale yellow hair. They commonly have very pale eyes (so pale as to be mistaken for white) in shades of lilac, silver, pink, red, and blue. They tend to be smaller and thinner than most elves. Drow adventurers are rare. Check with your Dungeon Master to see if you can play one.",
                    "asis": {
                        "options": [
                            {
                                "Cha": 1
                            }
                        ]
                    },
                    "race_id": "c69daeee-af07-4671-ac11-ebe47eab1b77"
                },
                {
                    "id": uuidv4(),
                    "name": "Eladrin",
                    "summary": "Eladrin are elves native to the Feywild, a realm of beauty, unpredictable emotion, and boundless magic. An eladrin is associated with one of the four seasons and has coloration reminiscent of that season, which can also affect the eladrin’s mood: Autumn is the season of peace and goodwill, when summer’s harvest is shared with all. Winter is the season of contemplation and dolor, when the vibrant energy of the world slumbers. Spring is the season of cheerfulness and celebration, marked by merriment as winter’s sorrow passes. Summer is the season of boldness and aggression, a time of unfettered energy. Some eladrin remain associated with a particular season for their entire lives, whereas other eladrin transform, adopting characteristics of a new season. When finishing a long rest, any eladrin can change their season. An eladrin might choose the season that is present in the world or perhaps the season that most closely matches the eladrin’s current emotional state. For example, an eladrin might shift to autumn if filled with contentment, another eladrin could change to winter if plunged into sorrow, still another might be bursting with joy and become an eladrin of spring, and fury might cause an eladrin to change to summer. The following tables offer personality suggestions for eladrin of each season. You can roll on the tables or use them as inspiration for characteristics of your own.",
                    "asis": {
                        "options": [
                            {
                                "Cha": 1
                            }
                        ]
                    },
                    "race_id": "c69daeee-af07-4671-ac11-ebe47eab1b77"
                },
                {
                    "id": uuidv4(),
                    "name": "High Elf",
                    "summary": "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races. The sun elves of Faerûn (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-white, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.",
                    "asis": {
                        "options": [
                            {
                                "Int": 1
                            }
                        ]
                    },
                    "race_id": "c69daeee-af07-4671-ac11-ebe47eab1b77"
                },
                {
                    "id": uuidv4(),
                    "name": "Sea Elf",
                    "summary": "Sea elves fell in love with the wild beauty of the ocean in the earliest days of the multiverse. While other elves traveled from realm to realm, the sea elves navigated the deepest currents and explored the waters across a hundred worlds. Today, they live in small, hidden communities in the ocean shallows and on the Elemental Plane of Water.",
                    "asis": {
                        "options": [
                            {
                                "Con": 1
                            }
                        ]
                    },
                    "race_id": "c69daeee-af07-4671-ac11-ebe47eab1b77"
                },
                {
                    "id": uuidv4(),
                    "name": "Shadar-kai",
                    "summary": "Sworn to the Raven Queen’s service, the mysterious shadar-kai venture into the Material Plane from the Shadowfell to advance her will. Once they were fey like the rest of their elven kin, and now they exist in a strange state between life and death. Eladrin and shadar-kai are like reflections of each other: one bursting with emotion, the other nearly devoid of it.",
                    "asis": {
                        "options": [
                            {
                                "Con": 1
                            }
                        ]
                    },
                    "race_id": "c69daeee-af07-4671-ac11-ebe47eab1b77"
                },
                {
                    "id": uuidv4(),
                    "name": "Wood Elf",
                    "summary": "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerûn, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves. Wood elves’ skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.",
                    "asis": {
                        "options": [
                            {
                                "Wis": 1
                            }
                        ]
                    },
                    "race_id": "c69daeee-af07-4671-ac11-ebe47eab1b77"
                },
                {
                    "id": uuidv4(),
                    "name": "Valenor Wood Elf",
                    "summary": "Elven culture began on the distant continent of Xen’drik. Tens of thousands of years ago, the elves rose up against the giants who ruled that land. Ultimately, the elves fled from Xen’drik and settled the island nation of Aerenal. There they split into two distinct cultures: the introspective Aereni and the warlike Tairnadal. While neither of these cultures have much interest in human activities, a small number of elves have immigrated to Khorvaire over the years and have integrated with the cultures of the Five Nations. As a whole, elves are driven by tradition and respect for the past. Where humans value innovation, elves strive to perfect the techniques of their ancestors. With centuries to devote to their studies, the elves are masters of their chosen crafts; at the same time, their society has changed very little over the last five thousand years, while Khorvaire is constantly evolving. As an elf, consider your relationship with the past. Do you value the traditions of your ancestors? Or do you fear that your people are too mired in the past, and need to find a way forward? Elves of Valenar::: Your people are dedicated to the arts of war. Millenia ago, your ancestors fought an epic war against mighty giants. When they came to Khorvaire, they battled the champions of the goblin empire. The greatest heroes of those struggles live on after death, known as the patron ancestors. When you became an adult, one of the patron ancestors formed a bond with you. Now it is your duty to follow in the footsteps of your patron, living your life as they lived theirs, allowing this champion to live on through you. This is why your people constantly seek out conflict; you need to find challenges worthy of a hero. In creating a Valenar, think about your patron ancestor. Your class should reflect their class; if you’re a wizard, your ancestor was likely a legendary archmage. If you’re a ranger, was your ancestor a famous blademaster, or a stealthy hunter? Was your ancestor chivalrous or merciless? Bold or clever? Whatever their nature, it’s your duty to follow their example. Is this something you proudly embrace, or do you resist it? Each patron ancestor is tied to many Valenar: do you have a particular rival who channels the same ancestor, or one who channels a rival of your ancestor? It’s also important to think about why you are traveling with a group of player characters instead of serving in a Valenar warband. Are you driven by visions from your patron ancestor? Are you pursuing an epic quest that mirrors their legendary deeds? Do you seek vengeance for the death of a friend or ally? Or have you turned away from your people, either by choice or because of the actions of a rival?",
                    "asis": {
                        "options": [
                            {
                                "Wis": 1
                            }
                        ]
                    },
                    "race_id": "c69daeee-af07-4671-ac11-ebe47eab1b77"
                },
                {
                    "id": uuidv4(),
                    "name": "Valenor High Elf",
                    "summary": "Elven culture began on the distant continent of Xen’drik. Tens of thousands of years ago, the elves rose up against the giants who ruled that land. Ultimately, the elves fled from Xen’drik and settled the island nation of Aerenal. There they split into two distinct cultures: the introspective Aereni and the warlike Tairnadal. While neither of these cultures have much interest in human activities, a small number of elves have immigrated to Khorvaire over the years and have integrated with the cultures of the Five Nations. As a whole, elves are driven by tradition and respect for the past. Where humans value innovation, elves strive to perfect the techniques of their ancestors. With centuries to devote to their studies, the elves are masters of their chosen crafts; at the same time, their society has changed very little over the last five thousand years, while Khorvaire is constantly evolving. As an elf, consider your relationship with the past. Do you value the traditions of your ancestors? Or do you fear that your people are too mired in the past, and need to find a way forward? Elves of Valenar::: Your people are dedicated to the arts of war. Millenia ago, your ancestors fought an epic war against mighty giants. When they came to Khorvaire, they battled the champions of the goblin empire. The greatest heroes of those struggles live on after death, known as the patron ancestors. When you became an adult, one of the patron ancestors formed a bond with you. Now it is your duty to follow in the footsteps of your patron, living your life as they lived theirs, allowing this champion to live on through you. This is why your people constantly seek out conflict; you need to find challenges worthy of a hero. In creating a Valenar, think about your patron ancestor. Your class should reflect their class; if you’re a wizard, your ancestor was likely a legendary archmage. If you’re a ranger, was your ancestor a famous blademaster, or a stealthy hunter? Was your ancestor chivalrous or merciless? Bold or clever? Whatever their nature, it’s your duty to follow their example. Is this something you proudly embrace, or do you resist it? Each patron ancestor is tied to many Valenar: do you have a particular rival who channels the same ancestor, or one who channels a rival of your ancestor? It’s also important to think about why you are traveling with a group of player characters instead of serving in a Valenar warband. Are you driven by visions from your patron ancestor? Are you pursuing an epic quest that mirrors their legendary deeds? Do you seek vengeance for the death of a friend or ally? Or have you turned away from your people, either by choice or because of the actions of a rival?",
                    "asis": {
                        "options": [
                            {
                                "Int": 1
                            }
                        ]
                    },
                    "race_id": "c69daeee-af07-4671-ac11-ebe47eab1b77"
                },
                {
                    "id": uuidv4(),
                    "name": "Air",
                    "summary": "As an air genasi, you are descended from the djinn. As changeable as the weather, your moods shift from calm to wild and violent with little warning, but these storms rarely last long. Air genasi typically have light blue skin, hair, and eyes. A faint but constant breeze accompanies them, tousling the hair and stirring the clothing. Some air genasi speak with breathy voices, marked by a faint echo. A few display odd patterns in their flesh or grow crystals from their scalps.",
                    "asis": {
                        "options": [
                            {
                                "Dex": 1
                            }
                        ]
                    },
                    "race_id": "bc57ace7-cb83-42ea-a2e1-6d103a17ecfb"
                },
                {
                    "id": uuidv4(),
                    "name": "Earth",
                    "summary": "As an earth genasi, you are descended from the cruel and greedy dao, though you aren’t necessarily evil. You have inherited some measure of control over earth, reveling in superior strength and solid power. You tend to avoid rash decisions, pausing long enough to consider your options before taking action. Elemental earth manifests differently from one individual to the next. Some earth genasi always have bits of dust falling from their bodies and mud clinging to their clothes, never getting clean no matter how often they bathe. Others are as shiny and polished as gemstones, with skin tones of deep brown or black, eyes sparkling like agates. Earth genasi can also have smooth metallic flesh, dull iron skin spotted with rust, a pebbled and rough hide, or even a coating of tiny embedded crystals. The most arresting have fissures in their flesh, from which faint light shines.",
                    "asis": {
                        "options": [
                            {
                                "Str": 1
                            }
                        ]
                    },
                    "race_id": "bc57ace7-cb83-42ea-a2e1-6d103a17ecfb"
                },
                {
                    "id": uuidv4(),
                    "name": "Fire",
                    "summary": "As a fire genasi, you have inherited the volatile mood and keen mind of the efreet. You tend toward impatience and making snap judgments. Rather than hide your distinctive appearance, you exult in it. Nearly all fire genasi are feverishly hot as if burning inside, an impression reinforced by flaming red, coal- black, or ash-gray skin tones. The more human-looking have fiery red hair that writhes under extreme emotion, while more exotic specimens sport actual flames dancing on their heads. Fire genasi voices might sound like crackling flames, and their eyes flare when angered. Some are accompanied by the faint scent of brimstone.",
                    "asis": {
                        "options": [
                            {
                                "Int": 1
                            }
                        ]
                    },
                    "race_id": "bc57ace7-cb83-42ea-a2e1-6d103a17ecfb"
                },
                {
                    "id": uuidv4(),
                    "name": "Water",
                    "summary": "The lapping of waves, the spray of sea foam on the wind, the ocean depths—all of these things call to your heart. You wander freely and take pride in your independence, though others might consider you selfish. Most water genasi look as if they just finished bathing, with beads of moisture collecting on their skin and hair. They smell of fresh rain and clean water. Blue or green skin is common, and most have somewhat overlarge eyes, blue-black in color. A water genasi’s hair might float freely, swaying and waving as if underwater. Some have voices with undertones reminiscent of whale song or trickling streams.",
                    "asis": {
                        "options": [
                            {
                                "Wis": 1
                            }
                        ]
                    },
                    "race_id": "bc57ace7-cb83-42ea-a2e1-6d103a17ecfb"
                },
                {
                    "id": uuidv4(),
                    "name": "Githyanki",
                    "summary": "The brutal githyanki are trained from birth as warriors.",
                    "asis": {
                        "options": [
                            {
                                "Str": 2
                            }
                        ]
                    },
                    "race_id": "c25b67ac-7cde-4bb3-87dc-6f87af466d75"
                },
                {
                    "id": uuidv4(),
                    "name": "Githzerai",
                    "summary": "In their fortresses within Limbo, the githzerai hone their minds to a razor’s edge",
                    "asis": {
                        "options": [
                            {
                                "Wis": 2
                            }
                        ]
                    },
                    "race_id": "c25b67ac-7cde-4bb3-87dc-6f87af466d75"
                },
                {
                    "id": uuidv4(),
                    "name": "Deep Gnome",
                    "summary": "Forest gnomes and rock gnomes are the gnomes most commonly encountered in the lands of the surface world. There is another subrace of gnomes rarely seen by any surface-dweller: deep gnomes, also known as svirfneblin. Guarded, and suspicious of outsiders, svirfneblin are cunning and taciturn, but can be just as kind-hearted, loyal, and compassionate as their surface cousins.",
                    "asis": {
                        "options": [
                            {
                                "Dex": 1
                            }
                        ]
                    },
                    "race_id": "18388066-47d0-4d0e-afa9-fd431a7e2ccd"
                },
                {
                    "id": uuidv4(),
                    "name": "Forest Gnome",
                    "summary": "As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats or to mask their escape should they be detected. Forest gnomes tend to be friendly with other good-spirited woodland folk, and they regard elves and good fey as their most important allies. These gnomes also befriend small forest animals and rely on them for information about threats that might prowl their lands.",
                    "asis": {
                        "options": [
                            {
                                "Dex": 1
                            }
                        ]
                    },
                    "race_id": "18388066-47d0-4d0e-afa9-fd431a7e2ccd"
                },
                {
                    "id": uuidv4(),
                    "name": "Rock Gnome",
                    "summary": "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.",
                    "asis": {
                        "options": [
                            {
                                "Con": 1
                            }
                        ]
                    },
                    "race_id": "18388066-47d0-4d0e-afa9-fd431a7e2ccd"
                },
                {
                    "id": uuidv4(),
                    "name": "Ghostwise Halfling",
                    "summary": "Ghostwise halflings trace their ancestry back to a war among halfling tribes that sent their ancestors into flight from Luiren. Ghostwise halflings are the rarest of the hin, found only in the Chondalwood and a few other isolated forests, clustered in tight-knit clans. Many ghostwise clans select a natural landmark as the center of their territory, and members carry a piece of that landmark with them at all times. Clan warriors known as nightgliders bond with and ride giant owls as mounts. Because these folk are clannish and mistrustful of outsiders, ghostwise halfling adventurers are rare. Ask your DM if you can play a member of this subrace",
                    "asis": {
                        "options": [
                            {
                                "Wis": 1
                            }
                        ]
                    },
                    "race_id": "989fe94e-520a-4280-bd34-c03e85d917e6"
                },
                {
                    "id": uuidv4(),
                    "name": "Lightfoot Halfling",
                    "summary": "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halflings are called hairfeet or tallfellows.",
                    "asis": {
                        "options": [
                            {
                                "Cha": 1
                            }
                        ]
                    },
                    "race_id": "989fe94e-520a-4280-bd34-c03e85d917e6"
                },
                {
                    "id": uuidv4(),
                    "name": "Stout Halfling",
                    "summary": "As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.",
                    "asis": {
                        "options": [
                            {
                                "Con": 1
                            }
                        ]
                    },
                    "race_id": "989fe94e-520a-4280-bd34-c03e85d917e6"
                },
                {
                    "id": uuidv4(),
                    "name": "Beasthide",
                    "summary": "Stoic and solid, a beasthide shifter draws strength and stability from the beast within. Beasthide shifters are typically tied to the bear or the boar, but this subrace could embody any creature known for its toughness.",
                    "asis": {
                        "options": [
                            {
                                "Con": 2
                            },
                            {
                                "Str": 1
                            }
                        ]
                    },
                    "race_id": "6257bd86-a1b1-4c22-9175-4537eb87e9f2"
                },
                {
                    "id": uuidv4(),
                    "name": "Longtooth",
                    "summary": "Longtooth shifters are fierce and aggressive, but they form deep bonds with their friends. Many longtooth shifters have canine traits that become more pronounced as they shift, but they might instead draw on tigers, hyenas, or other predators.",
                    "asis": {
                        "options": [
                            {
                                "Str": 2
                            },
                            {
                                "Dex": 1
                            }
                        ]
                    },
                    "race_id": "6257bd86-a1b1-4c22-9175-4537eb87e9f2"
                },
                {
                    "id": uuidv4(),
                    "name": "Swiftstride",
                    "summary": "Swiftstride shifters are graceful and quick. Typically feline in nature, swiftstride shifters are often aloof and difficult to pin down physically or socially.",
                    "asis": {
                        "options": [
                            {
                                "Dex": 2
                            },
                            {
                                "Cha": 1
                            }
                        ]
                    },
                    "race_id": "6257bd86-a1b1-4c22-9175-4537eb87e9f2"
                },
                {
                    "id": uuidv4(),
                    "name": "Wildhunt",
                    "summary": "Wildhunt shifters are sharp and insightful. Many are constantly alert, ever wary for possible threats. Others focus on their intuition, searching within. Wildhunt shifters are excellent hunters, and they also tend to become the spiritual leaders of shifter communities.",
                    "asis": {
                        "options": [
                            {
                                "Wis": 2
                            },
                            {
                                "Dex": 1
                            }
                        ]
                    },
                    "race_id": "6257bd86-a1b1-4c22-9175-4537eb87e9f2"
                },
                {
                    "id": uuidv4(),
                    "name": "Feral Tiefling",
                    "summary": "",
                    "asis": {
                        "options": [
                            {
                                "Dex": 2
                            },
                            {
                                "Int": 1
                            }
                        ]
                    },
                    "race_id": "4efcfe6b-c391-49ea-9120-356ac9a909e1"
                },
                {
                    "id": uuidv4(),
                    "name": "Variant Tiefling",
                    "summary": "Since not all tieflings are of the blood of Asmodeus, some have traits that differ from those in the Player’s Handbook. The Dungeon Master may permit the following variants for your tiefling character, although Devil’s Tongue, Hellfire, and Winged are mutually exclusive. Appearance. Your tiefling might not look like other tieflings. Rather than having the physical characteristics described in the Player’s Handbook, choose 1d4 + 1 of the following features: small horns; fangs or sharp teeth; a forked tongue; catlike eyes; six fingers on each hand; goat-like legs; cloven hoofs; a forked tail; leathery or scaly skin; red or dark blue skin; cast no shadow or reflection; exude a smell of brimstone.",
                    "asis": {
                        "options": [
                            {
                                "Cha": 2
                            },
                            {
                                "Int": 1
                            }
                        ]
                    },
                    "race_id": "4efcfe6b-c391-49ea-9120-356ac9a909e1"
                }
            ])
        ))
)