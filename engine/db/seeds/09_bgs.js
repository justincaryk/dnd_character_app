const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    //Deletes ALL existing entries
    knex('bgs')
        .del()
        .then(() => (
            knex('bgs').insert([
                {
                  "name": "Custom Background",
                  "description": "",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 0,
                  "toolOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfSkillsGranted": 0,
                  "skillOptions": {
                    "options": [
                      []
                    ]
                  },
                  "backgroundFeature": null,
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Acolyte",
                  "description": "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power. Choose a god, a pantheon of gods, or some other quasi-divine being, and work with your DM to detail the nature of your religious service. The Gods of the Multiverse section contains a sample pantheon, from the Forgotten Realms setting. Were you a lesser functionary in a temple, raised from childhood to assist the priests in the sacred rites? Or were you a high priest who suddenly experienced a call to serve your god in a different way? Perhaps you were the leader of a small cult outside of any established temple structure, or even an occult group that served a fiendish master that you now deny.",
                  "numberOfExtraLanguages": 2,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        },
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 0,
                  "toolOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Religion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "58803af1-57d4-4aed-84c5-b7769d5d6c50",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Anthropologist",
                  "description": "You have always been fascinated by other cultures, from the most ancient and primeval lost lands to the most modern civilizations. By studying other cultures' customs, philosophies, laws, rituals, religious beliefs, languages, and art, you have learned how tribes, empires, and all forms of society in between craft their own destinies and doom. This knowledge came to you not only through books and scrolls, but also through firsthand observation – by visiting far-flung settlements and exploring local histories and customs.",
                  "numberOfExtraLanguages": 2,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        },
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 0,
                  "toolOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Religion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "adf54ce8-95d0-4796-946c-60f6a98450ff",
                  "alternateBackgroundFeature": "774054aa-3d44-404d-aa62-21a8a91f6b31",
                  "id": uuidv4()
                },
                {
                  "name": "Archaeologist",
                  "description": "An archaeologist learns about the long-lost and fallen cultures of the past by studying their remains – their bones, their ruins, their surviving masterworks, and their tombs. Those who practice archaeology travel to the far corners of the world to root through crumbled cities and lost dungeons, digging in search of artifacts that might tell the stories of monarchs and high priests, wars and cataclysms.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Cartographer's Tools",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Navigator's Tools",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "History",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Survival",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "79815824-dbff-4a52-8ff6-3ac1556fd8ae",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Black Fist Double Agent",
                  "description": "You are an informant for the Tears of Virulence who now lord over Phlan, but are also a double agent for original town guard of Phlan, the Black Fists. For the Tears you’ve been tasked with ferreting out the secrets of Phlan's criminal underworld, insurgency, and the common peoples of Phlan. In exchange for reporting on the activities of dissenters, criminals, and other rebel elements, the Tears of Virulence leave you alone to conduct your affairs in peace. In reality you work for the deposed Black Fists, sharing misinformation with the Tears of Virulence that often helps the Black Fists and other Phlan insurgents. Since the evacuation of Phlan, you are even busier today than you ever were previously, as the number of dissenters among the refugees grows daily, while you are afforded many opportunities to spy on the peoples of Mulmaster and Elventree, to the pleasure of your contact(s) within the Tears of Virulence. ",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Disguise Kit",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Artisan's Tools",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Deception",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "93e12d61-c5c0-44c8-86d6-bf2224ffa020",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Caravan Specialist",
                  "description": "You are used to life on the road. You pride yourself at having traveled every major tradeway in the Moonsea region, includ-ing the best backroads and shortcuts. When traveling these roads, you know where the best inns, campsites, and water sources are located, as well as potential locations of danger such as ambush. Having worked the roads as long as you have, you have made many aquaintences and find it easy to pick up information and rumors floating from town to town. You are skilled with beasts of burden and handling and repair-ing wagons of all kinds.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Vehicles (land)",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Animal Handling",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Survival",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "a187512f-8ecb-4ea1-8441-c11711e1a21a",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Charlatan",
                  "description": "You have always had a way with people. You know what makes them tick, you can tease out their hearts’ desires after a few minutes of conversation, and with a few leading questions you can read them like they were children’s books. It’s a useful talent, and one that you’re perfectly willing to use for your advantage. You know what people want and you deliver, or rather, you promise to deliver. Common sense should steer people away from things that sound too good to be true, but common sense seems to be in short supply when you’re around. The bottle of pink-colored liquid will surely cure that unseemly rash, this ointment — nothing more than a bit of fat with a sprinkle of silver dust — can restore youth and vigor, and there’s a bridge in the city that just happens to be for sale. These marvels sound implausible, but you make them sound like the real deal.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Disguise Kit",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Forgery kit",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Deception",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Sleight of Hand",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "32a839a5-8e6a-4fcc-8b08-9ee72ae4018d",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "City Watch",
                  "description": "You have served the community where you grew up, standing as its first line of defense against crime. You aren’t a soldier, directing your gaze outward at possible enemies. Instead, your service to your hometown was to help police its populace, protecting the citizenry from lawbreakers and malefactors of every stripe. You might have been part of the City Watch of Waterdeep, the baton-wielding police force of the City of Splendors, protecting the common folk from thieves and rowdy nobility alike. Or you might have been one of the valiant defenders of Silverymoon, a member of the Silverwatch or even one of the magic-wielding Spellguard. Perhaps you hail from Neverwinter and have served as one of its Wintershield watchmen, the newly founded branch of guards who vow to keep safe the City of Skilled Hands. Even if you’re not city-born or city-bred, this background can describe your early years as a member of law enforcement. Most settlements of any size have their own constables and police forces, and even smaller communities have sheriffs and bailiffs who stand ready to protect their community.",
                  "numberOfExtraLanguages": 2,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        },
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 0,
                  "toolOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Athletics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "427ca193-537f-488a-a548-7b3e8a166661",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Clan Crafter",
                  "description": "The Stout Folk are well known for their artisanship and the worth of their handiworks, and you have been trained in that ancient tradition. For years you labored under a dwarf master of the craft, enduring long hours and dismissive, sour-tempered treatment in order to gain the fine skills you possess today. You are most likely a dwarf, but not necessarily—particularly in the North, the shield dwarf clans learned long ago that only proud fools who are more concerned for their egos than their craft turn away promising apprentices, even those of other races. If you aren’t a dwarf, however, you have taken a solemn oath never to take on an apprentice in the craft: it is not for non-dwarves to pass on the skills of Moradin’s favored children. You would have no difficulty, however, finding a dwarf master who was willing to receive potential apprentices who came with your recommendation.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Artisan's Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "History",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "60a820f0-5a40-4564-adb3-75752ffdf7b0",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Cloistered Scholar",
                  "description": "As a child, you were inquisitive when your playmates were possessive or raucous. In your formative years, you found your way to one of Faerûn’s great institutes of learning , where you were apprenticed and taught that knowledge is a more valuable treasure than gold or gems. Now you are ready to leave your home—not to abandon it, but to quest for new lore to add to its storehouse of knowledge. The most well known of Faerûn’s fonts of knowledge is Candlekeep. The great library is always in need of workers and attendants, some of whom rise through the ranks to assume roles of greater responsibility and prominence. You might be one of Candlekeep’s own, dedicated to the curatorship of what is likely the most complete body of lore and history in all the world. Perhaps instead you were taken in by the scholars of the Vault of the Sages or the Map House in Silverymoon, and now you have struck out to increase your knowledge and to make yourself available to help those in other places who seek your expertise. You might be one of the few who aid Herald’s Holdfast, helping to catalogue and maintain records of the information that arrives daily from across Faerûn.",
                  "numberOfExtraLanguages": 2,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        },
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 0,
                  "toolOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "History",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Arcanda",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Nature",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Religion",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "d38de396-d213-4228-904f-c5fc68fae747",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Cormanthor Refugee",
                  "description": "You are one of hundreds of refugees that were driven from Hillsfar or that fled the destruction of Myth Drannor and who now shelter in hidden camps under the northern eaves of the Cormanthor Forest. If you up grew in the camps, you have never been to a settlement other than the village of Elventree. As a guest of the elves, you have learned their ways and the ways of the forest. You are also a traumatized, as residual wild magic, energies released by the fall of Thultanar upon Myth Drannor, and the constant fear of raids hunting for nonhumans to fight in Hillsfar's Arena have taken their toll on you, as they have on everyone in the camps. ",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "Elvish",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Artisan's Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Nature",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Survival",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "63b4fa20-6c67-4016-8319-8d2e6d4d31f1",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Courtier",
                  "description": "In your earlier days, you were a personage of some significance in a noble court or a bureaucratic organization. You might or might not come from an upper-class family; your talents, rather than the circumstances of your birth, could have secured you this position. You might have been one of the many functionaries, attendants, and other hangers-on in the Court of Silverymoon, or perhaps you traveled in Waterdeep’s baroque and sometimes cutthroat conglomeration of guilds, nobles, adventurers, and secret societies. You might have been one of the behind-the-scenes law-keepers or functionaries in Baldur’s Gate or Neverwinter, or you might have grown up in and around the castle of Daggerford. Even if you are no longer a full-fledged member of the group that gave you your start in life, your relationships with your former fellows can be an advantage for you and your adventuring comrades. You might undertake missions with your new companions that further the interest of the organization that gave you your start in life. In any event, the abilities that you honed while serving as a courtier will stand you in good stead as an adventurer.",
                  "numberOfExtraLanguages": 2,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        },
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 0,
                  "toolOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Persuasion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "1b080f8b-0087-4fde-a4a0-a37e122fbc14",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Criminal",
                  "description": "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Thieves' Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Deception",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Stealth",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "e0aa6891-4436-41fa-a401-6c39c713a36c",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Earthspur Miner",
                  "description": "You are a down-on your luck miner from the Earthspur Mountains who is no stranger to hardship. You have spent a great deal of time living among the dwarves, goliaths, and denizens of the Underdark that also work mines in the area. At this point, you're just as comfortable working underground as above. You know how to read a seam, dicker for supplies with the deep gnomes, party with dwarves, and find your way back to the surface afterwards. Unfortunately, you haven't struck it rich...yet. Although you've come to Mulmaster looking for work, the tall peaks and deep mines of the Earthspurs still call to you.",
                  "numberOfExtraLanguages": 2,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "Dwarvish",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Undercommon",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 0,
                  "toolOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Athletics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Survival",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "0b935238-92ec-4cc0-b5f2-4f20fbe672aa",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Entertainer",
                  "description": "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Disguise Kit",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Musical Instrument",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Acrobatics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Performance",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "679b9d85-0bfc-419a-9ecd-88070269089c",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Faceless",
                  "description": "Being who you are, you could never be a hero. Whether due to your class, your people, your family, or your sins, something about you prevents you from effectively pursuing the path you’ve chosen. Even so, that doesn’t stop you. You’ve left your old face behind, taking on a new persona, becoming something more. Characters with the faceless background don a disguise — literally or otherwise — as they adventure. This persona might be dramatic or subtle. In a way, though, many characters have such larger than life personalities. Therefore, this background largely focuses on detailing the hero behind the mask.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Disguise Kit",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Deception",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Intimidation",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "7322c305-c987-4647-a382-c9213f81def7",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Faction Agent",
                  "description": "Many organizations active in the North and across the face of Faerûn aren’t bound by strictures of geography. These factions pursue their agendas without regard for political boundaries, and their members operate anywhere the organization deems necessary. These groups employ listeners, rumormongers, smugglers, sellswords, cache-holders (people who guard caches of wealth or magic for use by the faction’s operatives), haven keepers, and message drop minders, to name a few. At the core of every faction are those who don’t merely fulfill a small function for that organization, but who serve as its hands, head, and heart. As a prelude to your adventuring career (and in preparation for it), you served as an agent of a particular faction in Faerûn. You might have operated openly or secretly, depending on the faction and its goals, as well as how those goals mesh with your own. Becoming an adventurer doesn’t necessarily require you to relinquish membership in your faction (though you can choose to do so), and it might enhance your status in the faction.",
                  "numberOfExtraLanguages": 2,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        },
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 0,
                  "toolOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        },
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "e87cf155-d237-4adc-bf65-2d76eab033cf",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Far Traveler",
                  "description": "Almost all of the common people and other folk that one might encounter along the Sword Coast or in the North have one thing in common: they live out their lives without ever traveling more than a few miles from where they were born. You aren’t one of those folk. You are from a distant place, one so remote that few of the common folk in the North realize that it exists, and chances are good that even if some people you meet have heard of your homeland, they know merely the name and perhaps a few outrageous stories. You have come to this part of Faerûn for your own reasons, which you might or might not choose to share. Although you will undoubtedly find some of this land’s ways to be strange and discomfiting, you can also be sure that some things its people take for granted will be to you new wonders that you’ve never laid eyes on before. By the same token, you’re a person of interest, for good or ill, to those around you almost anywhere you go.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Musical Instrument",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Perception",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "0ccd1e7a-9aad-41dc-9ccc-13754792499e",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Folk Hero",
                  "description": "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Artisan's Tools",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Vehicles (Land)",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Animal Handling",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Survival",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "83051b4a-0cfa-4378-8f77-815704d1e766",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Gate Urchin",
                  "description": "All traffic into and out of the City of Trade passes through the Hillsfar Gate, making it the ideal place for the destitute to gather to panhandle, busk, gossip, and pick pockets. You grew up on the streets in the shadow of that great steel edifice, which houses both Red Plumes and Guild Mages. Though you may have moved on, you still have friends among them, and that life has had a lasting impact on you.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Musical Instrument",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Thives' Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Deception",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Sleight of Hand",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "dcc28495-7bbf-4bc6-b80f-965192982f7a",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Gladiator",
                  "description": "A gladiator is as much an entertainer as any minstrel or circus performer, trained to make the arts of combat into a spectacle the crowd can enjoy. This kind of flashy combat is your entertainer routine, though you might also have some skills as a tumbler or actor.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Disguise Kit",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Unusual Weapon x1",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Acrobatics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Performance",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "679b9d85-0bfc-419a-9ecd-88070269089c",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Guild Artisan",
                  "description": "You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Artisan's Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Persuasion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "8ec47bc9-6515-4894-8ce5-c8b4ad6b57c3",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Guild Merchant",
                  "description": "You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Navigator's Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Persuasion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "8ec47bc9-6515-4894-8ce5-c8b4ad6b57c3",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Harborfolk",
                  "description": "You are one of the hundreds of small-time fishermen and women who haul the bounty of Mulmaster's freshwater harbor to the city's markets each morning. You have spent countless days rowing in the waters in and around Mulmaster and know them and the other fisherfolk, dockworkers, and port inhabitants better than anyone. Though you have left that life behind, you still visit once in a while.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Vehicles (Water)",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Athletics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Sleight of Hand",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "b7c61c0b-8839-4746-8b79-396f64ac350f",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Haunted One",
                  "description": "You are haunted by something so terrible that you dare not speak of it. You’ve tried to bury it and run away from it, to no avail. Whatever this thing is that haunts you can’t be slain with a sword or banished with a spell. It might come to you as a shadow on the wall, a bloodcurdling nightmare, a memory that refuses to die, or a demonic whisper in the dark. The burden has taken its toll, isolating you from most people and making you question your sanity. You must find a way to overcome it before it destroys you.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "EXOTIC",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 0,
                  "toolOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Arcana",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Investigation",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Religion",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Survival",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "d0331744-18d7-43ac-890f-a11076978133",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Hermit",
                  "description": "You lived in seclusion — either in a sheltered community such as a monastery, or entirely alone — for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Herbalism Kit",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Medicine",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Religion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "e9cb8cb6-3f2f-457e-b865-c00eb8196383",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Hillsfar Merchant",
                  "description": "Before becoming an adventurer, you were a successful merchant operating out Hillsfar, the City of Trade. Your family operated warehouses, organized caravans, managed stores, or owned a ship and has trade contacts throughout the Moonsea region, as well as up and down the length of the Sword Coast. Perhaps they import ore, uncut gems, untreated furs, or grain into the City of Trade, or they export fine cloth, faceted gems, fine furs, or Dragon's Breath, a brandy-like liquor. Regardless, you've largely given that life up for some reason and have chosen to seek adventure instead. Nevertheless, the training you received then, and perhaps the contacts you made, serve you well as an adventurer.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Vehicles (Land)",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Vehicles (Water)",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Persuasion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "815ff57e-a32a-4afb-a5ab-cdca3b40bb1f",
                  "alternateBackgroundFeature": "08cf9e10-4f7e-4417-be20-15663609b050",
                  "id": uuidv4()
                },
                {
                  "name": "Hillsfar Smuggler",
                  "description": "Hillsfar is the City of Trade. However, the Great Law of Trade only protects 'legitimate' trade, trade that passes through the city's sole gate, which the Red Plumes monitor and tax. And the Great Law of Humanity banishes non- humans from the city altogether. The two Great Laws create great demand and great risk for smugglers, who shepherd illicit goods and non-humans into and out of the city by secret routes. The Rogues Guild tightly controls all of this activity, taking its cut from sanctioned jobs and exacting punishment for independent jobs. Perhaps you trafficked Dragon's Breath (a brandy-like liquor) to avoid tariffs or contraband to avoid seizure, or maybe you are a human who sympathizes with the non- humans and worked as part of the network of secret routes and safe houses that helps them pass through Hillsfar. Either way, you have contacts in the smuggling community who can help you slip into and out of the city unnoticed, for a price. ",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Forgery Kit",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Perception",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Stealth",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "ed05a7ba-0c9f-439d-9ebd-59e6c9d2342c",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Inheritor",
                  "description": "You are the heir to something of great value — not mere coin or wealth, but an object that has been entrusted to you and you alone. Your inheritance might have come directly to you from a member of your family, by right of birth, or it could have been left to you by a friend, a mentor, a teacher, or someone else important in your life. The revelation of your inheritance changed your life, and might have set you on the path to adventure, but it could also come with many dangers, including those who covet your gift and want to take it from you — by force, if need be.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Musical Instrument",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Survival",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Arcana",
                          "isAutoGranted": false
                        },
                        {
                          "name": "History",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Religion",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "8ad643d4-816c-48fa-9706-1c971878ffbb",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Inquisitor",
                  "description": "Historically, inquisitors were cathar detectives who investigated crimes both mundane and supernatural. They were known for traveling to remote parishes plagued by unexplained murders, and for exposing werewolves living among normal humans. During Avacyn's absence, when the archangel was trapped within the demonic prison known as the Helvault, the inquisitors led a series of brutal forays into Kessig and the Gavony Moorland. They executed suspected lycanthropes with little or no proof, and punished accused heretics in unsanctioned trials. With Avacyn's madness, this savage form of inquisition has become the norm, and inquisitors who still pry into dark mysteries have become a minority.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Artisan's Tools",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Thieves' Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Investigation",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Religion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "2956ebf2-7217-4093-9623-5038c8fb7478",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Investigator",
                  "description": "Though you hold no special title or position, you are an inveterate seeker of truths. To this end, you find yourself compelled to search in dangerous locations, and are the first to broach understanding or gather clandestine pieces of information. These traits can bring you to intense danger, but they do not hinder their quest for knowledge. You are likely to gather teams meant to explore the unknown, pushing them into action despite any of their natural misgivings. It is your bravado and ingenuity that keeps your team anchored and united against the darkness and its denizens. What you do not anticipate, however, is that your search for the truth may lead you to your own end, or worse.",
                  "numberOfExtraLanguages": 2,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        },
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 0,
                  "toolOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Investigation",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "d243667f-26e7-4e28-a527-d0c8abc569f0",
                  "alternateBackgroundFeature": "f87ad0cb-b375-43d3-93ff-a3868a37f436",
                  "id": uuidv4()
                },
                {
                  "name": "Iron Route Bandit",
                  "description": "The Iron Route, once the primary trade route between Phlan and Zhentil Keep, used to be a site of extensive banditry until the Phlan's recent occupation. Your time as an erstwhile bandit has given you plenty of experience in the saddle and a knack for acquiring and appraising other people's mounts, pets, and vehicles among other things. This particular set of skills has become very lucrative for you by working for the underground as a horse thief for a local guild of thieves and other shadowy organizations.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Vehicles (Land)",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Animal Handling",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Stealth",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "f578defc-111b-45e8-ac94-45c6b21cb6a1",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Knight",
                  "description": "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them. Work with your DM to come up with an appropriate title and determine how much authority that title carries. A noble title doesn’t stand on its own—it’s connected to an entire family, and whatever title you hold, you will pass it down to your own children. Not only do you need to determine your noble title, but you should also work with the DM to describe your family and their influence on you. Is your family old and established, or was your title only recently bestowed? How much influence do they wield, and over what area? What kind of reputation does your family have among the other aristocrats of the region? How do the common people regard them? What’s your position in the family? Are you the heir to the head of the family? Have you already inherited the title? How do you feel about that responsibility? Or are you so far down the line of inheritance that no one cares what you do, as long as you don’t embarrass the family? How does the head of your family feel about your adventuring career? Are you in your family’s good graces, or shunned by the rest of your family? Does your family have a coat of arms? An insignia you might wear on a signet ring? Particular colors you wear all the time? An animal you regard as a symbol of your line or even a spiritual member of the family? These details help establish your family and your title as features of the world of the campaign. A knighthood is among the lowest noble titles in most societies, but it can be a path to higher status. If you wish to be a knight, choose the Retainers feature (see the sidebar) instead of the Position of Privilege feature. One of your commoner retainers is replaced by a noble who serves as your squire, aiding you in exchange for training on his or her own path to knighthood. Your two remaining retainers might include a groom to care for your horse and a servant who polishes your armor (and even helps you put it on). As an emblem of chivalry and the ideals of courtly love, you might include among your equipment a banner or other token from a noble lord or lady to whom you have given your heart — in a chaste sort of devotion. (This person could be your bond.)",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "History",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Persuasion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "f5445cbc-c458-417e-b2e2-2590ec845bd7",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Knight of the Order",
                  "description": "You belong to an order of knights who have sworn oaths to achieve a certain goal. The nature of this goal depends on the order you serve, but in your eyes it is without question a vital and honorable endeavor. Faerûn has a wide variety of knightly orders, all of which have a similar outlook concerning their actions and responsibilities. Though the term “knight” conjures ideas of mounted, heavily armored warriors of noble blood, most knightly orders in Faerûn don’t restrict their membership to such individuals. The goals and philosophies of the order are more important than the gear and fighting style of its members, and so most of these orders aren’t limited to fighting types, but are open to all sorts of folk who are willing to battle and die for the order’s cause. The “Knightly Orders of Faerûn” sidebar details several of the orders that are active at present and is designed to help inform your decision about which group you owe allegiance to. KNIGHTLY ORDERS OF FAERÛN: Many who rightfully call themselves “knight” earn that title as part of an order in service to a deity, such as Kelemvor’s Eternal Order or Mystra’s Knights of the Mystic Fire. Other knightly orders serve a government, royal family, or are the elite military of a feudal state, such as the brutal Warlock Knights of Vaasa. Other knighthoods are secular and nongovernmental organizations of warriors who follow a particular philosophy, or consider themselves a kind of extended family, similar to an order of monks. Although there are organizations, such as the Knights of the Shield, that use the trappings of knighthood without necessarily being warriors, most folk of Faerûn who hear the word “knight” think of a mounted warrior in armor beholden to a code. Below are a few knightly organizations. Knights of the Unicorn. The Knights of the Unicorn began as a fad of romantically minded sons and daughters of patriar families in Baldur’s Gate. On a lark, they took the unicorn goddess Lurue as their mascot and went on various adventures for fun. The reality of the dangers they faced eventually sank in, as did Lurue’s tenets. Over time the small group grew and spread, gaining a following in places as far as Cormyr. The Knights of the Unicorn are chivalric adventurers who follow romantic ideals: life is to be relished and lived with laughter, quests should be taken on a dare, impossible dreams should be pursued for the sheer wonder of their completion, and everyone should be praised for their strengths and comforted in their weaknesses.  Knights of Myth Drannor. Long ago, the Knights of Myth Drannor were a famous adventuring band, and Dove Falconhand, one of the famous Seven Sisters, was one of them. The band took its name to honor the great but fallen city, just as the new Knights of Myth Drannor do today. With the city once again in ruins, Dove Falconhand decided to reform the group with the primary goal of building alliances and friendship between the civilized races of the world and goodly people in order to combat evil. The Knights of Myth Drannor once again ride the roads of the Dalelands, and they’ve begun to spread to the lands beyond. Their members, each accepted by Dove herself, are above all valiant and honest.  Knights of the Silver Chalice. The Knights of the Silver Chalice was formed by edict of the demigod Siamorphe in Waterdeep a century ago. Siamorphe’s ethos is the nobility’s right and responsibility to rule, and the demigod is incarnated as a different noble mortal in each generation. By the decree of the Siamorphe at that time, the Knights of the Silver Chalice took it upon themselves to put a proper heir on the throne of Tethyr and reestablish order in that kingdom. Since then they have grown to be the most popular knighthood in Tethyr, a nation that has hosted many knighthoods in fealty to the crown.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Musical Instrument",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Persuasion",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Arcana",
                          "isAutoGranted": false
                        },
                        {
                          "name": "History",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Nature",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Religion",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "82926eb7-536e-470f-8fd9-bc68cc4d465a",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Mercenary Veteran",
                  "description": "As a sell-sword who fought battles for coin, you’re well acquainted with risking life and limb for a chance at a share of treasure. Now, you look forward to fighting foes and reaping even greater rewards as an adventurer. Your experience makes you familiar with the ins and outs of mercenary life, and you likely have harrowing stories of events on the battlefield. You might have served with a large outfit such as the Zhentarim or the soldiers of Mintarn, or a smaller band of sell-swords, maybe even more than one. (See the “Mercenaries of the North” sidebar for a collection of possibilities.) Now you’re looking for something else, perhaps greater reward for the risks you take, or the freedom to choose your own activities. For whatever reason, you’re leaving behind the life of a soldier for hire, but your skills are undeniably suited for battle, so now you fight on in a different way.  MERCENARIES OF THE NORTH: Countless mercenary companies operate up and down the Sword Coast and throughout the North. Most are small-scale operations that employ a dozen to a hundred folk who offer security services, hunt monsters and brigands, or go to war in exchange for gold. Some organizations, such as the Zhentarim, Flaming Fist, and the nation of Mintarn have hundreds or thousands of members and can provide private armies to those with enough funds. A few organizations operating in the North are described below.  The Chill. The cold and mysterious Lurkwood serves as the home of numerous groups of goblinoids that have banded together into one tribe called the Chill. Unlike most of their kind, the Chill refrains from raiding the people of the North and maintains relatively good relations so that they can hire themselves out as warriors. Few city-states in the North are willing to field an army alongside the Chill, but several are happy to quietly pay the Chill to battle the Uthgardt, orcs, trolls of the Evermoors, and other threats to civilization.  Silent Rain. Consisting solely of elves, Silent Rain is a legendary mercenary company operating out of Evereska. Caring little for gold or fame, Silent Rain agrees only to jobs that either promote elven causes or involve destroying orcs, gnolls, and the like. Prospective employers must leave written word (in Elvish) near Evereska, and the Silent Rain sends a representative if interested.  The Bloodaxes. Founded in Sundabar nearly two centuries ago, the Bloodaxes were originally a group of dwarves outcast from their clans for crimes against the teachings of Moradin Soulforger. They began hiring out as mercenaries to whoever in the North would pay them. Since then the mercenary company has broadened its membership to other races, but every member is an exile, criminal, or misfit of some sort looking for a fresh start and a new family among the bold Bloodaxes.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Vehicles (Land)",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Athletics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Persuasion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "1793856a-0098-4e91-a984-b5ec85f332f4",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Mulmaster Aristocrat",
                  "description": "From your hilltop home, you have looked down (literally and perhaps figuratively) on the unwashed masses of Mulmaster for your entire life. Your fur-trimmed robes and training in the visual and performing arts mark you as wealthy and perhaps well-born; you are a member of the City of Danger's aristocracy. None of your immediate family members sits on the Council of Blades or is even a Zor or Zora...yet. Nevertheless, you are one of Mulmaster's elite, and whether you personally covet a higher standing or not, you are at home in the dance halls where the aristocracy gathers to plot, to scheme, to do business, to discuss the arts, and, above all, tosee, and to be seen.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Artisan's Tools",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Musical Instrument",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Deception",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Performance",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "d95688d7-ce09-433f-9028-08ac217d9b86",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Noble",
                  "description": "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them. Work with your DM to come up with an appropriate title and determine how much authority that title carries. A noble title doesn’t stand on its own—it’s connected to an entire family, and whatever title you hold, you will pass it down to your own children. Not only do you need to determine your noble title, but you should also work with the DM to describe your family and their influence on you. Is your family old and established, or was your title only recently bestowed? How much influence do they wield, and over what area? What kind of reputation does your family have among the other aristocrats of the region? How do the common people regard them? What’s your position in the family? Are you the heir to the head of the family? Have you already inherited the title? How do you feel about that responsibility? Or are you so far down the line of inheritance that no one cares what you do, as long as you don’t embarrass the family? How does the head of your family feel about your adventuring career? Are you in your family’s good graces, or shunned by the rest of your family? Does your family have a coat of arms? An insignia you might wear on a signet ring? Particular colors you wear all the time? An animal you regard as a symbol of your line or even a spiritual member of the family? These details help establish your family and your title as features of the world of the campaign.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "History",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Persuasion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "54c5e792-1581-49e1-b3cf-751330784f15",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Outlander",
                  "description": "You grew up in the wilds, far from civilization and the comforts of town and technology. You’ve witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don’t know the specific features of the terrain, you know the ways of the wild.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Musical Instrument",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Athletics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Survival",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "e9777b58-ce0e-4455-b178-fd975eb2ac89",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Phlan Insurgent",
                  "description": "The taking of Phlan by Vorgansharax is a clear memory in your mind. You were going about your everyday business when the green dragon's forces spilled out of the sewers and assailed your home. Many of Phlan's citizens, young and old alike, were captured, killed, or offered as tribute to the Maimed Virulence. You, yourself were one of those captured. But, either with the help of adventurers or through your own wits and sheer determination, you escaped. Rather than flee the region, you've chosen to stay and fight. Finding refuge outside the town and the deadly thicket surrounding it, you strike out against the Tears of the Virulence and their monstrous allies. You've learned to survive in dire and desperate circumstances, with supplies running low and the arrival of reinforcements uncertain. You've grown accustomed to acting under the cover of night, dealing what blows you can to avenge the friends and family you lost within the currently occupied Phlan. You will drive Vorgansharax out, or you die trying. Removed from your life as a townsperson, you've adapted to rough life in the wilds surrounding Phlan. The trade you practiced still influences your outlook, the manner in which you approach situations, and the way you contribute to the resistance movement against the Maimed Virulence. You can roll on the following table to determine what your occupation was before the fall, or choose one that best fits your character (select from either the general column or the specific column, but not both) Fisher /Stojanow River Worker; Hunter / Twilight Marsh Worker; Craftsperson /Mantor's Library Scribe;Priest/Priestess / Clergy of Ilmater; Cook / Laughing Goblin Server; City Watch / Black Fist Guard; Servant / House Sokol Retainer; Unskilled Laborer / Bay of Phlan Dockworker",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Artisan's Tools",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Vehicles (Land)",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Stealth",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Survival",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "d945e0e0-8255-44ef-96be-01ec1de8e26d",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Phlan Refugee",
                  "description": "Gone are the happier days of walking into the Laughing Goblin Inn after a hard day’s labor. Everything has changed, and you are lucky to be alive. Back in Phlan you could count yourself among those street-wise folks who knew when to pay a bribe and who to work with to make a living.  Your ability to listen to the winds of change have saved you before, and this time they allowed you to be one of the lucky few who escaped Phlan with something more than just the shirt on your back. ",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Artisan's Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Athletics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Insight",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "9b2747c3-b58e-40c6-9ebc-b075dd2a97c5",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Pirate",
                  "description": "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new. Discuss the nature of the ship you previously sailed with your Dungeon Master. Was it a merchant ship, a naval vessel, a ship of discovery, or a pirate ship? How famous (or infamous) is it? Is it widely traveled? Is it still sailing, or is it missing and presumed lost with all hands? What were your duties on board — boatswain, captain, navigator, cook, or some other position? Who were the captain and first mate? Did you leave your ship on good terms with your fellows, or on the run? You spent your youth under the sway of a dread pirate, a ruthless cutthroat who taught you how to survive in a world of sharks and savages. You’ve indulged in larceny on the high seas and sent more than one deserving soul to a briny grave. Fear and bloodshed are no strangers to you, and you’ve garnered a somewhat unsavory reputation in many a port town.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Navigator's Tools",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Vehicles (Water)",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Athletics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Perception",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "35a4a7c9-d018-4d1a-98cb-8b1a4058dd87",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Sage",
                  "description": "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.",
                  "numberOfExtraLanguages": 2,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        },
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 0,
                  "toolOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Arcana",
                          "isAutoGranted": true
                        },
                        {
                          "name": "History",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "502dd73c-41df-4423-864e-f1c9e5a3d02c",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Sailor",
                  "description": "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new. Discuss the nature of the ship you previously sailed with your Dungeon Master. Was it a merchant ship, a naval vessel, a ship of discovery, or a pirate ship? How famous (or infamous) is it? Is it widely traveled? Is it still sailing, or is it missing and presumed lost with all hands? What were your duties on board — boatswain, captain, navigator, cook, or some other position? Who were the captain and first mate? Did you leave your ship on good terms with your fellows, or on the run?",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Navigator's Tools",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Vehicles (Water)",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Athletics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Perception",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "69b55f0d-6a38-4d2a-892c-f2c39c6324cd",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Secret Identity",
                  "description": "Even though you are a non-human, despite Hillsfar's Great Law of Humanity, you continue to live in the City of Trade. You do so by maintaining a secret identity, forging documents, and wearing a disguise. Few, if any, know you aren't human. If you're a halfling or gnome, you pass as a little person or a child. If you're a half-elf, half-orc, or genasi, you disguise your non-human features. Other races use a combination of disguise and concealing clothing to hide. Your reasons for doing so are your own. Perhaps you're a dissident or the agent of a foreign power. Maybe you have a relationship with someone you cannot bear to leave. Regardless, this way of life has taken a heavy toll on you.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Disguise Kit",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Forgery Kit",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Deception",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Stealth",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "51bc4869-bdc8-43f0-a83c-d767504e804e",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Shade Fanatic",
                  "description": "You grew up at a time when the wizards of Netheril were at war with the elves of Cormanthor. You recall sitting cross-legged hearing the stories of the glorious Thultanthar, also called the Shade Enclave and the City of Shade, and aspired to study there and maybe even did, for a time. Your dreams came crashing down a few years ago when Thultanthar fell from the sky upon Myth Drannor. You know that there was a Netherese Garrison stationed near Hillsfar and have heard rumors that its downfall came from traitors within the ranks.  You remain loyal to Netheril and seek other Shade loyalists and fanatics in the Cormanthor for-est and the areassurroundingHillsfar.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "Netherese",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Forgery Kit",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Deception",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Intimidation",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "8634f1b6-5339-4c4c-a5fa-7db7d265fbb5",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Soldier",
                  "description": "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war. When you choose this background, work with your DM to determine which military organization you were a part of, how far through its ranks you progressed, and what kind of experiences you had during your military career. Was it a standing army, a town guard, or a village militia? Or it might have been a noble’s or merchant’s private army, or a mercenary company.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Vehicles (Land)",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Athletics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Intimidation",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "f3fc3429-2ab2-43bb-8987-75438202cc71",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Spy",
                  "description": "At some point or another you secretly gathered information on a group of people or maybe one person. Maybe you were hired by a rival or political enemy, maybe you were searching for military information to help the opposing army, maybe you were trying to fulfil your own agenda, but regardless you are good at finding things and hiding your true self. You are used to living on the edge of danger, and doubly used to doubting people's intentions. Who did you spy for, yourself or some benefactor? Who or what did you spy on? What secrets did you uncover? Why did you stop? Or did you? ",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Thieves' Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Deception",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Stealth",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "d993eef3-e3e0-42e9-8159-927d80db1b84",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Stojanow Prisoner",
                  "description": "'We need to leave, now!' Those words still haunt your dreams at night. When everyone was fleeing Phlan, you choose to stay. Whether out of an emotional attachment, or pursuit of riches, you made the decision that would affect the rest of your life. Food became scarcer for those without connections. You became a beggar and to stay alive you bartered information to any interested party with food or gold to spare. You were good at what you did, and thought you were invincible. That changed when you were captured by the Tears of Virulence, the soldiers of Vorgansharax, the Maimed Virulence, for selling secrets to those bent on overthrowing the dragon. They locked you in the cells of Stojanow Gate. The first weeks you hoped to stay alive. As the weeks turned into months and the interrogations continued, you began to pray for death.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Thieves' Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Deception",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Perception",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "6fa2f402-c612-4e4d-948f-acfb12a75224",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Ticklebelly Nomad",
                  "description": "You were born into a nomadic tribe that called the Ticklebelly Hills home. You migrated from location to location, living off the land with your tribe. The tribewould seasonally travel south into the Grass Sea and the Giant’s Cairn, north into the Dragonspine Mountains, and even occasionally east across the Stojanow River to the borders of the Quivering forest.In your migrations, your people have come to know the stone giant tribes that populate the Giant’s Cairn. The dragon cultists came to the hills one day—magic-users wearing purple and riding horrid beasts, black-clad warriors wearing wicked masks, and even soldiers from the nearby town of Phlan. Then the dragon called Vorgansharax arrived and laired in the hills, causing horrid thickets to grow and animals to act unusually. The cultists began raiding nomad camps for victims to offer to the wyrm. Eventually, the dragon moved on to attack Phlan, but life was never again the same for the nomads of the Ticklebelly Hills.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "Giant",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Herbalism Kit",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Animal Handling",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Nature",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "3d8c5c55-754a-4bee-92ec-ce658793b0b8",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Trade Sheriff",
                  "description": "You are one of the many people that make sure the trade routes are clear at ALL times. You assure that the Great Law of Trade is followed at all costs. You work by yourself or in groups to quell bandits and brigands who might stop trade routes from going through. You investigate potential ambushes and possible rumors as to someone wanting to rob or stop caravans. You are as much an investigator as you are law enforcement. You are able to go into a town/village around the Hillsfar area and find a contact that is willing to give you information from rumor to fact. This sometimes comes at a cost of a minor bribe of 1-9 silver pieces.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "Elvish",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Thieves' Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Investigation",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Persuasion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "ef99cf8e-db1c-4865-93f4-2f0b4b9d4b55",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Urban Bounty Hunter",
                  "description": "Before you became an adventurer, your life was already full of conflict and excitement, because you made a living tracking down people for pay. Unlike some people who collect bounties, though, you aren’t a savage who follows quarry into or through the wilderness. You’re involved in a lucrative trade, in the place where you live, that routinely tests your skills and survival instincts. What’s more, you aren’t alone, as a bounty hunter in the wild would be: you routinely interact with both the criminal subculture and other bounty hunters, maintaining contacts in both areas to help you succeed. You might be a cunning thief-catcher, prowling the rooftops to catch one of the myriad burglars of the city. Perhaps you are someone who has your ear to the street, aware of the doings of thieves’ guilds and street gangs. You might be a “velvet mask” bounty hunter, one who blends in with high society and noble circles in order to catch the criminals that prey on the rich, whether pickpockets or con artists. The community where you plied your trade might have been one of Faerûn’s great metropolises, such as Waterdeep or Baldur’s Gate, or a less populous location, perhaps Luskan or Yartar — any place that’s large enough to have a steady supply of potential quarries. As a member of an adventuring party, you might find it more difficult to pursue a personal agenda that doesn’t fit with the group’s objectives — but on the other hand, you can take down much more formidable targets with the help of your companions.",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Musical Instrument",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Thieves' Tools",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Deception",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Insight",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Persuasion",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Stealth",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "829c3543-d341-43f0-bbe5-b771c8d46949",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Urchin",
                  "description": "You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. You’ve survived despite all odds, and did so through cunning, strength, speed, or some combination of each. You begin your adventuring career with enough money to live modestly but securely for at least ten days. How did you come by that money? What allowed you to break free of your desperate circumstances and embark on a better life?",
                  "numberOfExtraLanguages": 0,
                  "languageOptions": {
                    "options": [
                      []
                    ]
                  },
                  "numberOfToolsGranted": 2,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Disguise Kit",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Thieves' Tools",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Sleight of Hand",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Stealth",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "e1537a07-3f69-4c28-afb9-9d5d09d6bcbd",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Uthgardt Tribe Member",
                  "description": "Though you might have only recently arrived in civilized lands, you are no stranger to the values of cooperation and group effort when striving for supremacy. You learned these principles, and much more, as a member of an Uthgardt tribe. Your people have always tried to hold to the old ways. Tradition and taboo have kept the Uthgardt strong while the kingdoms of others have collapsed into chaos and ruin. But for the last few generations, some bands among the tribes were tempted to settle, make peace, trade, and even to build towns. Perhaps this is why Uthgar chose to raise up the totems among the people as living embodiments of his power. Perhaps they needed a reminder of who they were and from whence they came. The Chosen of Uthgar led bands back to the old ways, and most of your people abandoned the soft ways of civilization. BARBARIAN TRIBES OF FAERÛN: Though this section details the Uthgardt specifically, either it or the outlander background from the Player’s Handbook can be used for a character whose origin lies with one of the other barbarian tribes in Faerûn. You might be a fair-haired barbarian of the Reghed, dwelling in the shadow of the Reghed Glacier in the far North near Icewind Dale. You might also be of the nomadic Rashemi, noted for their savage berserkers and their masked witches. Perhaps you hail from one of the wood elf tribes in the Chondalwood, or the magic-hating human tribes of the sweltering jungles of Chult. You might have grown up in one of the tribes that had decided to settle down, and now that they have abandoned that path, you find yourself adrift. Or you might come from a segment of the Uthgardt that adheres to tradition, but you seek to bring glory to your tribe by achieving great things as a formidable adventurer. See the “Uthgardt Lands” section of chapter 2 for details on each tribe’s territory and its activities that will help you choose your affiliation.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Artisan's Tools",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Musical Instrument",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "Athletics",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Survival",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "853b59c4-ba0f-4991-8002-e1248b04e760",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                },
                {
                  "name": "Waterdhavian Noble",
                  "description": "You are a scion of one of the great noble families of Waterdeep. Human families who jealously guard their privilege and place in the City of Splendors, Waterdhavian nobles have a reputation across Faerûn for being eccentric, spoiled, venal, and, above all else, rich. Whether you are a shining example of the reason for this reputation or one who proves the rule by being an exception, people expect things of you when they know your surname and what it means. Your reasons for taking up adventuring likely involve your family in some way: Are you the family rebel, who prefers delving in filthy dungeons to sipping zzar at a ball? Or have you taken up sword or spell on your family’s behalf, ensuring that they have someone of renown to see to their legacy? Work with your DM to come up with the family you are part of —there are around seventy-five lineages in Waterdeep, each with its own financial interests, specialties, and schemes. You might be part of the main line of your family, possibly in line to become its leader one day. Or you might be one of any number of cousins, with less prestige but also less responsibility.",
                  "numberOfExtraLanguages": 1,
                  "languageOptions": {
                    "options": [
                      [
                        {
                          "name": "ANY",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfToolsGranted": 1,
                  "toolOptions": {
                    "options": [
                      [
                        {
                          "name": "Gaming Set",
                          "isAutoGranted": false
                        },
                        {
                          "name": "Musical Instrument",
                          "isAutoGranted": false
                        }
                      ]
                    ]
                  },
                  "numberOfSkillsGranted": 2,
                  "skillOptions": {
                    "options": [
                      [
                        {
                          "name": "History",
                          "isAutoGranted": true
                        },
                        {
                          "name": "Persuasion",
                          "isAutoGranted": true
                        }
                      ]
                    ]
                  },
                  "backgroundFeature": "6d05b6f5-d467-47cf-aed7-421877dd2425",
                  "alternateBackgroundFeature": null,
                  "id": uuidv4()
                }
            ])
        ))
)