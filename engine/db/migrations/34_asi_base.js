exports.up = knex => (
    knex.schema
        .raw(`
            
            create type asi_core_method as enum(
              'point_buy',
              'standard',
              'manual'
            );
            
            create table app_character.asi_selected_core (
              asi_sel_base_id uuid primary key default uuid_generate_v4(),
              character_id uuid references app_character.character(character_id),
              user_id uuid references public.minion(id) default current_setting('jwt.claims.user_id')::uuid,
              method asi_core_method not null,
              strength integer,
              dexterity integer,
              constitution integer,
              intelligence integer,
              wisdom integer,
              charisma integer,
              constraint valid_str
                check(strength < 31 and strength > 2),
              constraint valid_dex
                check(dexterity < 31 and dexterity > 2),
              constraint valid_con
                check(constitution < 31 and constitution > 2),
              constraint valid_int
                check(intelligence < 31 and intelligence > 2),
              constraint valid_wis
                check(wisdom < 31 and wisdom > 2),
              constraint valid_cha
                check(charisma < 31 and charisma > 2) 
            );

            CREATE POLICY select_asi_selected_core ON app_character.asi_selected_core
                FOR SELECT
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);

            GRANT SELECT ON app_character.asi_selected_core TO role_minion; 

            CREATE POLICY insert_asi_selected_base ON app_character.asi_selected_core
                FOR INSERT
                WITH CHECK (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT INSERT ON app_character.asi_selected_core TO role_minion; 

            CREATE POLICY update_asi_selected_base ON app_character.asi_selected_core
                FOR UPDATE
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT UPDATE ON app_character.asi_selected_core TO role_minion; 

            CREATE POLICY del_asi_selected_base ON app_character.asi_selected_core
                FOR DELETE
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT DELETE ON app_character.asi_selected_core TO role_minion; 
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)

