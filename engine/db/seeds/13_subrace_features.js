const { v4: uuidv4 } = require('uuid')

exports.seed = knex =>
  //Deletes ALL existing entries
  knex('subrace_features')
    .del()
    .then(() =>
      knex('subrace_features').insert([
        {
          id: uuidv4(),
          subrace_id: 'c3066baa-8405-4fe4-80d8-b5979b808e45',
          racial_feature_id: '0ae5fbb2-9ba9-47f5-84b9-a46c700e088c',
        },
        {
          id: uuidv4(),
          subrace_id: '7ce708fb-f951-4bcc-b7b7-03296492e06f',
          racial_feature_id: 'cdbbdb4f-7904-4f98-9c96-b70f47031262',
        },
        {
          id: uuidv4(),
          subrace_id: 'b9cce9d0-987b-4425-b8ff-513dacd38e2d',
          racial_feature_id: '401f3662-5e14-4807-8b00-123f394c75e7',
        },
        {
          id: uuidv4(),
          subrace_id: '0086bb1d-dd67-4eec-bc71-bcc348175953',
          racial_feature_id: '099590de-e0ac-4eb1-ac7f-55c870fcfb68',
        },
        {
          id: uuidv4(),
          subrace_id: 'c98c7952-afcb-4356-a1ea-13314897ed01',
          racial_feature_id: 'd7328166-8904-4d32-b903-6863780fb5b3',
        },
        {
          id: uuidv4(),
          subrace_id: 'c98c7952-afcb-4356-a1ea-13314897ed01',
          racial_feature_id: 'f8927d61-73c8-49fa-aebf-43a0c96c2635',
        },
        {
          id: uuidv4(),
          subrace_id: 'c98c7952-afcb-4356-a1ea-13314897ed01',
          racial_feature_id: 'a9040021-b138-4c68-9344-419368dfc6d9',
        },
        {
          id: uuidv4(),
          subrace_id: 'c98c7952-afcb-4356-a1ea-13314897ed01',
          racial_feature_id: '31cb4b93-db8c-43f6-8d6c-4c9916cb0056',
        },
        {
          id: uuidv4(),
          subrace_id: 'c98c7952-afcb-4356-a1ea-13314897ed01',
          racial_feature_id: '0d12dc49-cda4-4683-a0d0-744233c45121',
        },
        {
          id: uuidv4(),
          subrace_id: 'f00a5166-7d1a-4c38-ac37-cdbc60101599',
          racial_feature_id: 'd8ecb045-8c51-4266-9d5b-299543cbc979',
        },
        {
          id: uuidv4(),
          subrace_id: '0ca3a34f-8ac4-4dd8-9691-67f936adf965',
          racial_feature_id: 'cd124564-a8fb-4c88-b2ab-5fd77daff03a',
        },
        {
          id: uuidv4(),
          subrace_id: '0636b933-d352-462a-8e1c-2153aee39489',
          racial_feature_id: 'd7328166-8904-4d32-b903-6863780fb5b3',
        },
        {
          id: uuidv4(),
          subrace_id: '0636b933-d352-462a-8e1c-2153aee39489',
          racial_feature_id: '0d12dc49-cda4-4683-a0d0-744233c45121',
        },
        {
          id: uuidv4(),
          subrace_id: '0636b933-d352-462a-8e1c-2153aee39489',
          racial_feature_id: 'eafe5bfe-b9cb-427e-bbd2-7dcecaa785af',
        },
        {
          id: uuidv4(),
          subrace_id: '0636b933-d352-462a-8e1c-2153aee39489',
          racial_feature_id: 'ba33a067-84a5-4c62-84af-b30f29a1b76c',
        },
        {
          id: uuidv4(),
          subrace_id: 'ceca121e-6ba4-46e1-bb57-e0e30bca67b4',
          racial_feature_id: 'a80add10-66cd-4f9d-bea5-9d4fe8626760',
        },
        {
          id: uuidv4(),
          subrace_id: 'ceca121e-6ba4-46e1-bb57-e0e30bca67b4',
          racial_feature_id: 'eec82090-19fd-4d55-86d2-ba620fc5588f',
        },
        {
          id: uuidv4(),
          subrace_id: 'ceca121e-6ba4-46e1-bb57-e0e30bca67b4',
          racial_feature_id: '991d78bd-e768-431e-92c7-b9835c7de55f',
        },
        {
          id: uuidv4(),
          subrace_id: 'ceca121e-6ba4-46e1-bb57-e0e30bca67b4',
          racial_feature_id: 'a4841abc-7c4b-4e5c-9332-7fa01beb44e2',
        },
        {
          id: uuidv4(),
          subrace_id: '8f3e1442-e77a-472c-b32e-a1b2721d206c',
          racial_feature_id: '863a17f9-7129-4dce-ada9-c2cf2bf6dd61',
        },
        {
          id: uuidv4(),
          subrace_id: '8f3e1442-e77a-472c-b32e-a1b2721d206c',
          racial_feature_id: '23c98fca-81f6-4317-9801-d0014a7ce22a',
        },
        {
          id: uuidv4(),
          subrace_id: '8f3e1442-e77a-472c-b32e-a1b2721d206c',
          racial_feature_id: '7e7601f3-6ab0-49fa-a33a-d61b48da9c4f',
        },
        {
          id: uuidv4(),
          subrace_id: '9378f049-52c6-46e4-a357-f862719d6d51',
          racial_feature_id: 'a3fd6ae4-6fa4-42eb-934c-f73b170d0fd4',
        },
        {
          id: uuidv4(),
          subrace_id: '9378f049-52c6-46e4-a357-f862719d6d51',
          racial_feature_id: '2e9e2911-6bdb-4f68-b659-d3deead9a26c',
        },
        {
          id: uuidv4(),
          subrace_id: '9378f049-52c6-46e4-a357-f862719d6d51',
          racial_feature_id: 'f4d3b1f4-33dc-4d66-a13d-41a1e9617231',
        },
        {
          id: uuidv4(),
          subrace_id: '9378f049-52c6-46e4-a357-f862719d6d51',
          racial_feature_id: '0690abf0-f493-4a96-bcd8-430f2a5e41aa',
        },
        {
          id: uuidv4(),
          subrace_id: '3387e293-84fe-4da4-90d9-7c59239ad3e6',
          racial_feature_id: 'c1700616-b49a-4c81-9169-ee209fcbd288',
        },
        {
          id: uuidv4(),
          subrace_id: '3387e293-84fe-4da4-90d9-7c59239ad3e6',
          racial_feature_id: 'b2292575-6df4-4613-8ffb-ec740fe00768',
        },
        {
          id: uuidv4(),
          subrace_id: 'acda3018-863b-4397-82e7-4916fb899514',
          racial_feature_id: '4c3f13dd-b7d0-4ce4-837b-f850325b994b',
        },
        {
          id: uuidv4(),
          subrace_id: 'acda3018-863b-4397-82e7-4916fb899514',
          racial_feature_id: 'cf00e974-301e-4839-bd75-4067b4168451',
        },
        {
          id: uuidv4(),
          subrace_id: '24eaf7a9-43e2-4a04-9176-6e6b4939392e',
          racial_feature_id: 'c0a009ce-db31-460f-ba64-c7bcdf19017e',
        },
        {
          id: uuidv4(),
          subrace_id: '24eaf7a9-43e2-4a04-9176-6e6b4939392e',
          racial_feature_id: '4c3f13dd-b7d0-4ce4-837b-f850325b994b',
        },
        {
          id: uuidv4(),
          subrace_id: '24eaf7a9-43e2-4a04-9176-6e6b4939392e',
          racial_feature_id: 'cf00e974-301e-4839-bd75-4067b4168451',
        },
        {
          id: uuidv4(),
          subrace_id: '22c04157-673c-4725-9fd5-4da0a9a38215',
          racial_feature_id: 'c0a009ce-db31-460f-ba64-c7bcdf19017e',
        },
        {
          id: uuidv4(),
          subrace_id: '22c04157-673c-4725-9fd5-4da0a9a38215',
          racial_feature_id: '23c98fca-81f6-4317-9801-d0014a7ce22a',
        },
        {
          id: uuidv4(),
          subrace_id: '22c04157-673c-4725-9fd5-4da0a9a38215',
          racial_feature_id: '7e7601f3-6ab0-49fa-a33a-d61b48da9c4f',
        },
        {
          id: uuidv4(),
          subrace_id: '7d96bdc9-331f-4061-8f3f-9c2a90f37f40',
          racial_feature_id: '422a8c9e-f06b-49e5-a528-9d0f1b52a96b',
        },
        {
          id: uuidv4(),
          subrace_id: '7d96bdc9-331f-4061-8f3f-9c2a90f37f40',
          racial_feature_id: '3f65c9ee-f5f8-4ae2-94d6-0b6d178f5b38',
        },
        {
          id: uuidv4(),
          subrace_id: 'af883780-25a2-4986-821c-2b10f42f6493',
          racial_feature_id: '7a3796c3-c84d-4779-a425-c2121ba86d35',
        },
        {
          id: uuidv4(),
          subrace_id: 'af883780-25a2-4986-821c-2b10f42f6493',
          racial_feature_id: 'ae357bbe-e004-4a3c-a83d-25c4d2135272',
        },
        {
          id: uuidv4(),
          subrace_id: '42f2eed8-87bf-4562-a52b-59b33f312306',
          racial_feature_id: '89514aaf-9125-4583-b1a2-585834ba946b',
        },
        {
          id: uuidv4(),
          subrace_id: '42f2eed8-87bf-4562-a52b-59b33f312306',
          racial_feature_id: '5845f54e-d7f0-4133-8992-a459f52147f7',
        },
        {
          id: uuidv4(),
          subrace_id: '42f2eed8-87bf-4562-a52b-59b33f312306',
          racial_feature_id: 'a3a68aa5-987a-49a1-83b8-b935bbd23550',
        },
        {
          id: uuidv4(),
          subrace_id: 'e8340bca-26ad-4aae-a6c3-53133b02b5ce',
          racial_feature_id: 'e0f94fd4-01a2-4bd1-b158-477812400bc0',
        },
        {
          id: uuidv4(),
          subrace_id: 'e8340bca-26ad-4aae-a6c3-53133b02b5ce',
          racial_feature_id: 'edfb6ee8-6402-41f4-84fd-c8fe6fe0a1f6',
        },
        {
          id: uuidv4(),
          subrace_id: 'e8340bca-26ad-4aae-a6c3-53133b02b5ce',
          racial_feature_id: '385c995d-58b7-40bc-9a26-0988605a6fb2',
        },
        {
          id: uuidv4(),
          subrace_id: 'e8340bca-26ad-4aae-a6c3-53133b02b5ce',
          racial_feature_id: '26d0532a-38ca-47c9-b1a1-cb2b5454ddf3',
        },
        {
          id: uuidv4(),
          subrace_id: 'ccff8b87-c941-4b93-8109-0923a0e4b3e7',
          racial_feature_id: '41822342-8b49-4e45-9c71-aece44ad9e08',
        },
        {
          id: uuidv4(),
          subrace_id: 'ccff8b87-c941-4b93-8109-0923a0e4b3e7',
          racial_feature_id: '9b1da95f-ac5b-45b1-8214-daf11a887ad9',
        },
        {
          id: uuidv4(),
          subrace_id: 'ccff8b87-c941-4b93-8109-0923a0e4b3e7',
          racial_feature_id: 'dc785a59-1b75-41ac-90f3-73a586c02936',
        },
        {
          id: uuidv4(),
          subrace_id: 'e71fbb8c-bc70-4a10-94fb-94da1b1dac7a',
          racial_feature_id: '124563d0-4f57-48a4-aaeb-6c648419da85',
        },
        {
          id: uuidv4(),
          subrace_id: 'e71fbb8c-bc70-4a10-94fb-94da1b1dac7a',
          racial_feature_id: 'bb6e3c99-12a3-4907-9ed4-d04ee07c9eb2',
        },
        {
          id: uuidv4(),
          subrace_id: 'fd1c1b23-95df-46b6-942d-6a5f088bde90',
          racial_feature_id: '5f0a72c1-6c0b-487c-97f1-b9e0ad46cf6d',
        },
        {
          id: uuidv4(),
          subrace_id: 'fd1c1b23-95df-46b6-942d-6a5f088bde90',
          racial_feature_id: 'd7328166-8904-4d32-b903-6863780fb5b3',
        },
        {
          id: uuidv4(),
          subrace_id: 'fd1c1b23-95df-46b6-942d-6a5f088bde90',
          racial_feature_id: '4a0efcdb-bb1c-448f-bff7-a160e2924e47',
        },
        {
          id: uuidv4(),
          subrace_id: 'fd1c1b23-95df-46b6-942d-6a5f088bde90',
          racial_feature_id: '0238ce9c-ffd2-44fb-b064-a696482f794c',
        },
        {
          id: uuidv4(),
          subrace_id: '2730628d-b07f-42a3-9932-64f49d21c63f',
          racial_feature_id: '317c6247-04c9-483e-84e1-025a10daec15',
        },
        {
          id: uuidv4(),
          subrace_id: '2730628d-b07f-42a3-9932-64f49d21c63f',
          racial_feature_id: 'a977b73c-bc53-4571-bf35-2e7856466c5a',
        },
        {
          id: uuidv4(),
          subrace_id: '34655b63-e639-42c8-9911-68464cbd5c8d',
          racial_feature_id: 'ce0fac5f-22fa-4e42-a283-d98d632a20ec',
        },
        {
          id: uuidv4(),
          subrace_id: '34655b63-e639-42c8-9911-68464cbd5c8d',
          racial_feature_id: 'b680ecfd-3474-4f21-9daf-a51808df6857',
        },
        {
          id: uuidv4(),
          subrace_id: '4bf910eb-6972-4abd-9ce3-c169a9dc3f7d',
          racial_feature_id: '3dcb5062-b867-4178-90ea-d8144a8dfff5',
        },
        {
          id: uuidv4(),
          subrace_id: '897a8f8d-a578-4bc4-bf00-e20c4e5591e7',
          racial_feature_id: 'bdc6755f-c324-4439-8cce-be2913829e83',
        },
        {
          id: uuidv4(),
          subrace_id: 'a5e5e8cb-adef-4170-bad1-555a51d55917',
          racial_feature_id: '88506899-e171-46c1-9fb7-f1ad2b979671',
        },
        {
          id: uuidv4(),
          subrace_id: '41d9132f-9daf-43a3-8a01-f61161e9f098',
          racial_feature_id: '05c7ef27-ec98-460e-95ee-4ceef4a16537',
        },
        {
          id: uuidv4(),
          subrace_id: '41d9132f-9daf-43a3-8a01-f61161e9f098',
          racial_feature_id: '0f619f99-69d3-4662-bc78-c60c65a941ab',
        },
        {
          id: uuidv4(),
          subrace_id: '4db7411f-e48e-417f-a257-e8fc38ac0832',
          racial_feature_id: '9145f73a-9ac1-40b1-b768-171ac83f10ff',
        },
        {
          id: uuidv4(),
          subrace_id: '4db7411f-e48e-417f-a257-e8fc38ac0832',
          racial_feature_id: 'd2c9d99c-cefc-498f-885c-dd6743aeac2e',
        },
        {
          id: uuidv4(),
          subrace_id: 'ea7d72dd-37dd-4619-8b58-fc93d8f27862',
          racial_feature_id: 'd03432b7-7788-4ce1-8d90-7864065cc939',
        },
        {
          id: uuidv4(),
          subrace_id: 'ea7d72dd-37dd-4619-8b58-fc93d8f27862',
          racial_feature_id: '104dec56-1bc1-4d05-aac5-5c3508e2c07d',
        },
        {
          id: uuidv4(),
          subrace_id: '236e0c11-74c4-49b4-908b-baa900ee98b5',
          racial_feature_id: '571457e8-e516-4e1e-957f-fe62d455f47a',
        },
        {
          id: uuidv4(),
          subrace_id: '236e0c11-74c4-49b4-908b-baa900ee98b5',
          racial_feature_id: '5cf4f7c2-9a0d-413c-a393-1b3fc0f4c445',
        },
        {
          id: uuidv4(),
          subrace_id: 'e803e56c-64eb-438a-ab0e-341cb0dd0659',
          racial_feature_id: 'e1e23543-3554-4e67-a6a4-da52cb4d4229',
        },
        {
          id: uuidv4(),
          subrace_id: 'f2b80ef3-1638-479a-8bc0-db33275d0511',
          racial_feature_id: '02620457-7a9a-460b-bf72-7a01506cc18b',
        },
        {
          id: uuidv4(),
          subrace_id: 'f2b80ef3-1638-479a-8bc0-db33275d0511',
          racial_feature_id: '8aaf5037-8bc3-45a0-8f84-cfc7de666680',
        },
        {
          id: uuidv4(),
          subrace_id: 'f2b80ef3-1638-479a-8bc0-db33275d0511',
          racial_feature_id: '77f0da99-2853-424b-9773-771fbaaaeb76',
        },
      ])
    )
