exports.up = knex => (
    knex.schema
        .raw(`
            create type feat_from_type as enum(
              'race', 
              'asi_4',
              'asi_6',
              'asi_8',
              'asi_12',
              'asi_14',
              'asi_16',
              'asi_19'
            );
            
            create table app_character.feat_selected(
              feat_sel_id uuid primary key default uuid_generate_v4(),
              character_id uuid references app_character.character(character_id),
              user_id uuid references public.minion(id) default current_setting('jwt.claims.user_id')::uuid,
              feat_from feat_from_type not null,
              feat_id uuid references public.feats(id)
            );

            CREATE POLICY select_feat_selected ON app_character.feat_selected
                FOR SELECT
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);

            GRANT SELECT ON app_character.feat_selected TO role_minion; 

            CREATE POLICY insert_feat_selected ON app_character.feat_selected
                FOR INSERT
                WITH CHECK (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT INSERT ON app_character.feat_selected TO role_minion; 

            CREATE POLICY update_feat_selected ON app_character.feat_selected
                FOR UPDATE
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT UPDATE ON app_character.feat_selected TO role_minion; 

            CREATE POLICY delete_feat_selected ON app_character.feat_selected
                FOR DELETE
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT DELETE ON app_character.feat_selected TO role_minion; 
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)
