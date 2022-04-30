const { v4: uuidv4 } = require('uuid')

exports.seed = knex =>
  //Deletes ALL existing entries
  knex('race_features')
    .del()
    .then(() =>
      knex('race_features').insert([
        {
          id: uuidv4(),
          race_id: '5e4e4093-2b36-4697-949e-6d3735123c1b',
          racial_feature_id: '21a0d6fe-44e5-47c9-902f-96204790438e',
        },
        {
          id: uuidv4(),
          race_id: '5e4e4093-2b36-4697-949e-6d3735123c1b',
          racial_feature_id: 'e63c655f-4c15-4ebb-85e5-2e08154af09b',
        },
        {
          id: uuidv4(),
          race_id: '41851d13-cbd3-4789-848b-27252caf61b6',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '41851d13-cbd3-4789-848b-27252caf61b6',
          racial_feature_id: '81ac1930-0fb5-4324-b29b-1f461558f3d0',
        },
        {
          id: uuidv4(),
          race_id: '41851d13-cbd3-4789-848b-27252caf61b6',
          racial_feature_id: 'cc3f9f6e-7d51-4592-86c1-3f0eb80512a3',
        },
        {
          id: uuidv4(),
          race_id: '41851d13-cbd3-4789-848b-27252caf61b6',
          racial_feature_id: 'bc377fa4-7c38-4f3e-8f07-f9fbaa532bcd',
        },
        {
          id: uuidv4(),
          race_id: 'b3b5af9e-47f2-4719-9716-4d5732f085e4',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: 'b3b5af9e-47f2-4719-9716-4d5732f085e4',
          racial_feature_id: '8cb75e52-c614-4f29-bde2-9e7f4bd20879',
        },
        {
          id: uuidv4(),
          race_id: 'b3b5af9e-47f2-4719-9716-4d5732f085e4',
          racial_feature_id: '435ed777-165c-41f2-8cc8-23d1c733769a',
        },
        {
          id: uuidv4(),
          race_id: 'b3b5af9e-47f2-4719-9716-4d5732f085e4',
          racial_feature_id: '96516874-b23e-4969-8dfa-ffdab89897d7',
        },
        {
          id: uuidv4(),
          race_id: 'b3b5af9e-47f2-4719-9716-4d5732f085e4',
          racial_feature_id: 'd4630a33-449d-41c7-b6a4-d3bbb792cc80',
        },
        {
          id: uuidv4(),
          race_id: 'ab4307ed-72a2-4e5a-92f1-97cc174501a1',
          racial_feature_id: '127301e3-6e8b-4df1-9864-00e71efb5515',
        },
        {
          id: uuidv4(),
          race_id: 'ab4307ed-72a2-4e5a-92f1-97cc174501a1',
          racial_feature_id: 'a015f688-1918-42cd-b636-708996d83e65',
        },
        {
          id: uuidv4(),
          race_id: 'ab4307ed-72a2-4e5a-92f1-97cc174501a1',
          racial_feature_id: '2a9ffc2f-d873-468c-9328-94939acc5a87',
        },
        {
          id: uuidv4(),
          race_id: 'ab4307ed-72a2-4e5a-92f1-97cc174501a1',
          racial_feature_id: 'af9d8cee-faab-4126-8742-b45128236816',
        },
        {
          id: uuidv4(),
          race_id: 'ab4307ed-72a2-4e5a-92f1-97cc174501a1',
          racial_feature_id: '51251193-8816-4dc6-bf8a-2bf97ac8b6c4',
        },
        {
          id: uuidv4(),
          race_id: '110a3990-12e2-45ef-85e9-77f7eff46428',
          racial_feature_id: '69efb5c4-7e07-4c9d-b54c-8affc5c026ec',
        },
        {
          id: uuidv4(),
          race_id: '110a3990-12e2-45ef-85e9-77f7eff46428',
          racial_feature_id: '4f08b71e-f4a9-4339-8eaa-33a9e414ffdd',
        },
        {
          id: uuidv4(),
          race_id: 'e689cda2-7eef-410b-8fe8-464f8a377172',
          racial_feature_id: 'd097ed5e-fe99-4f7f-a1c6-524feab28943',
        },
        {
          id: uuidv4(),
          race_id: 'e689cda2-7eef-410b-8fe8-464f8a377172',
          racial_feature_id: '72d5715f-ea14-4666-9116-24551ebd7c05',
        },
        {
          id: uuidv4(),
          race_id: 'e689cda2-7eef-410b-8fe8-464f8a377172',
          racial_feature_id: '621419d9-4fcb-4c16-9115-09442fcf242c',
        },
        {
          id: uuidv4(),
          race_id: '9e03571a-0ca4-4ea9-83e0-7f80fc89ece1',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '9e03571a-0ca4-4ea9-83e0-7f80fc89ece1',
          racial_feature_id: '89f4d61c-c2e9-4354-b33e-6db0da0c567b',
        },
        {
          id: uuidv4(),
          race_id: '9e03571a-0ca4-4ea9-83e0-7f80fc89ece1',
          racial_feature_id: 'd71486a1-501f-46e1-a5e6-8fc74966d56c',
        },
        {
          id: uuidv4(),
          race_id: '9e03571a-0ca4-4ea9-83e0-7f80fc89ece1',
          racial_feature_id: '15602812-c8d7-454b-9b9b-d780c0a9bdec',
        },
        {
          id: uuidv4(),
          race_id: '9e03571a-0ca4-4ea9-83e0-7f80fc89ece1',
          racial_feature_id: '6fa2b4a5-4f62-4d1e-b37a-6cf93d44fe13',
        },
        {
          id: uuidv4(),
          race_id: 'c69daeee-af07-4671-ac11-ebe47eab1b77',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: 'c69daeee-af07-4671-ac11-ebe47eab1b77',
          racial_feature_id: 'b742a910-d941-4309-9570-f7053bc51c7c',
        },
        {
          id: uuidv4(),
          race_id: 'c69daeee-af07-4671-ac11-ebe47eab1b77',
          racial_feature_id: 'e28cf224-7ab4-4f27-bda3-4410ff770484',
        },
        {
          id: uuidv4(),
          race_id: 'c69daeee-af07-4671-ac11-ebe47eab1b77',
          racial_feature_id: '82362344-b33b-4938-ba3f-86b775c8bfb2',
        },
        {
          id: uuidv4(),
          race_id: '80e56dfa-c41d-4542-b27a-61a6a2841096',
          racial_feature_id: '1d1c02a1-b4c9-4b32-9b0c-966f7521ead5',
        },
        {
          id: uuidv4(),
          race_id: '80e56dfa-c41d-4542-b27a-61a6a2841096',
          racial_feature_id: '6f951431-e80e-46dd-a186-0884c56cf647',
        },
        {
          id: uuidv4(),
          race_id: '80e56dfa-c41d-4542-b27a-61a6a2841096',
          racial_feature_id: '435ed777-165c-41f2-8cc8-23d1c733769a',
        },
        {
          id: uuidv4(),
          race_id: '80e56dfa-c41d-4542-b27a-61a6a2841096',
          racial_feature_id: 'bb7ffedb-d785-456e-b4af-9aca5f4ed294',
        },
        {
          id: uuidv4(),
          race_id: '18388066-47d0-4d0e-afa9-fd431a7e2ccd',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '18388066-47d0-4d0e-afa9-fd431a7e2ccd',
          racial_feature_id: '2f1f7d0d-7e05-4589-9942-5a5d47302c90',
        },
        {
          id: uuidv4(),
          race_id: '319eea97-74c3-4920-9b8f-4157f8942b72',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '319eea97-74c3-4920-9b8f-4157f8942b72',
          racial_feature_id: '7ca9340a-14af-4790-ab96-c866f9ac988e',
        },
        {
          id: uuidv4(),
          race_id: '319eea97-74c3-4920-9b8f-4157f8942b72',
          racial_feature_id: 'd97f6cdc-5b95-43b3-b65b-66a1139cfa70',
        },
        {
          id: uuidv4(),
          race_id: '48ffd7bb-321d-429b-a66f-2cf9480ec1ff',
          racial_feature_id: '0f619f99-69d3-4662-bc78-c60c65a941ab',
        },
        {
          id: uuidv4(),
          race_id: '48ffd7bb-321d-429b-a66f-2cf9480ec1ff',
          racial_feature_id: '378af3e2-2398-4a50-b18f-53be6e951985',
        },
        {
          id: uuidv4(),
          race_id: '48ffd7bb-321d-429b-a66f-2cf9480ec1ff',
          racial_feature_id: '435ed777-165c-41f2-8cc8-23d1c733769a',
        },
        {
          id: uuidv4(),
          race_id: '48ffd7bb-321d-429b-a66f-2cf9480ec1ff',
          racial_feature_id: 'ec9ea04d-d86d-468b-a879-ef191c401d5e',
        },
        {
          id: uuidv4(),
          race_id: '7573db1c-31fa-44fc-bb63-fdb45a9ded09',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '7573db1c-31fa-44fc-bb63-fdb45a9ded09',
          racial_feature_id: 'e28cf224-7ab4-4f27-bda3-4410ff770484',
        },
        {
          id: uuidv4(),
          race_id: '7573db1c-31fa-44fc-bb63-fdb45a9ded09',
          racial_feature_id: '0e421755-9c06-45fd-8f88-292cc47b40cd',
        },
        {
          id: uuidv4(),
          race_id: '5ecc78ff-c397-4a5a-a550-05f44edd71fd',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '5ecc78ff-c397-4a5a-a550-05f44edd71fd',
          racial_feature_id: '375fcffc-fb4d-4c46-ae6c-26ad8629aed6',
        },
        {
          id: uuidv4(),
          race_id: '5ecc78ff-c397-4a5a-a550-05f44edd71fd',
          racial_feature_id: '0a7e96ca-f0ec-4216-9507-cbf26dd929e1',
        },
        {
          id: uuidv4(),
          race_id: '5ecc78ff-c397-4a5a-a550-05f44edd71fd',
          racial_feature_id: 'f72ca66c-bc63-49cb-8ae6-ad6ab1cf1f43',
        },
        {
          id: uuidv4(),
          race_id: '989fe94e-520a-4280-bd34-c03e85d917e6',
          racial_feature_id: '5f995af6-5e94-404b-9088-f71e69e4dd34',
        },
        {
          id: uuidv4(),
          race_id: '989fe94e-520a-4280-bd34-c03e85d917e6',
          racial_feature_id: '83932fd7-4a91-433d-a0c8-1dd1a90cca72',
        },
        {
          id: uuidv4(),
          race_id: '989fe94e-520a-4280-bd34-c03e85d917e6',
          racial_feature_id: 'df94813e-b098-42fa-ae06-d30684d190e4',
        },
        {
          id: uuidv4(),
          race_id: '40d479b1-ef60-4062-a831-846546188139',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '40d479b1-ef60-4062-a831-846546188139',
          racial_feature_id: 'e7a8aec5-63e0-4fff-9c1b-e1147db7a165',
        },
        {
          id: uuidv4(),
          race_id: '40d479b1-ef60-4062-a831-846546188139',
          racial_feature_id: 'da3ab4db-2cf9-44e0-9904-e27a0f204277',
        },
        {
          id: uuidv4(),
          race_id: 'c0df7858-fe97-47b3-b82f-f5cc264d75c1',
          racial_feature_id: '935f510f-8177-4a72-b8e2-51d3292541cd',
        },
        {
          id: uuidv4(),
          race_id: '1dfbb682-a8d4-4e4d-bdbf-a6a3f435a5df',
          racial_feature_id: '041681a7-b60d-4d37-94ba-51a996391a0a',
        },
        {
          id: uuidv4(),
          race_id: '1dfbb682-a8d4-4e4d-bdbf-a6a3f435a5df',
          racial_feature_id: '124563d0-4f57-48a4-aaeb-6c648419da85',
        },
        {
          id: uuidv4(),
          race_id: '1dfbb682-a8d4-4e4d-bdbf-a6a3f435a5df',
          racial_feature_id: '593de6a7-3a21-4d9c-93a0-78f9d8871979',
        },
        {
          id: uuidv4(),
          race_id: '1dfbb682-a8d4-4e4d-bdbf-a6a3f435a5df',
          racial_feature_id: '33e9dd42-027a-41d2-820b-c64eb9e5d63a',
        },
        {
          id: uuidv4(),
          race_id: 'a4ba775d-ee84-4c1a-b39a-32c1f2536a0b',
          racial_feature_id: '2f4852a0-09a2-4cee-96b9-580e27e48f75',
        },
        {
          id: uuidv4(),
          race_id: 'a4ba775d-ee84-4c1a-b39a-32c1f2536a0b',
          racial_feature_id: '3f581cb4-539a-4b2f-8cd1-43d41740fbaf',
        },
        {
          id: uuidv4(),
          race_id: 'a4ba775d-ee84-4c1a-b39a-32c1f2536a0b',
          racial_feature_id: '9ecc5fb3-3ff9-45b0-90ad-65bc92121465',
        },
        {
          id: uuidv4(),
          race_id: 'cb70cc92-92e1-40d5-bd44-75fabfd7da42',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: 'cb70cc92-92e1-40d5-bd44-75fabfd7da42',
          racial_feature_id: '404e114a-13b6-4c1b-899f-19af93ba8717',
        },
        {
          id: uuidv4(),
          race_id: 'cb70cc92-92e1-40d5-bd44-75fabfd7da42',
          racial_feature_id: '57e93bdb-282e-4a68-9287-c46f17826f24',
        },
        {
          id: uuidv4(),
          race_id: 'cb70cc92-92e1-40d5-bd44-75fabfd7da42',
          racial_feature_id: '0d12dc49-cda4-4683-a0d0-744233c45121',
        },
        {
          id: uuidv4(),
          race_id: '332e0fbf-4dfd-47cf-92b7-e80941b4ca6d',
          racial_feature_id: '385c995d-58b7-40bc-9a26-0988605a6fb2',
        },
        {
          id: uuidv4(),
          race_id: '332e0fbf-4dfd-47cf-92b7-e80941b4ca6d',
          racial_feature_id: '4c94a72a-4513-498f-9363-94b03fa72b22',
        },
        {
          id: uuidv4(),
          race_id: '332e0fbf-4dfd-47cf-92b7-e80941b4ca6d',
          racial_feature_id: 'e3552101-6da8-4433-bf7d-f590f1b59422',
        },
        {
          id: uuidv4(),
          race_id: '332e0fbf-4dfd-47cf-92b7-e80941b4ca6d',
          racial_feature_id: '1aa886d4-d005-4ec7-93fd-b70cb494dc8e',
        },
        {
          id: uuidv4(),
          race_id: '332e0fbf-4dfd-47cf-92b7-e80941b4ca6d',
          racial_feature_id: '59bb6cd9-a097-4453-86f3-a4b0ff29526d',
        },
        {
          id: uuidv4(),
          race_id: '332e0fbf-4dfd-47cf-92b7-e80941b4ca6d',
          racial_feature_id: 'af837444-0de4-4224-8aeb-488e7436fbe0',
        },
        {
          id: uuidv4(),
          race_id: '332e0fbf-4dfd-47cf-92b7-e80941b4ca6d',
          racial_feature_id: 'd1fdb06a-8796-4c42-8308-b2255a59cb2b',
        },
        {
          id: uuidv4(),
          race_id: 'e36e6306-8a80-47ff-9ba2-0ecdb891dd1b',
          racial_feature_id: '435ed777-165c-41f2-8cc8-23d1c733769a',
        },
        {
          id: uuidv4(),
          race_id: 'e36e6306-8a80-47ff-9ba2-0ecdb891dd1b',
          racial_feature_id: '488e0210-9fc6-46cb-abca-8c25075c2d25',
        },
        {
          id: uuidv4(),
          race_id: 'e36e6306-8a80-47ff-9ba2-0ecdb891dd1b',
          racial_feature_id: '2eb7e720-b763-4fe2-a830-7b807cf05a68',
        },
        {
          id: uuidv4(),
          race_id: 'e36e6306-8a80-47ff-9ba2-0ecdb891dd1b',
          racial_feature_id: 'c513f164-16eb-4bfe-aa14-37dee25c43a8',
        },
        {
          id: uuidv4(),
          race_id: 'e36e6306-8a80-47ff-9ba2-0ecdb891dd1b',
          racial_feature_id: '6c0b59b7-d80f-44b0-a3d8-e5562ca66568',
        },
        {
          id: uuidv4(),
          race_id: 'b0f39e91-cafe-4a3a-8cdc-99380549d752',
          racial_feature_id: '5e366898-4abb-41da-aedd-1edbe6a49929',
        },
        {
          id: uuidv4(),
          race_id: 'b0f39e91-cafe-4a3a-8cdc-99380549d752',
          racial_feature_id: '2aaf6363-91bd-4f06-ae7d-ea73a2066a08',
        },
        {
          id: uuidv4(),
          race_id: 'b0f39e91-cafe-4a3a-8cdc-99380549d752',
          racial_feature_id: 'a6c45bec-b9e6-453a-9462-ecc24d21d7e1',
        },
        {
          id: uuidv4(),
          race_id: 'b0f39e91-cafe-4a3a-8cdc-99380549d752',
          racial_feature_id: '1cca014c-f43d-4f14-80c8-58d7bd8634d7',
        },
        {
          id: uuidv4(),
          race_id: '75a00d52-43dc-4b4c-95ff-e6b7f2027e34',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '75a00d52-43dc-4b4c-95ff-e6b7f2027e34',
          racial_feature_id: '7983e9b8-9b60-4d1e-a12f-6fc6d8015ddf',
        },
        {
          id: uuidv4(),
          race_id: '75a00d52-43dc-4b4c-95ff-e6b7f2027e34',
          racial_feature_id: '375fcffc-fb4d-4c46-ae6c-26ad8629aed6',
        },
        {
          id: uuidv4(),
          race_id: '75a00d52-43dc-4b4c-95ff-e6b7f2027e34',
          racial_feature_id: '435ed777-165c-41f2-8cc8-23d1c733769a',
        },
        {
          id: uuidv4(),
          race_id: '6257bd86-a1b1-4c22-9175-4537eb87e9f2',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '6257bd86-a1b1-4c22-9175-4537eb87e9f2',
          racial_feature_id: 'e52477b4-05d5-43fc-bcac-6d81d77ff33c',
        },
        {
          id: uuidv4(),
          race_id: '6257bd86-a1b1-4c22-9175-4537eb87e9f2',
          racial_feature_id: '63b5b71b-6a4f-4e8b-92be-3bee918a1c63',
        },
        {
          id: uuidv4(),
          race_id: 'f3a8c0af-c4e6-4279-b3ac-457426cdcbe0',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: 'f3a8c0af-c4e6-4279-b3ac-457426cdcbe0',
          racial_feature_id: 'e223839f-dca0-4937-b07e-2e064942411e',
        },
        {
          id: uuidv4(),
          race_id: 'f3a8c0af-c4e6-4279-b3ac-457426cdcbe0',
          racial_feature_id: '10afb6ef-1de2-48cf-a49a-427737c0db40',
        },
        {
          id: uuidv4(),
          race_id: '46711c22-b9eb-4fa1-bb41-ce46636056fd',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '46711c22-b9eb-4fa1-bb41-ce46636056fd',
          racial_feature_id: '90721973-05c5-41d5-bebb-15d375e268c6',
        },
        {
          id: uuidv4(),
          race_id: '46711c22-b9eb-4fa1-bb41-ce46636056fd',
          racial_feature_id: '51ecc7bd-aeee-4d4f-b047-b9c5605cd94d',
        },
        {
          id: uuidv4(),
          race_id: '46711c22-b9eb-4fa1-bb41-ce46636056fd',
          racial_feature_id: 'ed67ba2d-248c-4b2a-8711-10b166005e0e',
        },
        {
          id: uuidv4(),
          race_id: '4efcfe6b-c391-49ea-9120-356ac9a909e1',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '4efcfe6b-c391-49ea-9120-356ac9a909e1',
          racial_feature_id: '28a1244f-854b-47e1-adfa-2fe1bef64cc0',
        },
        {
          id: uuidv4(),
          race_id: '7ebf4f60-e405-4e1f-a70f-ccec81864abc',
          racial_feature_id: '3bc67749-b546-4b85-8492-0c0317aaf931',
        },
        {
          id: uuidv4(),
          race_id: '7ebf4f60-e405-4e1f-a70f-ccec81864abc',
          racial_feature_id: '1aa886d4-d005-4ec7-93fd-b70cb494dc8e',
        },
        {
          id: uuidv4(),
          race_id: '7ebf4f60-e405-4e1f-a70f-ccec81864abc',
          racial_feature_id: 'e5d89d99-20cb-4e2a-adb3-8376f07f8458',
        },
        {
          id: uuidv4(),
          race_id: '7ebf4f60-e405-4e1f-a70f-ccec81864abc',
          racial_feature_id: 'f9770871-9a65-40da-b9fe-73996c7a7a0f',
        },
        {
          id: uuidv4(),
          race_id: '7ebf4f60-e405-4e1f-a70f-ccec81864abc',
          racial_feature_id: 'b630f3a0-4571-431f-b888-33a9d4d0a972',
        },
        {
          id: uuidv4(),
          race_id: '7bfd2a5b-cea3-406c-a566-f97de25e8d99',
          racial_feature_id: '385c995d-58b7-40bc-9a26-0988605a6fb2',
        },
        {
          id: uuidv4(),
          race_id: '7bfd2a5b-cea3-406c-a566-f97de25e8d99',
          racial_feature_id: 'b7f3a3b9-7f50-474e-86d0-06a9fddf86b8',
        },
        {
          id: uuidv4(),
          race_id: '7bfd2a5b-cea3-406c-a566-f97de25e8d99',
          racial_feature_id: '64493da8-d844-4751-a526-9df965671665',
        },
        {
          id: uuidv4(),
          race_id: '7bfd2a5b-cea3-406c-a566-f97de25e8d99',
          racial_feature_id: '246174a1-3c1d-43e9-8e86-000222713b7a',
        },
        {
          id: uuidv4(),
          race_id: '55d73ea6-5c75-4eea-af2d-db1684c53dc0',
          racial_feature_id: '6c9d9b55-f097-42d7-ac11-2b7eecdc8b6b',
        },
        {
          id: uuidv4(),
          race_id: '55d73ea6-5c75-4eea-af2d-db1684c53dc0',
          racial_feature_id: '71062cce-cbfd-4d08-ab81-0771602b6e33',
        },
        {
          id: uuidv4(),
          race_id: '55d73ea6-5c75-4eea-af2d-db1684c53dc0',
          racial_feature_id: '58285e41-b1e0-4f0d-b589-429f1541c8a5',
        },
        {
          id: uuidv4(),
          race_id: 'cf8566dc-b542-4ead-b7e9-e6d9cb2ebd68',
          racial_feature_id: '9367bf37-ec73-4856-8609-ad6771a4230b',
        },
        {
          id: uuidv4(),
          race_id: 'cf8566dc-b542-4ead-b7e9-e6d9cb2ebd68',
          racial_feature_id: '621fdb8f-bb41-4db9-a505-a0ccaed3db55',
        },
        {
          id: uuidv4(),
          race_id: 'cf8566dc-b542-4ead-b7e9-e6d9cb2ebd68',
          racial_feature_id: 'ab56c7d0-9d13-46a8-9232-548c2ec5befb',
        },
        {
          id: uuidv4(),
          race_id: 'cf8566dc-b542-4ead-b7e9-e6d9cb2ebd68',
          racial_feature_id: '63f4d94a-3d41-4a5c-9497-ed57eced48cf',
        },
        {
          id: uuidv4(),
          race_id: '84fb66a4-ef2f-4077-9db8-bb21d0eb4555',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          race_id: '84fb66a4-ef2f-4077-9db8-bb21d0eb4555',
          racial_feature_id: 'f427421f-8d76-44fe-8b69-3a0026641f1e',
        },
        {
          id: uuidv4(),
          race_id: '84fb66a4-ef2f-4077-9db8-bb21d0eb4555',
          racial_feature_id: 'fab5f7df-a99a-4f12-86ff-8f371f407931',
        },
        {
          id: uuidv4(),
          race_id: '84fb66a4-ef2f-4077-9db8-bb21d0eb4555',
          racial_feature_id: '948afcf9-046e-4864-a1fe-af7e6b85503b',
        },
      ])
    )
