const { v4: uuidv4 } = require('uuid')

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('equipment')
    .del()
    .then(() =>
      knex('equipment').insert([
        {
          id: '7cee9a27-fe75-43cb-b302-2a76407dbbdf',
          type: 'artisan',
          name: "Alchemist's supplies",
        },
        {
          id: 'e34409b3-cdf1-49a1-83a3-b95fd00a333b',
          type: 'artisan',
          name: "Brewer's supplies",
        },
        {
          id: 'bdc000cf-9438-4505-98f0-0da513d38000',
          type: 'artisan',
          name: "Calligrapher's Supplies",
        },
        {
          id: 'aa15f163-46d8-4923-a1e6-c31b7388ab0f',
          type: 'artisan',
          name: "Carpenter's tools",
        },
        {
          id: '3c4b137c-19d3-4c75-8ed4-df68d3e814e4',
          type: 'artisan',
          name: "Cartographer's tools",
        },
        {
          id: '44656898-7377-4dc9-b72b-eab7b0cf8dc0',
          type: 'artisan',
          name: "Cobbler's tools",
        },
        {
          id: 'a4956668-0a1b-4d25-869b-c3717958f7fe',
          type: 'artisan',
          name: "Cook's utensils",
        },
        {
          id: '1b795c4e-2d28-413a-b7c5-48d0800b7029',
          type: 'artisan',
          name: "Glassblower's tools",
        },
        {
          id: '5204df82-7a4d-4891-8e9c-85b053befc85',
          type: 'artisan',
          name: "Jeweler's tools",
        },
        {
          id: 'a52cbd80-ec4a-49eb-ba3e-1a7235867c16',
          type: 'artisan',
          name: "Leatherworker's tools",
        },
        {
          id: 'a0784dbe-0765-4610-9c0a-dcaf50107a4e',
          type: 'artisan',
          name: "Mason's tools",
        },
        {
          id: '37ecea7e-379f-4ada-9a6f-97acd80e7c69',
          type: 'artisan',
          name: "Painter's supplies",
        },
        {
          id: '2702a8e8-e974-405c-92db-f2c1d4a61112',
          type: 'artisan',
          name: "Potter's tools",
        },
        {
          id: 'e00bbd18-4450-41fb-b18e-334fe15b8457',
          type: 'artisan',
          name: "Smith's tools",
        },
        {
          id: 'b0f8af30-e831-46c3-8bf8-54bb633a6480',
          type: 'artisan',
          name: "Tinker's tools",
        },
        {
          id: 'e2629282-340e-4802-838c-e58fc01e40cb',
          type: 'artisan',
          name: "Weaver's tools",
        },
        {
          id: 'edb2fbbb-a107-4a2a-93fa-b0b1b4b107af',
          type: 'artisan',
          name: "Woodcarver's tools",
        },
        {
          id: '2c2eccfd-6bc9-4beb-b133-63f1cf191f67',
          name: 'Bagpipes',
          type: 'instrument',
        },
        {
          id: '3759e664-437a-47c2-bb00-c06c5afb2931',
          name: 'Drum',
          type: 'instrument',
        },
        {
          id: '6fb8c386-d3d7-46e8-85ce-492ee4d4a7c6',
          name: ' Dulcimer ',
          type: 'instrument',
        },
        {
          id: '1a86fc35-14e2-4142-8167-1efb06bfaf19',
          name: 'Flute',
          type: 'instrument',
        },
        {
          id: '29706e2c-2951-4197-bab0-8279573f6cb6',
          name: 'Lute',
          type: 'instrument',
        },
        {
          id: 'f97b4e6e-5caa-49f7-8ade-d4c82e8897a0',
          name: 'Lyre',
          type: 'instrument',
        },
        {
          id: '2b090d36-bf05-4d0f-8c4e-9ce16ad1ec03',
          name: 'Horn',
          type: 'instrument',
        },
        {
          id: '2ea4a0a6-d192-41f6-b19f-37486e1aa208',
          name: 'Pan Flute',
          type: 'instrument',
        },
        {
          id: 'aa4f6631-9cbf-4294-bbff-81b8534c9caa',
          name: 'Shawm',
          type: 'instrument',
        },
        {
          id: 'cf7437df-bc77-4783-bd83-50e4a81a883a',
          name: 'Viol',
          type: 'instrument',
        },
        {
          id: 'e7038cac-c488-4eb2-9cd8-ea8ce91e7a10',
          name: "Navigator's tools",
          type: 'misc',
        },
        {
          id: 'f13d5c11-333a-42ee-9de2-884b3c10fbfa',
          name: "Thieves' tools",
          type: 'misc',
        },
        {
          id: '06969b67-1cbe-4256-b901-4906d22b5965',
          name: 'Vehicles (land)',
          type: 'misc',
        },
        {
          id: '1a853564-95da-4444-b1a0-4ff53dfedab1',
          name: 'Vehicles (water)',
          type: 'misc',
        },
        {
          id: '2d50adde-b874-4092-aa4d-4efaec12fd40',
          name: 'Dice Set',
          type: 'gaming',
        },
        {
          id: 'd54889e9-f803-4d91-bf22-0f099988fcd0',
          name: 'Playing Card Set',
          type: 'gaming',
        },
      ])
    )
