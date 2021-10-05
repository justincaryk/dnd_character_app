exports.up = knex => (
    knex.schema
        .raw(`
            create table app_character.spell_selected (
                spell_sel_id uuid primary key default uuid_generate_v4(),
                user_id uuid references public.minion(id) default current_setting('jwt.claims.user_id')::uuid,
                character_id uuid references app_character.character(character_id) not null,
                spell_id uuid references public.spells(id) not null,
                spell_book boolean,
                prepared boolean not null
            );

            CREATE POLICY select_spell_selected ON app_character.spell_selected
                FOR SELECT
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);

            GRANT SELECT ON app_character.spell_selected TO role_minion; 

            CREATE POLICY insert_spell_selected ON app_character.spell_selected
                FOR INSERT
                WITH CHECK (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT INSERT ON app_character.spell_selected TO role_minion; 

            CREATE POLICY update_spell_selected ON app_character.spell_selected
                FOR UPDATE
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT UPDATE ON app_character.spell_selected TO role_minion; 

            CREATE POLICY delete_spell_selected ON app_character.spell_selected
            FOR DELETE
                USING (user_id = current_setting('jwt.claims.user_id')::uuid);
    
            GRANT DELETE ON app_character.spell_selected TO role_minion; 
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)
