const { v4: uuidv4 } = require('uuid')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bg_features')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bg_features').insert([
        {
          id: '58803af1-57d4-4aed-84c5-b7769d5d6c50',
          name: 'Shelter of the Faithful',
          conferring_bg: 'Acolyte',
          description:
            'As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.',
        },
        {
          id: 'adf54ce8-95d0-4796-946c-60f6a98450ff',
          name: 'Cultural Chameleon',
          conferring_bg: 'Anthropologist',
          description:
            "Before becoming an adventurer, you spent much of your adult life away from your homeland, living among people different from your kin. You came to understand these foreign cultures and the ways of their people, who eventually treated you as one of their own. One culture had more of an influence on you than any other, shaping your beliefs and customs. Choose a race whose culture you've adopted.",
        },
        {
          id: '774054aa-3d44-404d-aa62-21a8a91f6b31',
          name: 'Adept Linguist',
          conferring_bg: 'Anthropologist',
          description:
            "You can communicate with humanoids who don't speak any language you know. You must observe the humanoids interacting with one another for at least 1 day, after which you learn a handful of important words, expressions, and gestures – enough to communicate on a rudimentary level.",
        },
        {
          id: '79815824-dbff-4a52-8ff6-3ac1556fd8ae',
          name: 'Dust Digger',
          conferring_bg: 'Archaeologist',
          description:
            'Prior to becoming an adventurer, you spent most of your young life crawling around in the dust, pilfering relics of questionable value from crypts and ruins. Though you managed to sell a few of your discoveries and earn enough coin to buy proper adventuring gear, you have held onto an item that has great emotional value to you. Roll on the Signature Item table to see what you have, or choose an item from the table.',
        },
        {
          id: '93e12d61-c5c0-44c8-86d6-bf2224ffa020',
          name: 'Double Agent',
          conferring_bg: 'Black Fist Double Agent',
          description:
            'You have a reliable and trusty contact within the Tears of Virulence garrison in Phlan to whom you pass information and secrets. In exchange, you can get away with minor criminal offenses within the town of Phlan. In addition, your Black Fists contacts can help you secure an audience with the Lord Regent, the Lord Sage, members of the Black Fists, or deposed nobles and authority figures who are sympathetic to the Phlan refugees and insurgents. Note: This feature is a variant of the Noble feature. ',
        },
        {
          id: 'a187512f-8ecb-4ea1-8441-c11711e1a21a',
          name: 'Wagonmaster',
          conferring_bg: 'Caravan Specialist',
          description:
            'You are used to being in charge of the operation and your reputation for reliability has you on a short list when the job is critical. Experience has taught you to rely on your gut. Othersrecognize this and look to you for direction when a situation gets serious. You are able to identify the most defensible loca-tions for camping. If you are part of a caravan outfit, you areable to attract two additional workers that are loyal to you based on your reputation. You have an excellent memory for maps and geography and can always determine your cardinal directions while traveling. [Note: This feature is a variant of the Outlander feature.]',
        },
        {
          id: '32a839a5-8e6a-4fcc-8b08-9ee72ae4018d',
          name: 'False Identity',
          conferring_bg: 'Charlatan',
          description:
            'You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.',
        },
        {
          id: '427ca193-537f-488a-a548-7b3e8a166661',
          name: 'Watcher’s Eye',
          conferring_bg: 'City Watch',
          description:
            'Your experience in enforcing the law, and dealing with lawbreakers, gives you a feel for local laws and criminals. You can easily find the local outpost of the watch or a similar organization, and just as easily pick out the dens of criminal activity in a community, although you’re more likely to be welcome in the former locations rather than the latter.',
        },
        {
          id: '60a820f0-5a40-4564-adb3-75752ffdf7b0',
          name: 'Respect of the Stout Folk',
          conferring_bg: 'Clan Crafter',
          description:
            'As well respected as clan crafters are among outsiders, no one esteems them quite so highly as dwarves do. You always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer you (and possibly your compatriots) the finest accommodations and assistance.',
        },
        {
          id: 'd38de396-d213-4228-904f-c5fc68fae747',
          name: 'Library Access',
          conferring_bg: 'Cloistered Scholar',
          description:
            'Though others must often endure extensive interviews and significant fees to gain access to even the most common archives in your library, you have free and easy access to the majority of the library, though it might also have repositories of lore that are too valuable, magical, or secret to permit anyone immediate access. You have a working knowledge of your cloister’s personnel and bureaucracy, and you know how to navigate those connections with some ease. Additionally, you are likely to gain preferential treatment at other libraries across the Realms, as professional courtesy shown to a fellow scholar.',
        },
        {
          id: '63b4fa20-6c67-4016-8319-8d2e6d4d31f1',
          name: 'Shelter of the Elven Clergy',
          conferring_bg: 'Cormanthor Refugee',
          description:
            'The clerics of Elventree have vowed to care for the Cormanthor refugees. They will help you when they can, including providing you and your companions with free healing and care at temples, shrines, and other established presences in Elventree. They will also provide you (but only you) with a poor lifestyle. [Note: This feature is a variant of the Acolyte feature.]',
        },
        {
          id: '1b080f8b-0087-4fde-a4a0-a37e122fbc14',
          name: 'Court Functionary',
          conferring_bg: 'Courtier',
          description:
            'Your knowledge of how bureaucracies function lets you gain access to the records and inner workings of any noble court or government you encounter. You know who the movers and shakers are, whom to go to for the favors you seek, and what the current intrigues of interest in the group are.',
        },
        {
          id: 'e0aa6891-4436-41fa-a401-6c39c713a36c',
          name: 'Criminal Contact',
          conferring_bg: 'Criminal',
          description:
            'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.',
        },
        {
          id: '0b935238-92ec-4cc0-b5f2-4f20fbe672aa',
          name: 'Deep Mine',
          conferring_bg: 'Earthspur Miner',
          description:
            'You are used to navigating the deep places of the earth. You never get lost in caves or mines if you have either seen an accurate map of them or have been through them before. Furthermore, you are able to scrounge fresh water and food for yourself and as many as five other people each day if you are in a mine or natural caves. [Note: This feature is a variant of the Outlander feature.]',
        },
        {
          id: '679b9d85-0bfc-419a-9ecd-88070269089c',
          name: 'By Popular Demand',
          conferring_bg: 'Entertainer',
          description:
            'You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble’s court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.',
        },
        {
          id: '7322c305-c987-4647-a382-c9213f81def7',
          name: 'Dual Personalities',
          conferring_bg: 'Faceless',
          description:
            'Most of your fellow adventurers and the world know you as your persona. Those who seek to learn more about you—your weaknesses, your origins, your purpose—find themselves stymied by your disguise. Upon donning a disguise and behaving as your persona, you are unidentifiable as your true self. By removing your disguise and revealing your true face, you are no longer identifiable as your persona. This allows you to change appearances between your two personalities as often as you wish, using one to hide the other or serve as convenient camouflage. However, should someone realize the connection between your persona and your true self, your deception might lose its effectiveness.',
        },
        {
          id: 'e87cf155-d237-4adc-bf65-2d76eab033cf',
          name: 'Safe Haven',
          conferring_bg: 'Faction Agent',
          description:
            'As a faction agent, you have access to a secret network of supporters and operatives who can provide assistance on your adventures. You know a set of secret signs and passwords you can use to identify such operatives, who can provide you with access to a hidden safe house, free room and board, or assistance in finding information. These agents never risk their lives for you or risk revealing their true identities.',
        },
        {
          id: '0ccd1e7a-9aad-41dc-9ccc-13754792499e',
          name: 'All Eyes on You',
          conferring_bg: 'Far Traveler',
          description:
            'Your accent, mannerisms, figures of speech, and perhaps even your appearance all mark you as foreign. Curious glances are directed your way wherever you go, which can be a nuisance, but you also gain the friendly interest of scholars and others intrigued by far-off lands, to say nothing of everyday folk who are eager to hear stories of your homeland. You can parley this attention into access to people and places you might not otherwise have, for you and your traveling companions. Noble lords, scholars, and merchant princes, to name a few, might be interested in hearing about your distant homeland and people.',
        },
        {
          id: '83051b4a-0cfa-4378-8f77-815704d1e766',
          name: 'Rustic Hospitality',
          conferring_bg: 'Folk Hero',
          description:
            'Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.',
        },
        {
          id: 'dcc28495-7bbf-4bc6-b80f-965192982f7a',
          name: 'Red Plume and Mage Guild Contacts',
          conferring_bg: 'Gate Urchin',
          description:
            "You made a number of friends among the Red Plumes and the Mage's Guild when you lived at the Hillsfar Gate. They remember you fondly and help you in little ways when they can. You can invoke their assistance in and around Hillsfar to obtain food, as well as simple equipment for temporary use. You can also invoke it to gain access to the low-security areas of their garrisons, halls, and encampments. [Note: This feature is a variant of the Soldier feature.]",
        },
        {
          id: '679b9d85-0bfc-419a-9ecd-88070269089b',
          name: 'By Popular Demand',
          conferring_bg: 'Gladiator',
          description:
            'You can always find a place to perform in any place that features combat for entertainment — perhaps a gladiatorial arena or secret pit fighting club. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.',
        },
        {
          id: '8ec47bc9-6515-4894-8ce5-c8b4ad6b57c3',
          name: 'Guild Membership',
          conferring_bg: 'Guild Artisan',
          description:
            'As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild’s coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild’s good graces.',
        },
        {
          id: 'b7c61c0b-8839-4746-8b79-396f64ac350f',
          name: 'Harborfolk',
          conferring_bg: 'Harborfolk',
          description:
            "You grew up on the docks and waters of Mulmaster Harbor. The harborfolk remember you and still treat you as one of them. They welcome you and your companions. While they might charge you for it, they'll always offer what food and shelter they have; they'll even hide you if the City Watch is after you (but not if the Hawks are). [Note: This feature is a variant of the Folk Hero feature.]",
        },
        {
          id: 'd0331744-18d7-43ac-890f-a11076978133',
          name: 'Heart of Darkness',
          conferring_bg: 'Haunted One',
          description:
            'Those who look into your eyes can see that you have faced unimaginable horror and that you are no stranger to darkness. Though they might fear you, commoners will extend you every courtesy and do their utmost to help you. Unless you have shown yourself to be a danger to them, they will even take up arms to fight alongside you, should you find yourself facing an enemy alone.',
        },
        {
          id: 'e9cb8cb6-3f2f-457e-b865-c00eb8196383',
          name: 'Discovey',
          conferring_bg: 'Hermit',
          description:
            'The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society. Work with your DM to determine the details of your discovery and its impact on the campaign.',
        },
        {
          id: '815ff57e-a32a-4afb-a5ab-cdca3b40bb1f',
          name: 'Factor',
          conferring_bg: 'Hillsfar Merchant',
          description:
            "Although you've left the day-to-day life of a merchant behind, your family has assigned you the services of a loyal retainer from the business, a factor, husbanding agent, seafarer, caravan guard, or clerk. This individual is a commoner who can perform mundane tasks for you such as making purchases, delivering messages, and running errands. He or she will not fight for you and will not follow you into obviously dangerous areas (such as dungeons), and will leave if frequently endangered or abused. If he or she is killed, the family assigns you another within a few days. Note: This feature is a variant of the Noble Knight's Retainers feature.",
        },
        {
          id: '08cf9e10-4f7e-4417-be20-15663609b050',
          name: 'Trade Contact',
          conferring_bg: 'Hillsfar Merchant (alternate)',
          description:
            'You and your family have trade contacts such as caravan masters, shopkeepers, sailors, artisans, and farmers throughout the Moonsea region and all along the Sword Coast. Once per game session, when adventuring in either of those areas, you can use those contacts to get information about the local area or to pass a message to someone in those areas, even across the great distance between the two areas. Note: This feature is a variant of the Criminal Contact and Researcher features.',
        },
        {
          id: 'ed05a7ba-0c9f-439d-9ebd-59e6c9d2342c',
          name: 'Secret Passage',
          conferring_bg: 'Hillsfar Smuggler',
          description:
            "You can call on your contacts within the smuggling community to secure secret passage into or out of Hillsfar for yourself and your adventuring companions, no questions asked, and no Red Plume entanglements. Because you’re calling in a favor, you can’t be certain they will be able to help on your timetable or at all. Your Dungeon Master will determine whether you can be smuggled into or out of the city. In return for your passage, you and your companions may owe the Rogue's Guild a favor and/or may have to pay bribes. [Note: This feature is a variant of the Sailor feature.]",
        },
        {
          id: '8ad643d4-816c-48fa-9706-1c971878ffbb',
          name: 'Inheritance',
          conferring_bg: 'Inheritor',
          description:
            'Choose or randomly determine your inheritance from among the possibilities in the table below. Work with your Dungeon Master to come up with details: Why is your inheritance so important, and what is its full story? You might prefer for the DM to invent these details as part of the game, allowing you to learn more about your inheritance as your character does. The Dungeon Master is free to use your inheritance as a story hook, sending you on quests to learn more about its history or true nature, or confronting you with foes who want to claim it for themselves or prevent you from learning what you seek. The DM also determines the properties of your inheritance and how they figure into the item’s history and importance. For instance, the object might be a minor magic item, or one that begins with a modest ability and increases in potency with the passage of time. Or, the true nature of your inheritance might not be apparent at first and is revealed only when certain conditions are met. When you begin your adventuring career, you can decide whether to tell your companions about your inheritance right away. Rather than attracting attention to yourself, you might want to keep your inheritance a secret until you learn more about what it means to you and what it can do for you. Item options: A document such as a map, a letter, or a journal; a trinket; an article of clothing; a piece of jewelry; an arcane book or formulary; a written story, song, poem, or secret; a tattoo or other body marking.',
        },
        {
          id: '2956ebf2-7217-4093-9623-5038c8fb7478',
          name: 'Legal Authority',
          conferring_bg: 'Inquisitor',
          description:
            'As an inquisitor of the church, you have the authority to arrest criminals. In the absence of other authorities, you are authorized to pass judgment and even carry out sentencing. If you abuse this power, however, your superiors in the church might strip it from you.',
        },
        {
          id: 'd243667f-26e7-4e28-a527-d0c8abc569f0',
          name: 'Trusted Source',
          conferring_bg: 'Investigator',
          description:
            'People may see you as a madman seeking information that no one wishes to unearth, but they realize that you are likely to know more than most about the horrors that rampage across the countryside. You may, in fact, have a tidbit of information that may help fell a marauding beast or cure an obscure disease, poison or curse. But more than that, people see in you a hope against the helplessness that plagues their daily existence. As the days grow ever further towards the lip of oblivion, you will be among the few trusted to help the beleaguered, as long as they don’t happen to think that you propagated these terrible events. You are likely to be sought as a voice of reason and are even given information on various perils. A noble may trust you to keep his dark secrets, provided you can help rid him of a supernatural problem. A group of cloistered clerics may turn to you in their darkest hour when their monastery is beset by some unimaginable monster, and these people can become valuable allies and informants as you continue to seek new and mind-numbing truths.',
        },
        {
          id: 'f87ad0cb-b375-43d3-93ff-a3868a37f436',
          name: 'Agent of the Crown',
          conferring_bg: 'Investigator (alternate)',
          description:
            'You are investigating directly under the auspice of some organizational sanction. You may or may not share this information with everyone, but your objectives are aligned with your benefactors. As such, you have a more focused and supportive network of contacts. While you may not garner sympathy or trust from others, you are backed by your organization, and can regularly expect to receive supplies and equipment as long as you are doing your duty, as well as safe houses and assistance from other agents that share your cause. If you are in a large population center, you can make contact with a fellow agent within 1d12 hours, and receive a tangible resupply within 3d12 hours.',
        },
        {
          id: 'f578defc-111b-45e8-ac94-45c6b21cb6a1',
          name: 'Black-Market Breeder',
          conferring_bg: 'Iron Route Bandit',
          description:
            'You know how to find people who are always looking for stolen animals & vehicles, whether to provide for animal pit fights, or to supply some desperate rogues the means to get away faster on mounts during an illegal job. This contact not only provides you with information of what such animals & vehicles are in high demand in the area, but also offer to give you favors and information (DM choice) if you bring such animals & vehicles to them. Note: This is a variant of the Criminal Contact feature.',
        },
        {
          id: 'f5445cbc-c458-417e-b2e2-2590ec845bd7',
          name: 'Retainers',
          conferring_bg: 'Knight',
          description:
            'You have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. Your retainers are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.',
        },
        {
          id: '82926eb7-536e-470f-8fd9-bc68cc4d465a',
          name: 'Knightly Regard',
          conferring_bg: 'Knight of the Order',
          description:
            'You receive shelter and succor from members of your knightly order and those who are sympathetic to its aims. If your order is a religious one, you can gain aid from temples and other religious communities of your deity. Knights of civic orders can get help from the community—whether a lone settlement or a great nation—that they serve, and knights of philosophical orders can find help from those they have aided in pursuit of their ideals, and those who share those ideals. This help comes in the form of shelter and meals, and healing when appropriate, as well as occasionally risky assistance, such as a band of local citizens rallying to aid a sorely pressed knight in a fight, or those who support the order helping to smuggle a knight out of town when he or she is being hunted unjustly.',
        },
        {
          id: '1793856a-0098-4e91-a984-b5ec85f332f4',
          name: 'Mercenary Life',
          conferring_bg: 'Mercenary Veteran',
          description:
            'You know the mercenary life as only someone who has experienced it can. You are able to identify mercenary companies by their emblems, and you know a little about any such company, including the names and reputations of its commanders and leaders, and who has hired them recently.You can find the taverns and festhalls where mercenaries abide in any area, as long as you speak the language.You can find mercenary work between adventures sufficient to maintain a comfortable lifestyle(see“ Practicing a Profession” under“ Downtime Activities” in chapter 8 of the Player’ s Handbook).',
        },
        {
          id: 'd95688d7-ce09-433f-9028-08ac217d9b86',
          name: 'Highborn',
          conferring_bg: 'Mulmaster Aristocrat',
          description:
            'Mulmaster is run by and for its aristoracy. Every other class of citizen in the city defers to you, and even the priesthood, Soldiery, Hawks, and Cloaks treat you with deference. Other aristocrats and nobles accept you in their circles and likely know you or of you. Your connections can get you the ear of a Zor or Zora under the right circumstances. [Note: This feature is a variant of the Noble feature.]',
        },
        {
          id: '54c5e792-1581-49e1-b3cf-751330784f15',
          name: 'Position of Privilege',
          conferring_bg: 'Noble',
          description:
            'Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.',
        },
        {
          id: 'e9777b58-ce0e-4455-b178-fd975eb2ac89',
          name: 'Wanderer',
          conferring_bg: 'Outlander',
          description:
            'You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.',
        },
        {
          id: 'd945e0e0-8255-44ef-96be-01ec1de8e26d',
          name: 'Guerrilla',
          conferring_bg: 'Phlan Insurgent',
          description:
            "You've come to know the surrounding forests, streams, caves, and other natural features in which you can take refuge — or set up ambushes. You can quickly survey your environment for advantageous features. Additionally, you can scavenge around your natural surroundings to cobble together simple supplies (such as improvised torches, rope, patches of fabric, etc.) that are consumed after use. [Note: This feature is a variant of the Outlander feature.]",
        },
        {
          id: '9b2747c3-b58e-40c6-9ebc-b075dd2a97c5',
          name: 'Phlan Survivor',
          conferring_bg: 'Phlan Refugee',
          description:
            'Whatever your prior standing was, you are now one of the many refugees that have come to Mulmaster. You are able to find refuge with others from Phlan and those who sympathize with your plight. Within Mulmaster this means that you can find a place to bed down, recover, and hide from the watch with either other refugees from Phlan, or the Zhents within the ghettos. [Note: This feature is a variant of the Folk Hero feature.]',
        },
        {
          id: '35a4a7c9-d018-4d1a-98cb-8b1a4058dd87',
          name: 'Bad Reputation',
          conferring_bg: 'Pirate',
          description:
            'No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities.',
        },
        {
          id: '502dd73c-41df-4423-864e-f1c9e5a3d02c',
          name: 'Researcher',
          conferring_bg: 'Sage',
          description:
            'When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.',
        },
        {
          id: '69b55f0d-6a38-4d2a-892c-f2c39c6324cd',
          name: "Ship's Passage",
          conferring_bg: 'Sailor',
          description:
            'When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you’re calling in a favor, you can’t be certain of a schedule or route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage.',
        },
        {
          id: '51bc4869-bdc8-43f0-a83c-d767504e804e',
          name: 'Secret Identity',
          conferring_bg: 'Secret Identity',
          description:
            'You have created a secret identity that you use to conceal your true race and that offers a covering explanation for your presence in Hillsfar. In addition, you can forge documents, including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy Note: This feature is a variant of the Charlatan feature.',
        },
        {
          id: '8634f1b6-5339-4c4c-a5fa-7db7d265fbb5',
          name: 'Secret Society',
          conferring_bg: 'Shade Fanatic',
          description:
            'You have a special way of communicating with others who feel the same way you do about the Shade.  When you enter a village or larger city you can identify contact who will give you information on those that would hinder your goals and those would help yousimply because of your desire to see the Shade Enclave return in all its glory.  [Note: This feature is a variant of the Criminal feature.]',
        },
        {
          id: 'f3fc3429-2ab2-43bb-8987-75438202cc71',
          name: 'Military Rank',
          conferring_bg: 'Soldier',
          description:
            'You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.',
        },
        {
          id: 'd993eef3-e3e0-42e9-8159-927d80db1b84',
          name: 'Echo of the Great Game',
          conferring_bg: 'Spy',
          description:
            'You have learnt so much of techniques from years of stealth and also trickery about how to not draw attention to yourself. You have an utterly un extraordinary way of walk and also way of talk and also move are deliberately forgettable. Whenever while you’re wearing the common clothes, nobody can remember your face nor any special features of you too, unless until they actively make an effort to do so. You have In an extra advantage that is you know how to write in the special codes that can only be readable by the people who trained in deciphering of it.',
        },
        {
          id: '6fa2f402-c612-4e4d-948f-acfb12a75224',
          name: 'Ex-Convict',
          conferring_bg: 'Stojanow Prisoner',
          description:
            'The knowledge gained during your incarceration lets you gain insight into local guards and jailors. You know which will accept bribes, or look the other way for you. You can also seek shelter for yourself from authorities with other criminals in the area. [Note: This feature is a variant of the Courtier feature.]',
        },
        {
          id: '3d8c5c55-754a-4bee-92ec-ce658793b0b8',
          name: 'At Home in the Wild',
          conferring_bg: 'Ticklebelly Nomad',
          description:
            'The wilderness is your home and you are comfortable dwelling in it. You can find a place to hide, rest, or recuperate when out in the wild. This place of rest is secure enough to conceal you from most natural threats. Threats that are supernatural, magical, or are actively seeking you out might do so with difficulty depending on the nature of the threat (as determined by the DM). However, this feature doesn’t shield or conceal you from scrying, mental probing, nor from threats that don’t necessarily require the five senses to find you.[Note:This feature is a variant of the Folk Hero feature.]',
        },
        {
          id: 'ef99cf8e-db1c-4865-93f4-2f0b4b9d4b55',
          name: 'Investigative Services',
          conferring_bg: 'Trade Sheriff',
          description:
            'You are part of a small force outside of Hillsfar. You have a special way of communicating with others and they seem to be at ease around you. You can invoke your rank to allow you access to a crime scene or to requisition equipment or horses on a temporary basis. When you enter a town or village around Hillsfar you can identify a contact who will give you information on the local rumors and would help you simply because of your desire to get answers and information for anyone wanting to disrupt trade. Note: This feature is a variant of the Soldier feature.',
        },
        {
          id: '829c3543-d341-43f0-bbe5-b771c8d46949',
          name: 'Ear to the Ground',
          conferring_bg: 'Urban Bounty Hunter',
          description:
            'You are in frequent contact with people in the segment of society that your chosen quarries move through. These people might be associated with the criminal underworld, the rough-and-tumble folk of the streets, or members of high society. This connection comes in the form of a contact in any city you visit, a person who provides information about the people and places of the local area.',
        },
        {
          id: 'e1537a07-3f69-4c28-afb9-9d5d09d6bcbd',
          name: 'City Secrets',
          conferring_bg: 'Urchin',
          description:
            'You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.',
        },
        {
          id: '853b59c4-ba0f-4991-8002-e1248b04e760',
          name: 'Uthgardt Heritage',
          conferring_bg: 'Uthgardt Tribe Member',
          description:
            'You have an excellent knowledge of not only your tribe’s territory, but also the terrain and natural resources of the rest of the North. You are familiar enough with any wilderness area that you find twice as much food and water as you normally would when you forage there. Additionally, you can call upon the hospitality of your people, and those folk allied with your tribe, often including members of druid circles, tribes of nomadic elves, the Harpers, and the priesthoods devoted to the gods of the First Circle.',
        },
        {
          id: '6d05b6f5-d467-47cf-aed7-421877dd2425',
          name: 'Kept in Style',
          conferring_bg: 'Waterdhavian Noble',
          description:
            'While you are in Waterdeep or elsewhere in the North, your house sees to your everyday needs. Your name and signet are sufficient to cover most of your expenses;the inns, taverns, and festhalls you frequent are glad to record your debt and send an accounting to your family’ s estate in Waterdeep to settle what you owe.This advantage enables you to live a comfortable lifestyle without having to pay 2 gp a day for it, or reduces the cost of a wealthy or aristocratic lifestyle by that amount.You may not maintain a less affluent lifestyle and use the difference as income— the benefit is a line of credit, not an actual monetary reward.',
        },
      ])
    })
}
