exports.up = knex =>
  knex.schema.raw(`
            create type asi_from_type as enum(
              'race', 
              'points', 
              'asi4_1',
              'asi4_2',
              'asi6_1',
              'asi6_2',
              'asi8_1',
              'asi8_2',
              'asi12_1',
              'asi12_2',
              'asi14_1',
              'asi14_2',
              'asi16_1',
              'asi16_2',
              'asi19_1',
              'asi19_2'
            );
            
            drop table app_character.asi_selected;
            
            create table app_character.asi_selected(
              asi_sel_id uuid primary key default uuid_generate_v4(),
              character_id uuid references app_character.character(character_id),
              user_id uuid references public.minion(id) default current_setting('jwt.claims.user_id')::uuid,
              asi_from asi_from_type not null,
              asi_id uuid references public.asi(asi_id),
              feat_id uuid references public.feats(id),
              count integer
            );

            CREATE POLICY select_asi_selected ON app_character.asi_selected
                FOR SELECT
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);

            GRANT SELECT ON app_character.asi_selected TO role_minion; 

            CREATE POLICY insert_asi_selected ON app_character.asi_selected
                FOR INSERT
                WITH CHECK (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT INSERT ON app_character.asi_selected TO role_minion; 

            CREATE POLICY update_asi_selected ON app_character.asi_selected
                FOR UPDATE
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT UPDATE ON app_character.asi_selected TO role_minion; 
        `)

exports.down = knex => knex.schema.raw(``)
