const { v4: uuidv4 } = require('uuid')

exports.seed = knex =>
  //Deletes ALL existing entries
  knex('races')
    .del()
    .then(() =>
      knex('races').insert([
        {
          id: '5e4e4093-2b36-4697-949e-6d3735123c1b',
          name: 'Aarakocra',
          summary:
            'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
          alignment: null,
          asis: '{"options":[{"Dex":2,"Wis":1}]}',
          lifespan:
            'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
          movement: 25,
          languages: ['Common', 'Aarakocra', 'Auran'],
          size: 'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
        },
        {
          id: '41851d13-cbd3-4789-848b-27252caf61b6',
          name: 'Aasimar',
          summary:
            'Aasimar are placed in the world to serve as guardians of law and good. Their patrons expect them to strike at evil, lead by example, and further the cause of justice.',
          alignment:
            'Imbued with celestial power, most aasimar are good. Outcast aasimar are most often neutral or even evil.',
          asis: '{"options":[{"Cha":2}]}',
          lifespan:
            'Aasimar mature at the same rate as humans, but they can live up to 160 years.',
          movement: 30,
          languages: ['Common', 'Celestial'],
          size: 'Aasimar have the same range of height and weight as humans.',
        },
        {
          id: 'b3b5af9e-47f2-4719-9716-4d5732f085e4',
          name: 'Bugbear',
          summary:
            'Bugbears feature in the nightmare tales of many races — great, hairy beasts that creep through the shadows as quiet as cats.',
          alignment:
            'Bugbears endure a harsh existence that demands each of them to remain self-sufficient, even at the expense of their fellows. They tend to be chaotic evil.',
          asis: '{"options":[{"Str":2},{"Dex":1}]}',
          lifespan:
            'Bugbears reach adulthood at age 16 and live up to 80 years.',
          movement: 30,
          languages: ['Common', 'Goblin'],
          size: 'Bugbears are between 6 and 8 feet tall and weigh between 250 and 350 pounds. Your size is Medium.',
        },
        {
          id: 'ab4307ed-72a2-4e5a-92f1-97cc174501a1',
          name: 'Centaur',
          summary:
            'The upper bodies of centaurs are comparable to human torsos in size, and their lower equine bodies average about 4 feet tall at the withers. They fill similar roles as cavalry warriors, messengers, outriders, and scouts.',
          alignment:
            'Centaurs are inclined toward neutrality. Those who join the Selesnya are more often neutral good, while those who join the Gruul are typically chaotic neutral.',
          asis: '{"options":[{"Str":2},{"Wis":1}]}',
          lifespan: 'Centaurs mature and age at about the same rate as humans.',
          movement: 40,
          languages: ['Common', 'Sylvan'],
          size: 'Centaurs stand between 6 and 7 feet tall, with their equine bodies reaching about 4 feet at the withers. Your size is Medium.',
        },
        {
          id: '110a3990-12e2-45ef-85e9-77f7eff46428',
          name: 'Changeling',
          summary:
            'A changeling can shift its face and form with a thought as a form of artistic and emotional expression.',
          alignment:
            'Changelings tend toward pragmatic neutrality, and few changelings embrace evil.',
          asis: '{"options":[{"Cha":2},{"ANY":1}]}',
          lifespan:
            'Changelings mature slightly faster than humans but share a similar lifespan—typically a century or less. While a changeling can transform to conceal their age, the effects of aging affect them similarly to humans.',
          movement: 30,
          languages: ['Common', '2'],
          size: 'Your size is Medium.',
        },
        {
          id: 'e689cda2-7eef-410b-8fe8-464f8a377172',
          name: 'Dragonborn',
          summary:
            'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.',
          alignment:
            'Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil (represented by Bahamut and Tiamat, respectively). Most dragonborn are good, but those who side with Tiamat can be terrible villains.',
          asis: '{"options":[{"Str":2},{"Cha":1}]}',
          lifespan:
            'Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.',
          movement: 30,
          languages: ['Common', 'Draconic'],
          size: 'Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.',
        },
        {
          id: '9e03571a-0ca4-4ea9-83e0-7f80fc89ece1',
          name: 'Dwarf',
          summary:
            'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.',
          alignment:
            'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
          asis: '{"options":[{"Con":1}]}',
          lifespan:
            'Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.',
          movement: 25,
          languages: ['Common', 'Dwarvish'],
          size: 'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.',
        },
        {
          id: 'c69daeee-af07-4671-ac11-ebe47eab1b77',
          name: 'Elf',
          summary:
            'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.',
          alignment:
            'Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.',
          asis: '{"options":[{"Dex":2}]}',
          lifespan:
            'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
          movement: 30,
          languages: ['Common', 'Elvish'],
          size: 'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
        },
        {
          id: '80e56dfa-c41d-4542-b27a-61a6a2841096',
          name: 'Firbolg',
          summary:
            'Firbolg tribes cloister in remote forest strongholds, preferring to spend their days in quiet harmony with the woods.',
          alignment:
            'As people who follow the rhythm of nature and see themselves as its caretakers, firbolg are typically neutral good. Evil firbolg are rare and are usually the sworn enemies of the rest of their kind.',
          asis: '{"options":[{"Wis":2},{"Str":1}]}',
          lifespan:
            'As humanoids related to the fey, firbolg have long lifespans. A firbolg reaches adulthood around 30, and the oldest of them can live for 500 years.',
          movement: 30,
          languages: ['Common', 'Elvish', 'Giant'],
          size: 'Firbolg are between 7 and 8 feet tall and weigh between 240 and 300 pounds. Your size is Medium.',
        },
        {
          id: 'bc57ace7-cb83-42ea-a2e1-6d103a17ecfb',
          name: 'Genasi',
          summary:
            'Genasi carry the power of the elemental planes of air, earth, fire, and water in their blood.',
          alignment:
            'Independent and self-reliant, genasi tend toward a neutral alignment.',
          asis: '{"options":[{"Con":2}]}',
          lifespan:
            'Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.',
          movement: 30,
          languages: ['Common', 'Primordial'],
          size: 'Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.',
        },
        {
          id: 'c25b67ac-7cde-4bb3-87dc-6f87af466d75',
          name: 'Gith',
          summary:
            'Long ago, the gith rose up to overthrow the mind flayers that held them in servitude, but two factions arose that remain bitter enemies today.',
          alignment:
            'Githyanki tend toward lawful evil. They are aggressive and arrogant, and they remain the faithful servants of their lich-queen, Vlaakith. Renegade githyanki tend toward chaos.',
          asis: '{"options":[{"Int":1}]}',
          lifespan:
            'Gith reach adulthood in their late teens and live for about a century.',
          movement: 30,
          languages: ['Common', 'Gith'],
          size: 'Gith are taller and leaner than humans, with most a slender 6 feet in height.',
        },
        {
          id: '18388066-47d0-4d0e-afa9-fd431a7e2ccd',
          name: 'Gnome',
          summary:
            'A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.',
          alignment:
            'Svirfneblin believe that survival depends on avoiding entanglements with other creatures and not making enemies, so they favor neutral alignments. They rarely wish others ill, and they are unlikely to take risks on behalf of others.',
          asis: '{"options":[{"Int":2}]}',
          lifespan: '',
          movement: 25,
          languages: ['Common', 'Gnomish'],
          size: 'Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.',
        },
        {
          id: '319eea97-74c3-4920-9b8f-4157f8942b72',
          name: 'Goblin',
          summary:
            'Goblins occupy an uneasy place in a dangerous world, and they react by lashing out at any creatures they believe they can bully.',
          alignment:
            'Goblins are typically neutral evil, as they care only for their own needs. A few goblins might tend toward good or neutrality, but only rarely.',
          asis: '{"options":[{"Dex":2},{"Con":1}]}',
          lifespan: 'Goblins reach adulthood at age 8 and live up to 60 years.',
          movement: 30,
          languages: ['Common', 'Goblin'],
          size: 'Goblins are between 3 and 4 feet tall and weigh between 40 and 80 pounds. Your size is Small.',
        },
        {
          id: '48ffd7bb-321d-429b-a66f-2cf9480ec1ff',
          name: 'Goliath',
          summary:
            'Strong and reclusive, every day brings a new challenge to a goliath.',
          alignment:
            'Goliath society, with its clear roles and tasks, has a strong lawful bent. The goliath sense of fairness, balanced with an emphasis on self- sufficiency and personal accountability, pushes them toward neutrality.',
          asis: '{"options":[{"Str":2},{"Con":1}]}',
          lifespan:
            'Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century.',
          movement: 30,
          languages: ['Common', 'Giant'],
          size: 'Goliaths are between 7 and 8 feet tall and weigh between 280 and 340 pounds. Your size is Medium.',
        },
        {
          id: '7573db1c-31fa-44fc-bb63-fdb45a9ded09',
          name: 'Half-elf',
          summary:
            'Half-elves combine what some say are the best qualities of their elf and human parents.',
          alignment:
            'Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable.',
          asis: '{"options":[{"Cha":2},{"ANY":1},{"ANY":1}]}',
          lifespan:
            'Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.',
          movement: 30,
          languages: ['Common', 'Elvish', '1'],
          size: 'Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.',
        },
        {
          id: '5ecc78ff-c397-4a5a-a550-05f44edd71fd',
          name: 'Half-orc',
          summary:
            'Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.',
          alignment:
            'Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.',
          asis: '{"options":[{"Str":2},{"Con":1}]}',
          lifespan:
            'Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.',
          movement: 30,
          languages: ['Common', 'Orc'],
          size: 'Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.',
        },
        {
          id: '989fe94e-520a-4280-bd34-c03e85d917e6',
          name: 'Halfling',
          summary:
            'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.',
          alignment:
            'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.',
          asis: '{"options":[{"Dex":2}]}',
          lifespan:
            'A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.',
          movement: 25,
          languages: ['Common', 'Halfling'],
          size: 'Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.',
        },
        {
          id: '40d479b1-ef60-4062-a831-846546188139',
          name: 'Hobgoblin',
          summary:
            'War is the lifeblood of hobgoblins. Its glories are the dreams that inspire them. Its horrors don’t feature in their nightmares.',
          alignment:
            'Hobgoblin society is built on fidelity to a rigid, unforgiving code of conduct. As such, they tend toward lawful evil.',
          asis: '{"options":[{"Con":2},{"Int":1}]}',
          lifespan:
            'Hobgoblins mature at the same rate as humans and have lifespans similar in length to theirs.',
          movement: 30,
          languages: ['Common', 'Goblin'],
          size: 'Hobgoblins are between 5 and 6 feet tall and weigh between 150 and 200 pounds. Your size is Medium.',
        },
        {
          id: 'c11fd9b4-98d8-4dd7-8c46-601aff1f9820',
          name: 'Human',
          summary:
            'Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.',
          alignment:
            'Humans tend toward no particular alignment. The best and the worst are found among them.',
          asis: '{"options":[{"Str":1},{"Dex":1},{"Con":1},{"Int":1},{"Wis":1},{"Cha":1}]}',
          lifespan:
            'Humans reach adulthood in their late teens and live less than a century.',
          movement: 30,
          languages: ['Common', '1'],
          size: 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
        },
        {
          id: 'c0df7858-fe97-47b3-b82f-f5cc264d75c1',
          name: 'Human Variant',
          summary:
            'Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds. If your campaign uses the optional feat rules from the Player’s Handbook, your Dungeon Master might allow these variant traits, all of which replace the human’s Ability Score Increase trait.',
          alignment:
            'Humans tend toward no particular alignment. The best and the worst are found among them.',
          asis: '{"options":[{"ANY":2}, {"FEAT":1}]}',
          lifespan:
            'Humans reach adulthood in their late teens and live less than a century.',
          movement: 30,
          languages: ['Common', '1'],
          size: 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
        },
        {
          id: '1dfbb682-a8d4-4e4d-bdbf-a6a3f435a5df',
          name: 'Kalashtar',
          summary:
            'The kalashtar are a compound people created from the union of humanity and renegade spirits from the plane of dreams.',
          alignment:
            'The noble spirit tied to a kalashtar drives it toward lawful and good behavior. Most kalashtar combine strong self-discipline with compassion for all beings, but some kalashtar resist the virtuous influence of their spirit.',
          asis: '{"options":[{"Wis":2},{"Cha":1}]}',
          lifespan: 'Kalashtar mature and age at the same rate as humans.',
          movement: 30,
          languages: ['Common', 'Quori', '1'],
          size: 'Your size is Medium.',
        },
        {
          id: 'a4ba775d-ee84-4c1a-b39a-32c1f2536a0b',
          name: 'Kenku',
          summary:
            'Haunted by an ancient crime that robbed them of their wings, the kenku wander the world as vagabonds and burglars who live at the edge of human society.',
          alignment:
            'Kenku are chaotic creatures, rarely making enduring commitments, and they care mostly for preserving their own hides. They are generally chaotic neutral in outlook.',
          asis: '{"options":[{"Dex":2},{"Wis":1}]}',
          lifespan:
            'Kenku have shorter lifespans than humans. They reach maturity at about 12 years old and can live to 60.',
          movement: 30,
          languages: ['Common', 'Auran'],
          size: 'Kenku are around 5 feet tall and weigh between 90 and 120 pounds. Your size is Medium.',
        },
        {
          id: 'cb70cc92-92e1-40d5-bd44-75fabfd7da42',
          name: 'Kobold',
          summary:
            'Kobolds are typically timid and shy away from conflict, but they are dangerous and vicious if cornered.',
          alignment:
            'Kobolds are fundamentally selfish, making them evil, but their reliance on the strength of their group makes them trend toward law.',
          asis: '{"options":[{"Dex":2},{"Str":-2}]}',
          lifespan:
            'Kobolds reach adulthood at age 6 and can live up to 120 years but rarely do so.',
          movement: 30,
          languages: ['Common', 'Draconic'],
          size: 'Kobolds are between 2 and 3 feet tall and weigh between 25 and 35 pounds. Your size is Small.',
        },
        {
          id: '332e0fbf-4dfd-47cf-92b7-e80941b4ca6d',
          name: 'Lizardfolk',
          summary:
            'Lizardfolk possess an alien and inscrutable mindset, their desires and thoughts driven by a different set of basic principles than those of warm-blooded creatures.',
          alignment:
            'Most lizardfolk are neutral. They see the world as a place of predators and prey, where life and death are natural processes. They wish only to survive, and prefer to leave other creatures to their own devices.',
          asis: '{"options":[{"Con":2},{"Wis":1}]}',
          lifespan:
            'Lizardfolk reach maturity around age 14 and rarely live longer than 60 years.',
          movement: 30,
          languages: [],
          size: 'Lizardfolk are a little bulkier and taller than humans, and their colorful frills make them appear even larger. Your size is Medium.',
        },
        {
          id: 'e36e6306-8a80-47ff-9ba2-0ecdb891dd1b',
          name: 'Loxodon',
          summary: 'Humanoid elephants, loxodons are strong, calm, and wise.',
          alignment:
            'Most loxodons are lawful, believing in the value of a peaceful, ordered life. They also tend toward good.',
          asis: '{"options":[{"Con":2},{"Wis":1}]}',
          lifespan:
            'Loxodons physically mature at the same rate as humans, but they live about 450 years. They highly value the weight of wisdom and experience and are considered young until they reach the age of 60.',
          movement: 30,
          languages: ['Common', 'Loxodon'],
          size: 'Loxodons stand between 7 and 8 feet tall. Their massive bodies weigh between 300 and 400 pounds. Your size is Medium.',
        },
        {
          id: 'b0f39e91-cafe-4a3a-8cdc-99380549d752',
          name: 'Minotaur',
          summary:
            'The minotaurs of Ravnica are strong in body, dedication, and courage. They are at home on the battlefield, willing to fight for their various causes.',
          alignment:
            'Most minotaurs who join the Boros Legion lean toward lawful alignments, while those associated with the Cult of Rakdos or the Gruul Clans tend toward chaotic alignments.',
          asis: '{"options":[{"Str":2},{"Con":1}]}',
          lifespan: 'Orcs reach adulthood at age 12 and live up to 50 years.',
          movement: 30,
          languages: ['Common', 'Minotaur'],
          size: 'Minotaurs average over 6 feet in height, and they have stocky builds. Your size is Medium.',
        },
        {
          id: '75a00d52-43dc-4b4c-95ff-e6b7f2027e34',
          name: 'Orc',
          summary:
            'Orcs live a life that has no place for weakness, and every warrior must be strong enough to take what is needed by force.',
          alignment:
            'Orcs are vicious raiders, who believe that the world should be theirs. They also respect strength above all else and believe the strong must bully the weak to ensure that weakness does not spread like a disease. They are usually chaotic evil.',
          asis: '{"options":[{"Str":2},{"Con":1}]}',
          lifespan: 'Orcs reach adulthood at age 12 and live up to 50 years.',
          movement: 30,
          languages: ['Common', 'Orc'],
          size: 'Orcs are usually over 6 feet tall and weigh between 230 and 280 pounds. Your size is Medium.',
        },
        {
          id: '6257bd86-a1b1-4c22-9175-4537eb87e9f2',
          name: 'Shifter',
          summary:
            'Shifters - sometimes called the weretouched - are humanoids with a bestial aspect.',
          alignment:
            'Shifters tend toward neutrality, being more focused on survival than concepts of good and evil. A love of personal freedom can drive shifters toward chaotic alignments.',
          asis: '{"options":[]}',
          lifespan:
            'Shifters are quick to mature both physically and emotionally, reaching young adulthood at age 10. They rarely live to be more than 70 years old.',
          movement: 30,
          languages: [],
          size: 'Your size is Medium. ',
        },
        {
          id: 'f3a8c0af-c4e6-4279-b3ac-457426cdcbe0',
          name: 'Simic Hybrid',
          summary:
            'The Simic Combine uses magic to transfer the traits of animals into humans, elves, and vedalken.',
          alignment:
            'Most hybrids share the generally neutral outlook of the Simic Combine. They are more interested in scientific research and the standing of their guild than in moral or ethical questions. Those who leave the Combine, however, often do so because their philosophical outlook and alignment are more in line with a different guild’s.',
          asis: '{"options":[{"Con":2},{"ANY":1}]}',
          lifespan:
            'Hybrids begin their lives as adult humans, elves, or vedalken. They age at a slightly accelerated rate, so their maximum life spans are probably reduced somewhat. The Guardian Project has not been operating long enough to observe the full effect of this phenomenon.',
          movement: 30,
          languages: ['Common', 'Elvish (or Vedalken)'],
          size: 'Your size is Medium, within the normal range of your humanoid base race.',
        },
        {
          id: '46711c22-b9eb-4fa1-bb41-ce46636056fd',
          name: 'Tabaxi',
          summary:
            'Hailing from a strange and distant land, wandering tabaxi are catlike humanoids driven by curiosity to collect interesting artifacts, gather tales and stories, and lay eyes on all the world’s wonders.',
          alignment:
            'Tabaxi tend toward chaotic alignments, as they let impulse and fancy guide their decisions. They are rarely evil, with most of them driven by curiosity rather than greed or other dark impulses.',
          asis: '{"options":[{"Dex":2},{"Cha":1}]}',
          lifespan: 'Tabaxi have lifespans equivalent to humans.',
          movement: 30,
          languages: [],
          size: 'Tabaxi are taller on average than humans and relatively slender. Your size is Medium.',
        },
        {
          id: '4efcfe6b-c391-49ea-9120-356ac9a909e1',
          name: 'Tiefling',
          summary:
            'To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.',
          alignment:
            'Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.',
          asis: '{"options":[]}',
          lifespan:
            'Tieflings mature at the same rate as humans but live a few years longer.',
          movement: 30,
          languages: ['Common', 'Infernal'],
          size: 'Tieflings are about the same size and build as humans. Your size is Medium.',
        },
        {
          id: '7ebf4f60-e405-4e1f-a70f-ccec81864abc',
          name: 'Tortle',
          summary:
            'What many tortles consider a simple life, others might call a life of adventure. They are nomad survivalists eager to explore the wilderness.',
          alignment:
            'Tortles tend to lead orderly, ritualistic lives. They develop customs and routines, becoming more set in their ways as they age. Most are lawful good. A few can be selfish and greedy, tending more toward evil, but it’s unusual for a tortle to shuck off order in favor of chaos.',
          asis: '{"options":[{"Str":2},{"Wis":1}]}',
          lifespan:
            'Young tortles crawl for a few weeks after birth before learning to walk on two legs. They reach adulthood by the age of 15 and live an average of 50 years.',
          movement: 30,
          languages: ['Common', 'Aquan'],
          size: 'Tortle adults stand 5 to 6 feet tall and average 450 pounds. Their shells account for roughly one-third of their weight. Your size is Medium.',
        },
        {
          id: '7bfd2a5b-cea3-406c-a566-f97de25e8d99',
          name: 'Triton',
          summary:
            'Long-established guardians of the deep ocean floor, in recent years the noble tritons have become increasingly active in the world above.',
          alignment:
            'Tritons tend toward lawful good. As guardians of the darkest reaches of the sea, their culture pushes them toward order and benevolence.',
          asis: '{"options":[{"Str":1},{"Con":1}]}',
          lifespan:
            'Tritons reach maturity around age 15 and can live up to 200 years.',
          movement: 30,
          languages: ['Common', 'Primordial'],
          size: 'Tritons are slightly shorter than humans, averaging about 5 feet tall. Your size is Medium.',
        },
        {
          id: '55d73ea6-5c75-4eea-af2d-db1684c53dc0',
          name: 'Vedalken',
          summary:
            'The blue-skinned vedalken strive for perfection above all else.',
          alignment: 'Vedalken are usually lawful and non-evil.',
          asis: '{"options":[{"Int":2},{"Wis":1}]}',
          lifespan:
            'Vedalken mature slower than humans do, reaching maturity around age 40. Their life span is typically 350 years, with some living to the age of 500.',
          movement: 30,
          languages: ['Common', 'Vedlaken', 'ANY'],
          size: 'Tall and slender, Vedalken stand 6 to 6½ feet tall on average and usually weigh less than 200 pounds. Your size is Medium.',
        },
        {
          id: 'cf8566dc-b542-4ead-b7e9-e6d9cb2ebd68',
          name: 'Warforged',
          summary:
            'Warforged are made from wood and metal, but they can feel pain and emotion. Built as weapons, they must now find a purpose beyond war.',
          alignment:
            'Most warforged take comfort in order and discipline, tending toward law and neutrality. But some have absorbed the morality, or lack thereof, of the beings with which they served.',
          asis: '{"options":[{"Con":2},{"ANY":1}]}',
          lifespan:
            'A typical warforged is between two and thirty years old. The maximum warforged lifespan remains a mystery; so far, warforged have shown no signs of deterioration due to age. You are immune to magical aging effects.',
          movement: 30,
          languages: ['Common', 'ANY'],
          size: 'Your size is Medium.',
        },
        {
          id: '84fb66a4-ef2f-4077-9db8-bb21d0eb4555',
          name: 'Yuan-ti Pureblood',
          summary:
            'The serpent creatures known as yuan-ti are all that remains of an ancient, decadent human empire.',
          alignment:
            'Purebloods are devoid of emotion and see others as tools to manipulate. They care little for law or chaos and are typically neutral evil.',
          asis: '{"options":[{"Cha":2},{"Int":1}]}',
          lifespan:
            'Purebloods mature at the same rate as humans and have lifespans similar in length to theirs.',
          movement: 30,
          languages: ['Common', 'Abyssal', 'Draconic'],
          size: 'Purebloods match humans in average size and weight. Your size is Medium.',
        },
      ])
    )
